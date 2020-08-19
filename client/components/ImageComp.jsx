/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Column, Row } from 'simple-flexbox';

const Wrapper = styled.div`
border: solid 1px transparent;
border-radius:4px;
height: 100px;
width: 100px;
padding: 15px;
`;

const firstImage = styled.img`
flex-flow: column wrap;
font-size: .875rem;
font-weight: 700;
width: 70px;
height: 40px;
float: right;
padding: 3px;
margin-top: 40px;
position:relative;
flex-wrap: wrap;
:hover {
  outline: 2px solid black;
}
:active {
  outline: 2px solid black;
}
object-fit: cover;
;`;

const Thumb = styled.img`
flex-flow: column wrap;
font-size: .875rem;
font-weight: 700;
width: 70px;
height: 40px;
float: right;
padding: 3px;
margin-top: 40px;
position:relative;
flex-wrap: wrap;
:hover {
  outline: 2px solid black;
}
:active {
  outline: 2px solid black;
}
object-fit: cover;
;`;

const Description = styled.label`
    font-size: 15px;
;`;

//* Pen-specific styles */
class ImageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { description: '' };
    this.getInputValue = this.getInputValue.bind(this);
    console.log('test from ImageComponent');
  }

  getInputValue(descValue) {
    this.setState({
      description: descValue,
    });
  }

  render(props) {
    const { desc } = this.props;
    const imageList = [];
    const { images } = this.props;
    images.map((img, index) => {
      if (index === 0) {
        imageList.push(
          <Wrapper className="boxes">
            <label className="boxeslevel" htmlFor="text">{this.state.description}</label>
            <Thumb src={img} onMouseOver={() => this.getInputValue(desc[index])} />
          </Wrapper>,
        );
      } else {
        imageList.push(
          <div className="boxes">
            <Thumb style={{ marginTop: '70px' }} src={img} onMouseOver={() => this.getInputValue(desc[index])} />
          </div>,
        );
      }
    });
    console.log('imageList', imageList);
    return imageList;
  }
}

export default ImageComponent;
