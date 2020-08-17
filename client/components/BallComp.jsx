import React from 'react';
import styled from 'styled-components';
import { Column, Row } from 'simple-flexbox';
import ScrollMenu from 'react-horizontal-scrolling-menu';

const ButtonsRow = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const Button = styled.div`
  cursor: pointer;
  :hover {
    background-color: gray;
  };`;

class ButtonsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      buttons: [{backgroundImage: '/images/heart.png'}, {backgroundImage: '/images/check.png'}]
    };

  }

  handleClick (button) {
    this.setState((prevState) => ({
      buttons: prevState.buttons.filter(btn => btn.backgroundImage !== button.backgroundImage).concat({button})
        // .concat({button, selected: !button.selected })
    }));
  }

  render() {
    return (
      <ButtonsRow>
        {this.state.buttons.map(button => (<Button key={button.backgroundImage} selected={button.selected} onClick={this.handleClick(button)}>{button.backgroundImage}</Button>))}
      </ButtonsRow>
    );
  }
}

export default ButtonsContainer;