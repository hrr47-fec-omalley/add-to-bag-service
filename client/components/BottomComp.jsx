import React from 'react';
import styled from 'styled-components';
import { Column, Row } from 'simple-flexbox';
import ScrollMenu from 'react-horizontal-scrolling-menu';


const DescRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 80px;
  border-bottom: 1px solid grey;
  align-content:center;

`;

class BottomComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    return (
      <div>
        <DescRow>
          Available for delivary in select locations.
        </DescRow>
        <DescRow>
          Looking to book assembly services?
        </DescRow>
        <DescRow>
          Out of stock at AZ, Temp.
        </DescRow>
        <DescRow>
          You have 365 days to change your mind.
        </DescRow>
      </div>
    );
  }
}

export default BottomComponent;

