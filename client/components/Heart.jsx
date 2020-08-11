import React from "react";
import styled from "styled-components";

const S = {};

S.span = styled.span`
  width: 0.9rem;
  height: 0.8rem;
`;

S.svg = styled.svg`
  /* display: inline-block;
  vertical-align: middle; */
`;


var Heart = function (props) {
  return (
    <S.span>
      <S.svg
        viewBox="0 0 800 1000"
        width=".9rem"
        height=".9rem"
        aria-hidden="true"
        padding="1em 1em 1em"
      >
        <path fill-rule="evenodd"
          clip-rule= "evenodd"
          d= "M 12.336 5.52055 C 14.2336 3.62376 17.3096 3.62401 19.2069 5.52129 C 20.2067 6.52115 20.6796 7.85005 20.6259 9.15761 C 20.6151 12.2138 18.4184 14.8654 16.4892 16.6366 C 15.4926 17.5517 14.5004 18.2923 13.7593 18.8036 C 13.3879 19.0598 13.0771 19.2601 12.8574 19.3973 C 12.7475 19.466 12.6601 19.519 12.5992 19.5555 C 12.5687 19.5737 12.5448 19.5879 12.5279 19.5978 L 12.5079 19.6094 L 12.502 19.6129 L 12.5001 19.614 C 12.5001 19.614 12.4989 19.6147 11.9999 18.748 C 11.501 19.6147 11.5005 19.6144 11.5005 19.6144 L 11.4979 19.6129 L 11.4919 19.6094 L 11.472 19.5978 C 11.4551 19.5879 11.4312 19.5737 11.4007 19.5555 C 11.3397 19.519 11.2524 19.466 11.1425 19.3973 C 10.9227 19.2601 10.612 19.0598 10.2405 18.8036 C 9.49947 18.2923 8.50726 17.5517 7.51063 16.6366 C 5.58146 14.8654 3.38477 12.2139 3.37399 9.15765 C 3.32024 7.85008 3.79314 6.52117 4.79301 5.52129 C 6.69054 3.62376 9.76704 3.62376 11.6646 5.52129 L 11.9993 5.856 L 12.3353 5.52129 L 12.336 5.52055 Z M 11.9999 18.748 L 11.5005 19.6144 L 11.9999 19.9019 L 12.4989 19.6147 L 11.9999 18.748 Z M 11.9999 17.573 C 12.1727 17.462 12.384 17.3226 12.6236 17.1573 C 13.3125 16.6821 14.2267 15.9988 15.1366 15.1634 C 17.0157 13.4381 18.6259 11.2919 18.6259 9.13506 V 9.11213 L 18.627 9.08922 C 18.6626 8.31221 18.3844 7.52727 17.7926 6.9355 C 16.6762 5.81903 14.866 5.81902 13.7495 6.9355 L 13.7481 6.93689 L 11.9965 8.68166 L 10.2504 6.9355 C 9.13387 5.81903 7.3237 5.81903 6.20722 6.9355 C 5.61546 7.52727 5.33724 8.31221 5.3729 9.08922 L 5.37395 9.11213 V 9.13507 C 5.37395 11.2919 6.98418 13.4381 8.86325 15.1634 C 9.77312 15.9988 10.6874 16.6821 11.3762 17.1573 C 11.6159 17.3226 11.8271 17.462 11.9999 17.573 Z"/>

      </S.svg>
    </S.span>
  );
};

export default Heart;

