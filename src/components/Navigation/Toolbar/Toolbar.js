import React from "react";

import styled from "styled-components";

import NavigationItems from "../NavigationItems/NavigationItems";

const StyledHeader = styled.header`
    height: 56px;
    width:100%;
    position: fixed;
    top:0;
    left:0;
    background-color: #dedede;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    z-index: 90;
`;

const StyledNav = styled.nav`
    height: 100%;
`;

const toolbar = props => {
  return (
    <StyledHeader>
      <StyledNav>
        <NavigationItems />
      </StyledNav>
    </StyledHeader>
  );
};

export default toolbar;
