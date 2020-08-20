/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import styled from 'styled-components';

const DescRow = window.styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 80px;
  border-bottom: 1px solid #eceaea;
  align-content:center;
`;

// class BottomComponent extends React.Component {
//   constructor(props) {
//     super(props);
//   }
const BottomComponent = function () {
  return (
    <div style={{ width: '360px', marginTop: '120px' }}>
      <DescRow>
        <img style={{ width: '35px', height: '35px' }} alt="img1" src="https://fecproductimages.s3-us-west-1.amazonaws.com/MykeaImages/truck.png" />
        for delivary in select locations
        <img style={{ width: '10px', height: '10px' }} alt="img2" src="https://fecproductimages.s3-us-west-1.amazonaws.com/MykeaImages/dot.png" />
      </DescRow>
      <DescRow>
        <img style={{ width: '35px', height: '35px' }} src="https://fecproductimages.s3-us-west-1.amazonaws.com/MykeaImages/rabbit.png" />
        Looking to book assembly services?
      </DescRow>
      <DescRow>
        <img style={{ width: '20px', height: '20px' }} src="https://fecproductimages.s3-us-west-1.amazonaws.com/MykeaImages/stock.png" />
        Out of stock at AZ, Temp
        <img style={{ width: '5px', height: '5px', alignSelf: 'center' }} src="https://fecproductimages.s3-us-west-1.amazonaws.com/MykeaImages/red.png" />
      </DescRow>
      <DescRow>
        <img style={{ width: '15px', height: '15px' }} src="https://fecproductimages.s3-us-west-1.amazonaws.com/MykeaImages/aheart.png" alt="" />
        {' '}
        You have 365 days to change your mind.
      </DescRow>
    </div>
  );
};

export default BottomComponent;
