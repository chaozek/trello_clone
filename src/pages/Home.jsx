import "grapesjs/dist/css/grapes.min.css";
import { Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import TrelloActionButton from "../components/TrelloActionButton";
import TrelloList from "../components/TrelloList";
import gjsPresetWebpage from "grapesjs-preset-webpage";
import grapesjs from "grapesjs";
import styled from "styled-components";

const Home = () => {
  const lists = useSelector((state) => state.lists.lists);
  return (
    <Droppable droppableId="all-lists" direction="horizontal" type="list">
      {(provided) => (
        <Section {...provided.droppableProps} ref={provided.innerRef}>
          {lists?.map((list, i) => (
            <TrelloList
              key={list.id}
              listID={list.id}
              title={list.title}
              cards={list.cards}
              index={i}
            />
          ))}
          {provided.placeholder}
          <TrelloActionButton list />
        </Section>
      )}
    </Droppable>
  );
};

export default Home;
const Section = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  scroll-direction: horizontal;
`;
