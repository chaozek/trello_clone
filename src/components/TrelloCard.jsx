import { Draggable } from "react-beautiful-dnd";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import React from "react";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
/* eslint react/prop-types: 0 */
const TrelloCard = ({ text, id, index }) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <div style={{ marginBottom: "8px" }}>
          <Card
            style={styles.cardContainer}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {text}
              </Typography>
            </CardContent>
          </Card>
        </div>
      )}
    </Draggable>
  );
};

export default TrelloCard;
const styles = {
  cardContainer: {
    marginBottom: 8,
  },
};
