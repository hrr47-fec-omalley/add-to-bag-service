/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';

const BlueBtn = styled.button`
height: 3.5rem;
    background: #0058a3;
    color: #fff;
    border-radius: 40px;
    padding: 0 2.5rem;
    padding-top: 19px;
    margin-right: .9375rem;
    border: 0;
    font-weight: 700;
    font-size: .875rem;
    line-height: 1.42857;
    width:250px;
    justify-content:center;
    margin-top:45px;
    `;

// const HeartBtn = styled.button`
//   position:relative;
//   background-image: url(images/heart1.png);
//   background-position: bottom left;
//   background-repeat: no-repeat;
//   width:34px;
//   height:3.5rem;
//   background-size: 30px;
//   border: none;
//   background-color:inherit;
//   margin-top: 40px;
// `;

//* Pen-specific styles */
class ButtonComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: 'Add to bag',
      noteName: '',
      showNote: false,
    };
    this.addToBag = this.addToBag.bind(this);
    this.showToast = this.showToast.bind(this);
  }

  showToast() {
    this.setState({
      noteName: this.props.name,
      showNote: true,
    }, () => setTimeout(() => this.setState({ showNote: false }), 2000));
  }

  addToBag() {
    this.setState({
      // label: 'Added + \2713';
      label: ' ✓  Added',
    });
  }

  render() {
    return (
      <div>
        <BlueBtn onClick={this.addToBag}>{this.state.label}</BlueBtn>
        {/* <HeartBtn onClick={this.notify}></HeartBtn> */}
        {/* <button onClick={this.notify}>Notify !</button> */}
        {/* <HeartBtn key= '1'
          className='success'
          label='Info'
          onClick={this.showToast}></HeartBtn> */}
        {/* <Toast name = {this.state.showNote} noteName = {this.state.noteName}/> */}

      </div>
    );
  }
}
export default ButtonComponent;
