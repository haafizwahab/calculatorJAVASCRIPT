import React from 'react';

const Result = (props) => {
  return (
    <div style={result}>
      <p style={inputText} name='inputText'>
        {props.history}
      </p>
      <p style={resultText} name='resultText'>
        {props.result}
      </p>
    </div>
  );
};

const result = {
  backgroundColor: 'black',
  marginLeft: '20px',
  marginRight: '20px',
  height: '80px',
  borderRadius: '20px',
};
const inputText = {
  // backgroundColor: "red",
  paddingRight: '20px',
  color: 'white',
  textAlign: 'Right',
};
const resultText = {
  // backgroundColor: "blue",
  paddingRight: '20px',
  textAlign: 'Right',
  color: 'white',
  fontSize: '27px',
};
export default Result;
