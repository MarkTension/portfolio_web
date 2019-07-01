import React from "react";
import styled from "styled-components";
import animateScrollTo from "animated-scroll-to";
import Sticky from "react-stickynode";
import media from "../utils/media";

const Foot_div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 0px;
  width: 250px;
  height: 250;
  margin: 12px;
`;

const Container_in = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 0px;
  width: 250px;
  height: 250;
  margin: 12px;
`;

function Footer({ children }) {
  return (
    <div>
      <Foot_div />
    </div>
  );
}

export default Footer;
