import React from 'react';
import ReactDom from 'react-dom';
import Grid from './components/Hgrid.jsx';
import { Column, Row } from 'simple-flexbox';
import styled from 'styled-components';
import Stars from './components/ReviewStar.jsx';


import axios from 'axios';

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
font-size: .975rem;
display: flex;
flex-wrap: wrap;
;`;

const Price = styled.h3`
align-item: left;
font-size: .975rem;
line-height: 1.45455;
display: flex;
;`;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      label: '',
      rating: '',
      urls: []
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
        let imagUrls = data[0].images.map(i => i.imageUrl);
        console.log(imagUrls);
        this.setState({
          name: data[0].name,
          price: data[0].price,
          label: data[0].label,
          rating: data[0].rating
        });
      })
      .catch((error) => console.log(error));
  }



  render() {
    console.log('data from Index.js :', this.state.name);
    return (
      <Column flexGrow={1}>
        <Row horizontal='center'>
          <TopSpace>MYKEA</TopSpace>
        </Row>
        <Row vertical='center'>
          <Column flexGrow={4} horizontal='center'>
            <h3> Column 1 </h3>
            <span> column 1 content </span>
          </Column>
          <Column flexGrow={1} horizontal='center'>
            {/* <h3 > {this.state.name} </h3> */}
            <Row vertical='center'>
              <Column flexGrow={2}>
                <Name>{this.state.name}</Name>
                <Desc>Sleeper sectional,3 seat w/storage, Skiftebo dark gray</Desc>
                <Stars></Stars>
              </Column>
              <Column flexGrow={1}>
                <Price>{this.state.price}</Price>
                {/* <span > column 2 content </span> */}
              </Column>
            </Row>
          </Column>
        </Row>
      </Column>
    );
  }
}
ReactDom.render(<App />, document.getElementById('root'));
