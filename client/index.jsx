import React from 'react';
import ReactDom from 'react-dom';
import Grid from './components/Hgrid.jsx';
import { Column, Row } from 'simple-flexbox';
import styled from 'styled-components';
import Stars from './components/ReviewStar.jsx';
import Images from './components/ImageComp.jsx';
import ButtonComponent from './components/ButtonComp.jsx';
import ImageComponent from './components/ImageComp.jsx';
import BottomComponent from './components/BottomComp.jsx';
import Toast from './components/Toast.jsx';
import axios from 'axios';
// import { ToastContainer, toast, Zoom, Bounce } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.min.css';

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
font-size: 1.8rem;
line-height: 1.57143;
font-weight: 700;
display: block;
;`;


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      label: '',
      rating: '',
      urls: [],
      imageDesc: []
    };
    this.fetchId = this.fetchId.bind(this);
  }

  componentDidMount() {
    this.fetchId(1);
  }

  fetchId(id) {
    axios.get(`/product/${id}`)
      .then(({data}) => {
        console.log('data from fetch ID : ', data[0]);
        var imagUrls = data[0].images.map(i => i.imageUrl);
        var desc = data[0].images.map(i => i.name);
        console.log("new images..", desc);
        this.setState({
          name: data[0].name,
          price: data[0].price,
          label: data[0].label,
          rating: data[0].rating,
          urls: [...imagUrls],
          imageDesc: [...desc]
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    console.log('urls new :', this.state.urls);
    return (

      <st flexGrow={1} >
        <Row horizontal='center'>
          <TopSpace>MYKEA</TopSpace>
        </Row>
        <Row vertical='center'>
          <Column flexGrow={4} horizontal='center'>
            <h3> Column 1 </h3>
            <span> column 1 content </span>
          </Column>
          <Column flexGrow={1} horizontal='center'>

            <img src='/images/shopping-bag.png'/>

            <Row vertical='center'>

              <Column flexGrow={2} flexShrink={2}>

                <Row>
                  <Column flexGrow={1}>
                    <Name>{this.state.name}</Name>
                    <Desc>Sleeper sectional,3 seat w/storage, Skiftebo dark gray</Desc>
                    <Stars></Stars>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Label style={{marginTop: '-50px'}}>{this.state.label}</Label>
                    <Row vertical='center'>
                      <ImageComponent images= {this.state.urls} desc ={this.state.imageDesc} > </ImageComponent>
                    </Row>
                    <ButtonComponent name= {this.state.name}/>
                    <Row>
                      <BottomComponent/>
                    </Row>
                  </Column>
                  <Column flexGrow={1}>
                    <Price>${this.state.price}.00</Price>
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
