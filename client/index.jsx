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
import styled from 'styled-components';
import axios from 'axios';
import Stars from './components/ReviewStar.jsx';
import Images from './components/ImageComp.jsx';
import ButtonComponent from './components/ButtonComp.jsx';
import ImageComponent from './components/ImageComp.jsx';
import BottomComponent from './components/BottomComp.jsx';
import Toast from './components/Toast.jsx';
import Ball from './components/BallComp.jsx';

const Name = styled.h3`
align-item: right
font-size: 1.375rem;
line-height: 1.45455;
font-family: 'sans-serif';
font-weight: 'bold';
display: flex;
;`;

const TopSpace = styled.h1`
height: 180px;
;`;

const Desc = styled.p`
align-item: right;
font-size: 1.1rem;
flex-wrap: wrap;
display: flex;
width:230px;
margin-top: -5px;
;`;

const Price = styled.h3`
align-item: left;
font-size: 1.5rem;
line-height: 1.45455;
display: flex;
margin-left:-70px

;`;

const Label = styled.span`
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

const Arrow = styled.span`
color: #111;
font-size: 1.2rem;
line-height: 1.57143;
font-weight: 700;
display: block;
content: '>';
;`;

const dollar = styled.sup`
  font-size: 10px;
  font-weight:100;
;`;

const HeartBtn = styled.button`
  position:absolute;
  margin-top: 340px;
  align-self: flex-end;
  background-image: url(images/heart1.png);
  background-position: bottom left;
  background-repeat: no-repeat;
  width:34px;
  height:3.5rem;
  background-size: 30px;
  border: none;
  background-color:inherit;
  id:heart;
  :active:after{
    background-image: url(images/check.png);

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
    axios.get(`/product/${id}`)
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

      <st flexGrow={1}>
        <Row horizontal="center">
          <TopSpace>MYKEA</TopSpace>
          <Toast name={this.state.showNote} noteName={this.state.noteName} />
        </Row>

        <Row vertical="center">
          <Column flexGrow={4} horizontal="center">
            <h3> Column 1 </h3>
            <span> column 1 content </span>
          </Column>
          <Column flexGrow={1} horizontal="center">
            {/* <img src='/images/shopping-bag.png'/> */}
            <Row vertical="center">
              <Column flexGrow={2} flexShrink={2}>
                <Row>
                  <Column flexGrow={1}>
                    <Name>{this.state.name}</Name>
                    <Desc>Sleeper sectional,3 seat w/storage, Skiftebo dark gray</Desc>
                    <Stars />
                    <br />
                    <br />
                    <div style={{ borderBottom: '1px solid #eceaea' }} />
                    <br />
                    <br />
                    <Label style={{ marginTop: '-20px' }}>
                      {this.state.label}
                      {' '}
                      <Arrow />
                    </Label>
                    <Row vertical="center">
                      <ImageComponent images={this.state.urls} desc={this.state.imageDesc}> </ImageComponent>
                    </Row>
                    <ButtonComponent name={this.state.name} />
                    <HeartBtn
                      key="1"
                      className="success"
                      label="Info"
                      onClick={this.showToast}
                    />
                    <Row>
                      <BottomComponent />
                    </Row>
                  </Column>
                  <Column flexGrow={1}>
                    <Price>
                      <sup>$</sup>
                      {this.state.price}
                      <sup>.00</sup>
                    </Price>
                  </Column>
                </Row>

              </Column>
            </Row>
          </Column>
        </Row>
      </st>
    );
  }
}
ReactDom.render(<App />, document.getElementById('app'));
