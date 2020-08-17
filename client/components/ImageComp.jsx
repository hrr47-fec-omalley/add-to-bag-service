import React from 'react';
import styled from 'styled-components';
import { Column, Row } from 'simple-flexbox';
import ScrollMenu from 'react-horizontal-scrolling-menu';

const Wrapper = styled.div`
border: solid 1px transparent;
border-radius:4px;
height: 100px;
width: 100px;
padding: 15px;
`;

const Thumb = styled.img`
flex-flow: column wrap;
font-size: .875rem;
font-weight: 700;
width: 70px;
height: 30px;
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
    this.state = {description: ''};
    this.getInputValue = this.getInputValue.bind(this);
  }


  getInputValue(descValue) {
    console.log("desc...", descValue);
    this.setState({
      description: descValue
    });
  }

  render(props) {
    console.log('Before image from image component :', this.props.images);
    const images = this.props.images;
    const desc = this.props.desc;
    console.log('Got desc :', desc[0]);
    console.log('Images stored in variable', images);

    const imageList = [];
    images.map( ( img, index )=> {
      if (index === 0) {
        imageList.push(
          <Wrapper className="boxes">
            <label className="boxeslevel" htmlFor="text">{this.state.description}</label>
            <Thumb src={img} onMouseOver={() => this.getInputValue(desc[index])} />
          </Wrapper>
        );
      } else {
        console.log('index in else :', desc[index]);
        imageList.push(
          <div className="boxes">
            <Thumb src={img} onMouseOver={() => this.getInputValue(desc[index])}/>
          </div>
        );
      }
    });
    console.log("imageList", imageList);
    return imageList;
  }
}

export default ImageComponent;