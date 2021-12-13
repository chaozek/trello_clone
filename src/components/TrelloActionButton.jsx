import { Button, Card } from "@mui/material";
import { addCard, addList } from "../redux/listsSlice";
import { useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import styled from "styled-components";
/* eslint react/prop-types: 0 */

const TrelloActionButton = ({ list, listID }) => {
  const buttonText = list ? "Add another list" : "Add another card";
  const buttonTextColor = list ? "white" : "black";
  const backgroundColor = list ? "none" : "#CCCCCC";
  const [formOpen, setFormOpen] = useState(false);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const renderForm = () => {
    const placeholder = list
      ? "Enter List Title"
      : "Enter a title for this card";
    const buttonTitle = list ? "Add list" : "Add Card ";
    const handleAddList = () => {
      if (text) {
        dispatch(addList(text));
        setText("");
      }
      return;
    };
    const handleChange = (e) => {
      setText(e.target.value);
    };
    const handleAddCard = () => {
      if (text) {
        dispatch(addCard({ listID, text }));
        setText("");
      }
      return;
    };
    return (
      <div>
        <Card
          style={{
            overflow: "visible",
            minHeight: 80,
            minWidth: 282,
            padding: "6px 8px 2px",
          }}
        >
          <TextareaAutosize
            placeholder={placeholder}
            autoFocus
            onBlur={() => setFormOpen(false)}
            value={text}
            onChange={(e) => handleChange(e)}
            style={{
              resize: "none",
              width: "100%",
              outline: "none",
              border: "none",
            }}
          />
        </Card>
        <Center>
          <Button
            onMouseDown={list ? () => handleAddList() : () => handleAddCard()}
            variant="contained"
            style={{ color: "white", backgroundColor: "#5aac44" }}
          >
            {buttonTitle}
          </Button>
          <CloseIcon />
        </Center>
      </div>
    );
  };

  const renderButton = () => {
    return (
      <>
        <AddIcon />
        <P> {buttonText}</P>
      </>
    );
  };

  return (
    <Container
      buttonTextOpacity={list ? 1 : 0.5}
      buttonTextColor={list ? "white" : "black"}
      backgroundColor={list ? "#CCCCCC" : "none"}
      margin={list ? "8px" : "0px"}
      width={list ? "300px" : "100%"}
      padding={list ? "8px" : ""}
      onClick={() => setFormOpen(true)}
    >
      {formOpen === true ? renderForm() : renderButton()}
    </Container>
  );
};

export default TrelloActionButton;
const Container = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.buttonTextColor};
  margin: ${(props) => props.margin};
  min-width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.backgroundColor};
`;
const P = styled.div`
  display: flex;
  align-items: center;
  opacity: ${(props) => props.buttonTextOpacity};
  color: ${(props) => props.buttonTextColor};
`;
const Center = styled.div`
  display: flex;
  align-items: center;

  margin: 8px 0px;
  justify-content: space-between;
`;
