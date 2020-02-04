import React from "react";

import { NavLink } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledListItem = styled.li`
  margin: 0 16px;
  display: inline-block;
  height: 100%;
  vertical-align: middle;

  a {
    text-decoration: none;
    color: #333333;
    font-weight: bold;
    padding: 5px 0;
  }

  a: hover {
    text-decoration: none;
    color: #ffffff;    
    border-bottom: 5px solid #ffffff;
  }
`;

const NavigationItem = props => {
  return (
    <StyledListItem>
      <NavLink to={props.link}>{props.children}</NavLink>
    </StyledListItem>
  );
};

// NavigationItem.prototype = {
//     link: PropTypes.string.isRequired
// }

export default NavigationItem;
