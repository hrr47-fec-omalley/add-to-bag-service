import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// import './Toast.css';
const ToastAnimation = keyframes`
  from {
    top: 8vh;
    left: 80vw;
  }
  to {
    top: 8vh;
    left: 72vw;
  }
`;

const position = styled.div`
  top: 12px;
  right: 12px;
  transition: transform .6s ease-in-out;
  animation: ${ToastAnimation} 1s;
;`;


const ToastContainer = styled.div`
  font-size: 14px;
  box-sizing: border-box;
  transition: transform .6s ease-in-out;
  animation: ${ToastAnimation} 1s;
;`;


const ToastNotification = styled.div`
  color: white;
  background: black;
  font-size: 17px;
  padding: 15px 7px 15px 15px;
  width: 230px;
  font-fami;y: 'Noto Sans'
`;

class Toast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: ''
    };
    console.log('hello1');
  }

  toggleBox() {
    const { note } = this.state;
    this.setState({
      note: true,
    });
  }

  render (props) {
    console.log('hello');
    console.log(this.props);
    const t = this.props;
    const note = this.props.name;
    window.abc = this.props;
    console.log("Got Note.........1", note);
    if (note) {
      console.log("Got Note.........2 noteval->" + note);
    }
    return (
      <>
        { note && (
          <ToastContainer>
            <ToastNotification>
             {this.props.noteName} was saved to the shopping list
            </ToastNotification>
          </ToastContainer>
        )
        }
      </>
    );
  }
}


export default Toast;