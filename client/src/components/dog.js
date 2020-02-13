import React from 'react';
import style from 'styled-components';
import NameCard from './nameCard.js'

var StyledDiv = style.div`
  text-align: center;
  margin: .5em;
  color: #6504b5;

  box-sizing: border-box;
  border: 1px outset black;
  border-radius:10px;
  width: 228px;
  height: 300px;
  overflow: hidden;
  float: left;
`;

var StyledImg = style.div`
  height: 80%;
  width: 100%;
  align: middle;
  // object-fit: contain;
  overflow: hidden;
  // border-radius: 10px;
  // background-image: url(${(props) => {props.img}});
`; // height='228' width='228' 'border-radius':'10px'

class Dog extends React.Component {
  constructor(props) {
    super(props); 
  }

  render() {
    return (
      <StyledDiv>
      <div>
        <StyledImg>
        <img src={this.props.dog.imageURL} height='240px' align='middle' overflow='hidden'></img>
        </StyledImg>
        <NameCard name={this.props.dog.name} dist={this.props.dog.dist}/>
      </div>
      </StyledDiv>
    )
  }

}

export default Dog;