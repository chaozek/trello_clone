import { createGlobalStyle } from "styled-components";
export const theme = {
  color: {
    darkGray: "#121212",
    white: "white",
    blue: "#3bb6d7",
    customWhite: "#e8f9f2",
    gray: "##FEFEFE",
  },
};

export const GlobalStyles = createGlobalStyle`
input {
  all: unset;
}
  body {
    -webkit-appearance:none;
    background-position: top right;
    background-repeat: no-repeat;
    background-size: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    font-family: 'Quicksand', sans-serif;
    background-color: #FEFEFE;
    color:white;
    scroll-behavior: smooth;
    background: linear-gradient(#80FFDB, #5390D9);
;
html{
  -webkit-appearance:none;
  box-sizing: border-box; 
  margin: 0;
    padding: 0;
    background-color: ${theme.color.gray};
    scroll-behavior: smooth;
overflow-x: hidden;
overflow: scroll;
-ms-overflow-style: none;
scrollbar-width:none;

}
  }
a{
  text-decoration: none !important;

}
  ul{
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: black;
  }

html, body{
  ::-webkit-scrollbar{
    display:none
  }
}
input:focus,textarea:focus {
    outline : none ;
}
input::-ms-clear {
    display : none ;
}
textarea {
    resize: none ;
    font-size:16px;
}
select{
  -webkit-appearance:none;
}
option{
  -webkit-appearance:none;
}
button{
  -webkit-appearance: none;
-moz-appearance: none;
appearance: none;
}
input{
  font-size: 16px;
  -webkit-appearance:none;
  padding: 10px;
}
input[type="date"]::-webkit-datetime-edit-text,
input[type="date"]::-webkit-datetime-edit-month-field,
input[type="date"]::-webkit-datetime-edit-day-field,
input[type="date"]::-webkit-datetime-edit-year-field {
  color: ${theme.color.gray};
}
input[type="date"].date-input--has-value::-webkit-datetime-edit-text,
input[type="date"].date-input--has-value::-webkit-datetime-edit-month-field,
input[type="date"].date-input--has-value::-webkit-datetime-edit-day-field,
input[type="date"].date-input--has-value::-webkit-datetime-edit-year-field {
}
input[type=checkbox] {
  -webkit-appearance: none;
  -moz-appearance:    none;
  appearance:         none;
}

input[type="radio"]{
    -webkit-appearance: radio !important;
    padding: 0
}


`;
