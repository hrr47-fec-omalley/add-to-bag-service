import React from "react";
import styled from "styled-components";
import IconStar from './Heart.jsx';

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

var HeartButton = function (props) {
  let rating = 0;

  return (
    <React.Fragment>
      <S.WrapperDiv>
        <S.BackHeartDiv>
          <Heart />
        </S.BackHeartDiv>
      </S.WrapperDiv>
    </React.Fragment>
  );
};

export default ReviewStars;
