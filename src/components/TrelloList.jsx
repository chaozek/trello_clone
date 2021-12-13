import { Draggable, Droppable } from "react-beautiful-dnd";
import React, { useState } from "react";
import TrelloActionButton from "./TrelloActionButton";
import TrelloCard from "./TrelloCard";
import styled from "styled-components";
/* eslint react/prop-types: 0 */
const TrelloList = ({ title, cards, listID, index }) => {
  return (
    <Draggable draggableId={String(listID)} index={index}>
      {(provided) => (
        <Container
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
        >
          <Droppable droppableId={String(listID)}>
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <h4>{title}</h4>
                {cards.map((card, i) => (
                  <TrelloCard
                    key={card.id}
                    index={i}
                    text={card.text}
                    id={card.id}
                  />
                ))}

                {provided.placeholder}
                <TrelloActionButton listID={listID} />
              </div>
            )}
          </Droppable>
        </Container>
      )}
    </Draggable>
  );
};

export default TrelloList;
const Container = styled.div`
  background: #ccc;
  height: 3;
  min-width: 300px;
  padding: 8px;
  margin: 8px;
  scroll-direction: horizontal;
`;
