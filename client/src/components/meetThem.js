import React from 'react';
import style from 'styled-components';

var StyledDiv = style.div`
  background-color: #6504b5;
  text-align: center;
  color: white;
  box-sizing: border-box;
  border: 1px outset black;
  width: 290;
  height: 360;
  float: left;
  boxSizing: border-box;
  position: relative;
`;

var StyledSubDiv = style.div`
  background-color: #6504b5;
  text-align: center;
  color: white;
  width: 290;
`;

function MeetThem(props) {

  return(
    <StyledDiv>
      <br></br>
      <br></br>
      <img src='https://availabledogphotos.s3.amazonaws.com/paw.png'></img>
      <br></br>
      <br></br>
      <br></br>
      {Math.max(props.dogs.length - 4, 0)} more {props.breed}s <br></br>
      available for adoption
      <hr></hr>
      <br></br>
      <StyledSubDiv>
        Meet Them
      </StyledSubDiv>
      <br></br>
    </StyledDiv>
  )
}

export default MeetThem;

