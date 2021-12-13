import { GET_DATA_QUERY, URL_API } from "../constants";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { original } from "immer";
import axios from "axios";

export const getLists = createAsyncThunk("launches/getLists", async () => {
  try {
  } catch (error) {}
});
let listID = 3;
let cardID = 6;
const listsSlice = createSlice({
  name: "lists",
  initialState: {
    lists: [
      {
        id: `list-${0}`,
        title: "1",
        cards: [
          { id: `card-${1}`, text: "We created 1 card" },
          { id: `card-${2}`, text: "We created 2 card" },
        ],
      },
      {
        id: `list-${1}`,
        title: "2",
        cards: [
          { id: `card-${3}`, text: "We created 1 card" },
          { id: `card-${4}`, text: "We created 2 card" },
          { id: `card-${5}`, text: "We created 3 card" },
        ],
      },
    ],
    status: null,
    error: null,
  },
  reducers: {
    addList: (state, action) => {
      const newList = {
        id: `list-${listID}`,
        title: action.payload,
        cards: [],
      };
      listID += 1;
      return { ...state, lists: [...state.lists, newList] };
    },
    addCard: (state, action) => {
      const newCard = {
        id: `card-${cardID}`,
        text: action.payload.text,
      };
      cardID += 1;
      const lists = state.lists.map((list) => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard],
          };
        } else {
          return list;
        }
      });

      return { ...state, lists: lists };
    },
    sort: (state, action) => {
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
        type,
      } = action.payload;

      if (type === "list") {
        const newState = [...state.lists];
        const list = state.lists.splice(droppableIndexStart, 1);
        state.lists.splice(droppableIndexEnd, 0, ...list);
        return;
      }
      if (droppableIdStart === droppableIdEnd) {
        let list = state.lists.find((list) => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }
      if (droppableIdStart !== droppableIdEnd) {
        let list = state.lists.find((list) => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        let listEnd = state.lists.find((list) => droppableIdEnd === list.id);
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }
    },
  },
  extraReducers: {
    [getLists.pending]: (state) => {
      state.status = "loading";
    },
    [getLists.fulfilled]: (state, action) => {
      state.launches = action.payload;
      state.status = "success";
    },
    [getLists.rejected]: (state) => {
      state.status = "failed";
    },
  },
});
export const { addList, addCard, sort } = listsSlice.actions;

export default listsSlice.reducer;
