import React from 'react';
import style from 'styled-components';

var StyledDiv = style.div`
  text-align: center;
  color: #6504b5;
  background-color: white;
  width: 100%;
  height: 20%;
  overflow: auto;
  border-radius:0px 0px 10px 10px;
`;

function NameCard(props) {
  if(props.dist) {
    return (
      <StyledDiv>
      <br></br>
      <div>
        {props.name}
        <br></br>
        {/* {Math.floor(props.dist)} Miles Away */}
      </div>
      <br></br>
      </StyledDiv>
    )
  } else {
    return (
      <StyledDiv>
      <br></br>
      <div>
        {props.name}
      </div>
      <br></br>
      </StyledDiv>
    )
  }
    

}

export default NameCard;