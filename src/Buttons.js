import React from "react";

const Buttons = props => {
  return (
    <div className='Buttons' style={container}>
      <button
        name='('
        style={buttonstyle}
        onClick={e => props.onClick(e.target.name)}
      >
        (
      </button>
      <button
        name='CE'
        style={buttonstyle}
        onClick={e => props.onClick(e.target.name)}
      >
        CE
      </button>
      <button
        name=')'
        style={buttonstyle}
        onClick={e => props.onClick(e.target.name)}
      >
        )
      </button>
      <button
        name='C'
        style={buttonstyle}
        onClick={e => props.onClick(e.target.name)}
      >
        C
      </button>
      <br />
      <button
        name='1'
        style={buttonstyle}
        onClick={e => props.onClick(e.target.name)}
      >
        1
      </button>
      <button
        name='2'
        style={buttonstyle}
        onClick={e => props.onClick(e.target.name)}
      >
        2
      </button>
      <button
        name='3'
        style={buttonstyle}
        onClick={e => props.onClick(e.target.name)}
      >
        3
      </button>
      <button
        name='+'
        style={buttonstyle}
        onClick={e => props.onClick(e.target.name)}
      >
        +
      </button>
      <br />

      <button
        name='4'
        style={buttonstyle}
        onClick={e => props.onClick(e.target.name)}
      >
        4
      </button>
      <button
        name='5'
        style={buttonstyle}
        onClick={e => props.onClick(e.target.name)}
      >
        5
      </button>
      <button
        name='6'
        style={buttonstyle}
        onClick={e => props.onClick(e.target.name)}
      >
        6
      </button>
      <button
        name='-'
        style={buttonstyle}
        onClick={e => props.onClick(e.target.name)}
      >
        -
      </button>
      <br />

      <button
        name='7'
        style={buttonstyle}
        onClick={e => props.onClick(e.target.name)}
      >
        7
      </button>
      <button
        name='8'
        style={buttonstyle}
        onClick={e => props.onClick(e.target.name)}
      >
        8
      </button>
      <button
        name='9'
        style={buttonstyle}
        onClick={e => props.onClick(e.target.name)}
      >
        9
      </button>
      <button
        name='*'
        style={buttonstyle}
        onClick={e => props.onClick(e.target.name)}
      >
        x
      </button>
      <br />

      <button
        name='.'
        style={buttonstyle}
        onClick={e => props.onClick(e.target.name)}
      >
        .
      </button>
      <button
        name='0'
        style={buttonstyle}
        onClick={e => props.onClick(e.target.name)}
      >
        0
      </button>
      <button
        name='='
        style={buttonstyle}
        onClick={e => props.onClick(e.target.name)}
      >
        =
      </button>
      <button
        name='/'
        style={buttonstyle}
        onClick={e => props.onClick(e.target.name)}
      >
        ÷
      </button>
      <br />
    </div>
  );
};
const container = {
  // backgroundColor: "black",
  // marginLeft: "40%",
  // marginRight: "40%",
  // padding: "20px"
  height: "370px"
};
const buttonstyle = {
  padding: "0px",
  marginLeft: "5px",
  marginRight: "5px",
  height: "60px",
  width: "60px",
  marginTop: "10px",
  fontSize: "20px",
  borderRadius: "30%",
  borderStyle: "none",
  backgroundColor: "white",
  color: "black"
};
export default Buttons;
