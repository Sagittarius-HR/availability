import React from 'react';
import style from 'styled-components';

var StyledDiv = style.div`
  background-color: #6504b5;
  text-align: center;
  margin: .5em;
  color: white;
  box-sizing: border-box;
  border: 1px outset black;
  border-radius:10px;
  width: 228px;
  height: 300px;
  overflow: auto;
  float: left;
  line-height: 125%;
  position: relative;
`;

var StyledInfo = style.div`
  background-color: #6504b5;
  text-align: center;
  color: white;
  box-sizing: border-box;
  border: 1px outset black;
  width: 100%;
  height: 80%;
  overflow: auto;
  float: left;
  line-height: 150%;
  position: relative;
  white-space: normal;
`;

var StyledSubDiv = style.div`
  background-color: #6504b5;
  text-align: center;
  border-radius:0px 0px 10px 10px;
  color: white;
  width: 100%;
  height: 20%;
  box-sizing: border-box;
  position: relative;
  border-top: 1px solid black;
  overflow: hidden;
  &:hover {
    background-color: #330066
  }
`;

function MeetThem(props) {

  return(
    <StyledDiv>
      <StyledInfo>
        <br></br>
        <br></br>
        <img src='https://availabledogphotos.s3.amazonaws.com/paw.png'></img>
        <br></br>
        <br></br>
        {Math.max(props.dogs.length - props.displayNum, 0)} more {props.breed}s
        available for adoption
        <br></br>     
      </StyledInfo>
      <StyledSubDiv>
        <br></br>
        Meet Them
        <br></br>
        <br></br>
      </StyledSubDiv>
      
    </StyledDiv>
  )
}

export default MeetThem;

