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

const Description = styled.span`
    font-size: 2rem;
;`;


//* Pen-specific styles */
class ImageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {description: ''};
    this.showDescription = this.showDescription.bind(this);
    this.getInputValue = this.getInputValue.bind(this);
  }

  showDescription() {
    console.log('image description');
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
    // let index = 0;
    images.map( ( img, index )=> {
      if (index === 0) {
        imageList.push(
          <div className="boxes">
            <label className="boxeslevel" htmlFor="text">{this.state.description}</label>
            <Thumb src={img} onMouseOver={() => this.getInputValue(desc[index])}/>
          </div>
        );
      } else {
        console.log('index in else :', desc[index]);
        imageList.push(
          <div className="boxes">
            <Thumb src={img} onMouseOver={() => this.getInputValue(desc[index])}/>
          </div>
        );
      }
      // index++;
    });
    // const imageList = images.map( ( img )=> { */}
    {/* //   <Thumb src={img} onMouseOver={e => (console.log('Hovered'))} */}
    {/* //   />;
    // } );
    // const descriptionList = desc.map((d)=> { */}
    {/* //   <Description>{d}</Description>;
    // }
    // ); */}

    console.log("imageList", imageList);
    return imageList;
  }
}

export default ImageComponent;