import React from "react";
import './index.css';

const App = () => {
  const today = new Date();
  const time = today.getHours();
  let greeting = "";
  let style = {};

  if(time>=1 && time<12){
    greeting = "Good Morning 🥳";
    style.color = "green";
  }else if(time>=12 && time<19){
      greeting = "Good Afternoon 🥱";
      style.color="orange";
  }else{
      greeting = "Good Night 😴";
      style.color = "gray";
  }

  return (
    <>
      <h1>Hello User! <span style = {style}>{greeting}</span></h1>
    </>
  );
};

export default App;
