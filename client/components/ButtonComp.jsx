import React from 'react';
import styled from 'styled-components';
import { Column, Row } from 'simple-flexbox';
import ScrollMenu from 'react-horizontal-scrolling-menu';
// import heart from '../../public/images/heart.png';

const Btn = styled.button`
height: 3.5rem;
    background: #0058a3;
    color: #fff;
    border-radius: 40px;
    padding: 0 2.5rem;
    padding-top: 19px;
    margin-right: .9375rem;
    position: relative;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    text-decoration: none;
    border: 0;
    font-weight: 700;
    font-size: .875rem;
    line-height: 1.42857;
    width:fit-content;
    `;

const HeartBtn = styled.button`
  position:relative;
  background-image: url(images/heart1.png);
  background-position: bottom left;
  background-repeat: no-repeat;
  width:34px;
  height:30px;
  background-size: 30px;
  border: none;
  background-color:none;
  margin-top:100px;
`;

//* Pen-specific styles */
class ButtonComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: 'Add to bag'
    };
    this.addToBag = this.addToBag.bind(this);
  }

  addToBag(e) {
    console.log('clicked from add to bag');
    this.setState({
      label: 'Added'
    });
  }
  render(props) {
    return (
      <div style={{marginTop: '-50px'}}>
        <Btn onClick={this.addToBag}>{this.state.label}</Btn>
        {/* <button><img src="./images/heart.png" /></button> */}
        <HeartBtn></HeartBtn>
      </div>
    );
  }
}

export default ButtonComponent;