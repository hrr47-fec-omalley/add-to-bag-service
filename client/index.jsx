/* eslint-disable class-methods-use-this */
/* eslint-disable react/sort-comp */
/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable react/no-unused-state */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/extensions */
import React from 'react';
import ReactDom from 'react-dom';
import { Column, Row } from 'simple-flexbox';
import axios from 'axios';
import Stars from './components/ReviewStar.jsx';
import Images from './components/ImageComp.jsx';
import ButtonComponent from './components/ButtonComp.jsx';
import ImageComponent from './components/ImageComp.jsx';
import BottomComponent from './components/BottomComp.jsx';
import Toast from './components/Toast.jsx';
import Ball from './components/BallComp.jsx';

const Name = window.styled.h3`
align-item: left
font-size: 1.375rem;
line-height: 1.45455;
font-family: 'sans-serif';
font-weight: 'bold';
display: flex;
;`;

const TopSpace = window.styled.h1`
height: 180px;
;`;

const Desc = window.styled.p`
align-item: right;
font-size: 1.1rem;
flex-wrap: wrap;
display: flex;
width:230px;
margin-top: -5px;
;`;

const Price = window.styled.h3`
align-item: left;
font-size: 1.5rem;
line-height: 1.45455;
display: contents;
margin-left:-70px

;`;

const Label = window.styled.span`
color: #111;
font-size: 1.2rem;
line-height: 1.57143;
font-weight: 700;
display: flex;
position: relative;
justify-content:space-between;
&:after {
  content: '>';
}
;`;

const container = window.styled.div`
width:100px;
;`;

const Arrow = window.styled.span`
color: #111;
font-size: 1.2rem;
line-height: 1.57143;
font-weight: 700;
display: block;
content: '>';
;`;

const dollar = window.styled.sup`
  font-size: 10px;
  font-weight:100;
;`;

const HeartBtn = window.styled.button`
  position:absolute;
  margin-top: 40px;
  align-self: flex-end;
  background-image: url(https://fecproductimages.s3-us-west-1.amazonaws.com/MykeaImages/heart1.png);
  background-position: bottom left;
  width:34px;
  height:1.5rem;
  background-size: 30px;
  border: none;
  background-color:inherit;
  id:heart;
  :active:after{
    background-image: url(https://fecproductimages.s3-us-west-1.amazonaws.com/MykeaImages/check.png);

  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      label: '',
      rating: '',
      urls: [],
      imageDesc: [],
    };
    this.fetchId = this.fetchId.bind(this);
    this.showToast = this.showToast.bind(this);
  }

  componentDidMount() {
    this.fetchId(1);
  }

  fetchId(id) {
    axios.get(`bag${window.location.pathname}`)
    // axios.get('/')
      .then(({ data }) => {
        const imagUrls = data[0].images.map((i) => i.imageUrl);
        const desc = data[0].images.map((i) => i.name);
        this.setState({
          name: data[0].name,
          price: data[0].price,
          label: data[0].label,
          rating: data[0].rating,
          urls: [...imagUrls],
          imageDesc: [...desc],
          showNote: false,
          noteName: '',
        });
      })
      .catch((error) => console.log(error));
  }

  // getDummyData() {
  //   axios.get('/')
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       throw err;
  //     });
  // }

  showToast(e) {
    console.log('show toast :', this.props);
    const shownote = true;
    e.target.setAttribute('style', 'background-image : url ', 'images/check.png');
    this.setState({
      noteName: this.state.name,
      showNote: true,
    }, () => setTimeout(() => this.setState({ showNote: false }), 1000));
    console.log('show note value from show toast:', this.state.noteName);
  }

  render() {
    console.log('urls new :', this.state.urls);
    return (
      <div style={{ width: '30vw' }}>
        <Toast name={this.state.showNote} noteName={this.state.noteName} />
        <div style={{ display: 'inline-flex' }}>
        <Name> {this.state.name}</Name>
        <Price>
          <sup>$</sup>
          {this.state.price}
          <sup>.00</sup>
        </Price>
        </div>
        <Desc>Sleeper sectional,3 seat w/storage, Skiftebo dark gray</Desc>
        <div style={{ height: '50px' }}>
        <Stars />
        <div style={{ borderBottom: '1px solid #eceaea', marginTop: '20px' }} />
        </div>
        <div>
          <Label style={{ marginTop: '12px', height: '60px' }}>
            {this.state.label}
            <Arrow />
          </Label>
          <div style={{ display: 'flex' }}>
            <ImageComponent images={this.state.urls} desc={this.state.imageDesc}> </ImageComponent>
          </div>
        </div>
        <ButtonComponent name={this.state.name} />
        <HeartBtn
          key="1"
          className="success"
          label="Info"
          onClick={this.showToast}
        />
        <BottomComponent />

      </div>
    );
  }
}
ReactDom.render(<App />, document.getElementById('addtobag'));
