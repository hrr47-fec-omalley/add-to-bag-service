import React from 'react';
import styled, {keyframes} from 'styled-components';
import { Column, Row } from 'simple-flexbox';
import ScrollMenu from 'react-horizontal-scrolling-menu';
// import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Toast from './Toast.jsx';

var test;

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
    width:300px;
    justify-content:center;

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
  margin-top: 40px;
`;

// window.toast = toast;

// toast.configure();

//* Pen-specific styles */
class ButtonComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: 'Add to bag',
      noteName: '',
      showNote: false
    };
    this.addToBag = this.addToBag.bind(this);
    this.showToast = this.showToast.bind(this);
  }

  showToast () {
    console.log('show toast :', this.props);
    let shownote = true;
    this.setState ({
      noteName: this.props.name,
      showNote: true
    }, () => setTimeout(() => this.setState({ showNote: false }), 2000)
    );
    console.log('show note value from show toast:', this.state.noteName);
  }

  addToBag(e) {
    console.log('clicked from add to bag');
    this.setState({
      // label: 'Added + \2713';
      label: ' ✓  Added'
    });
  }

  render(props) {
    console.log('note from button component:', this.state.showNote);
    return (
      <div >

        <Btn onClick={this.addToBag}>{this.state.label}</Btn>
        {/* <HeartBtn onClick={this.notify}></HeartBtn> */}
        {/* <button onClick={this.notify}>Notify !</button> */}
        <HeartBtn key= '1'
          className='success'
          label='Info'
          onClick={this.showToast}></HeartBtn>
        <Toast name = {this.state.showNote} noteName = {this.state.noteName}/>

      </div>
    );
  }
}
export default ButtonComponent;