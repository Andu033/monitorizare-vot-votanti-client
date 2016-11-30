import React from 'react';
import { Link } from 'react-router';
import Menu from '../Menu';
import Logo from './logo_monitorizare.png';
import styled from 'styled-components';
import OverlayNav from '../../components/Header/OverlayNav';

const HeaderWrap = styled.div`
  background: #ffcc00;
  padding: 10px 0;

  @media (min-width: 1024px) {
    padding: 0;
  }
`;

const LogoType = styled(Link)`
  height: 30px;
  display: block;
  width: auto;
  float: left;
  margin-left: 10px;

  @media (min-width: 768px) {
    margin-left: 0;
  }

  @media (min-width: 1024px) {
    margin-top: 10px;
    height: 40px;
  }

  img {
    width: auto;
    height: 100%;
  }
`;

const Burger = styled.button`
  float: right;
  display: inline-block;
  margin: 0 10px 0 0;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export default class Header extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showNav: false,
    };
  }

  handleToggleNav = () => {
    this.setState({ showNav: !this.state.showNav });
  }

  render() {
    return (
      <HeaderWrap>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <LogoType to="acasa" className="brand">
                <img src={Logo} role="presentation" />
              </LogoType>
              <Menu {...this.props} />
              { !this.state.showNav ? <Burger className="burger" onClick={this.handleToggleNav}>
                <i className="material-icons">&#xE5D2;</i>
              </Burger> : '' }
            </div>
          </div>
        </div>

        <OverlayNav show={this.state.showNav} handleToggleNav={this.handleToggleNav} />
      </HeaderWrap>
    );
  }
}
