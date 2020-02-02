import React from "react";

import { NavLink } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types"

const StyledListItem = styled.li`
  margin: 10px 0;
  box-sizing: border-box;
  display: block;
  width: 100%;
`;

const NavigationItem = props => {
  return (
    <StyledListItem>
      <NavLink to={props.link} >{props.children}</NavLink>
    </StyledListItem>
  );
};

// NavigationItem.prototype = {
//     link: PropTypes.string.isRequired
// }

export default NavigationItem;
