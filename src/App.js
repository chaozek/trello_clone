import { DragDropContext } from "react-beautiful-dnd";
import { GlobalStyles } from "./GlobalStyles";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { sort } from "./redux/listsSlice";
import { useDispatch } from "react-redux";
import Home from "./pages/Home";
export default function App() {
  const dispatch = useDispatch();
  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    if (!destination) {
      return;
    }
    const droppableIdStart = result.source.droppableId;
    const droppableIdEnd = result.destination.droppableId;
    const droppableIndexStart = result.source.index;
    const droppableIndexEnd = result.destination.index;
    dispatch(
      sort({
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
        type,
      })
    );
  };
  return (
    <Router>
      <GlobalStyles />
      <DragDropContext onDragEnd={(e) => onDragEnd(e)}>
        <Home />
      </DragDropContext>
    </Router>
  );
}
