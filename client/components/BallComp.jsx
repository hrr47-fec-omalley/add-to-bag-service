/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import styled from 'styled-components';

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
      buttons: [{ backgroundImage: 'https://fecproductimages.s3-us-west-1.amazonaws.com/MykeaImages/heart.png' }, { backgroundImage: 'https://fecproductimages.s3-us-west-1.amazonaws.com/MykeaImages/check.png' }],
    };
  }

  handleClick(button) {
    this.setState((prevState) => ({
      // eslint-disable-next-line max-len
      buttons: prevState.buttons.filter((btn) => btn.backgroundImage !== button.backgroundImage).concat({ button }),
      // .concat({button, selected: !button.selected })
    }));
  }

  render() {
    return (
      <ButtonsRow>
        // eslint-disable-next-line react/destructuring-assignment
        // eslint-disable-next-line max-len
        { this.state.buttons.map((button) => (<Button key={button.backgroundImage} selected={button.selected} onClick={this.handleClick(button)}>{button.backgroundImage}</Button>))}
      </ButtonsRow>
    );
  }
}

export default ButtonsContainer;
