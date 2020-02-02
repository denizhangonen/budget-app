import React, { Component } from "react";

import styled from "styled-components";

import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

const StyledMain = styled.main`
  margin-top: 72px;
`;

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Toolbar></Toolbar>
        <SideDrawer></SideDrawer>
        <StyledMain>{this.props.children}</StyledMain>
      </React.Fragment>
    );
  }
}

export default Layout;
