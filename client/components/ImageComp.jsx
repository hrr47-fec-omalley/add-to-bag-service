import React from 'react';
import styled from 'styled-components';
import { Column, Row } from 'simple-flexbox';
import ScrollMenu from 'react-horizontal-scrolling-menu';

const Thumb = styled.img`
flex-flow: column wrap;
font-size: .875rem;
font-weight: 700;
width: 50px;
height: 40px;
float: right;
padding: 20px;
margin-top: 20px;
position:relative;
flex-wrap: wrap;
align-slef:center;

;`;



//* Pen-specific styles */
class ImageComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    console.log('Before image from image component :', this.props.images);
    const images = this.props.images;
    console.log('Images stored in variable', images);
    let imageList = [];
    images.map( ( img )=> {
      imageList.push(
        <Thumb src={img} />
      );
    } );
    return imageList;
  }
}

export default ImageComponent;