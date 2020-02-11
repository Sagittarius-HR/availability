import React from 'react';
import style from 'styled-components';
import NameCard from './nameCard.js'

var StyledDiv = style.div`
  text-align: center;
  float:left;
  padding: .5em;
  color: #6504b5;
`;

class Dog extends React.Component {
  constructor(props) {
    super(props); 
  }

  render() {
    return (
      <StyledDiv>
      <div>
        <img src={this.props.dog.imageURL} height='228' width='228'></img>
        <NameCard name={this.props.dog.name} dist={this.props.dog.dist}/>
      </div>
      </StyledDiv>
    )
  }

}

export default Dog;