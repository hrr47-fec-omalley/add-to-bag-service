/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable func-names */
import React from 'react';
import styled from 'styled-components';
import IconStar from './IconStar.jsx';

const S = {};

S.WrapperDiv = styled.div`
  display: flex;
  align-items: center;
`;

S.RatingSpan = styled.span`
  font-size: 1.0rem;
  font-weight: 700;
  padding: 1px;
  line-height: .8rem;
  font-family: Helvetica, Arial;
`;

S.BackStarsDiv = styled.div`
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

// eslint-disable-next-line no-undef
const ReviewStars = function (props) {
  let rating = 0;

  /* This is to round the rating to closest .5 or .0 */
  // eslint-disable-next-line react/destructuring-assignment
  // eslint-disable-next-line react/prop-types
  if (props.stars) {
    rating = `${(((Math.round((props.stars * 10) / 5) * 5) / 10) * 20).toString()}%`;
  }

  return (
    <>
      <S.WrapperDiv>
        <S.BackStarsDiv>
          <IconStar />
          <IconStar />
          <IconStar />
          <IconStar />
          <IconStar />
          <S.FrontDiv rating={rating}>
            <IconStar />
            <IconStar />
            <IconStar />
          </S.FrontDiv>
        </S.BackStarsDiv>
        <S.RatingSpan>{props.stars}</S.RatingSpan>
      </S.WrapperDiv>
    </>
  );
};

export default ReviewStars;
