import React, { useState } from "react";
import "./App.css";
import Buttons from "./Buttons";
import Result from "./Result";

function App() {
  // state for passing input and result as props
  const [state, setState] = useState({
    history: "",
    result: "0"
  });

  // funtion to calculate the input
  function calculate() {
    var str = state.history;
    var lastchar = str.substring(str.length - 1);
    // check if last entered input is an operator
    if (
      lastchar === "+" ||
      lastchar === "-" ||
      lastchar === "*" ||
      lastchar === "/"
    ) {
      str = str.slice(0, -1);
      try {
        setState({
          // eslint-disable-next-line
          result: (eval(str) || "") + "",
          history: state.history
        });
      } catch (e) {
        this.setState({
          result: "error"
        });
      }
    } else {
      try {
        setState({
          // eslint-disable-next-line
          result: (eval(state.history) || "") + "",
          history: state.history
        });
      } catch (e) {
        this.setState({
          result: "error"
        });
      }
    }
  }
  // function for reset
  function reset() {
    setState({ history: " ", result: "0" });
  }
  //function for backspace
  function backspace() {
    setState({
      history: state.history.slice(0, -1),
      result: state.result
    });
  }

  //event handler function
  function onClick(button) {
    if (button === "=") {
      calculate();
    } else if (button === "C") {
      reset();
    } else if (button === "CE") {
      backspace();
    } else {
      if (
        button === "+" ||
        button === "-" ||
        button === "*" ||
        button === "/"
      ) {
        var lastchar = state.history.substring(state.history.length - 1);
        if (
          lastchar === "+" ||
          lastchar === "-" ||
          lastchar === "*" ||
          lastchar === "/"
        ) {
          setState({
            history: state.history.replace(/.$/, button),
            result: state.result
          });
        } else
          setState({ history: state.history + button, result: state.result });
      } else
        setState({ history: state.history + button, result: state.result });
    }
  }

  return (
    <div className='App' style={mainContainer}>
      <h1>Calculator ReactJS :)</h1>
      <Result result={state.result} history={state.history} />
      <Buttons onClick={onClick} />
    </div>
  );
}
const mainContainer = {
  marginTop: "100px",
  marginLeft: "600px",
  marginRight: "600px",
  backgroundColor: "green",
  borderRadius: "10px"
};

export default App;
