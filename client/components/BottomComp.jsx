import React from 'react';
import styled from 'styled-components';
import { Column, Row } from 'simple-flexbox';
import ScrollMenu from 'react-horizontal-scrolling-menu';


const DescRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 80px;
  border-bottom: 1px solid #eceaea;
  align-content:center;
`;

class BottomComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    return (
      <div style={{width:'360px'}}>
        <DescRow>
          <img style ={{width:'35px', height: '35px'}}src='/images/truck.png'/> for delivary in select locations.
        </DescRow>
        <DescRow>
          <img style ={{width: '35px', height: '35px'}}src='/images/rabbit.png'/>Looking to book assembly services?
        </DescRow>
        <DescRow>
          <img style ={{width: '25px', height: '25px'}}src='/images/stock.png'></img>
          Out of stock at AZ, Temp.
        </DescRow>
        <DescRow>
          <img style ={{width:'15px', height: '15px'}}src='/images/aheart.png'/> You have 365 days to change your mind.
        </DescRow>
      </div>
    );
  }
}

export default BottomComponent;

