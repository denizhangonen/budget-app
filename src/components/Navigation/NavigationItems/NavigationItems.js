import React from "react";

import styled from "styled-components";

import NavigationItem  from "./NavigationItem/NavigationItem"

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 100%;
`;

const navigationItems = props => {
  return (
    <StyledList>
      <NavigationItem link="new-expense"> New Expense</NavigationItem>
      <NavigationItem link="expense" >Expenses</NavigationItem>
    </StyledList>
  );
};

export default navigationItems;
