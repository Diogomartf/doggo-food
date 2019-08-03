import React from 'react';
import styled from 'styled-components';

const Nav = () => (
  <nav>
    <NavCenter>
      <Logo>Doggo Food</Logo>
    </NavCenter>
  </nav>
);

const NavCenter = styled.div`
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 900;
  font-size: 28px;
  text-align: center;

  color: ${({ theme }) => console.log(theme) || theme.colors.primary};
`;

export default Nav;
