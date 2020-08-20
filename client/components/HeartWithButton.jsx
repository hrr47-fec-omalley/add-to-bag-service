/* eslint-disable react/jsx-no-undef */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React from 'react';
import IconStar from './Heart.jsx';

const S = {};

S.WrapperDiv = window.styled.div`
  display: flex;
  align-items: center;
`;

S.RatingSpan = window.styled.span`
  font-size: 1.0rem;
  font-weight: 700;
  padding: 1px;
  line-height: .8rem;
  font-family: Helvetica, Arial;
`;

S.BackHeartDiv = styled.div`
  display: flex;
  position: relative;
  color: #d3d3d3;
`;

S.FrontDiv = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  overflow: hidden;
  width: ${(props) => props.rating};
  color: #ffbc0b;
`;

const HeartButton = function (props) {
  const rating = 0;

  return (
    <>
      <S.WrapperDiv>
        <S.BackHeartDiv>
          <Heart />
        </S.BackHeartDiv>
      </S.WrapperDiv>
    </>
  );
};

export default HeartButton;
