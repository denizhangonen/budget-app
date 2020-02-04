import React from "react";

import styled from "styled-components";

import NavigationItems from "../NavigationItems/NavigationItems";

const StyledHeader = styled.header`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;
`;

const StyledNav = styled.nav`
  
  display: inline-block;
  width: calc(100% - 100px);
  vertical-align: middle;
  text-align: right;
`;

const StyledLogo = styled.div`
  display: inline-block;
  width: 100px;
  vertical-align: middle;
`;

const toolbar = props => {
  return (
    <StyledHeader>
      <StyledLogo>Budget App</StyledLogo>
      <StyledNav>
        <NavigationItems />
      </StyledNav>
    </StyledHeader>
  );
};

export default toolbar;
