import React from 'react';
import { Platform } from 'react-native';
import { Thumb } from './images';
import { Title } from './typography';
import styled from 'styled-components/native';
import userSrc from '../../assets/user/user.png'
export const HeaderContainer = styled.View`
  height: ${Platform.OS === 'ios' ? '80px' : '70px'};
  width: 100%;
  background-color: #385774;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 30px;
  padding-left: 30px;
  padding-top: 20px;
`;

const Header = () => (
  <HeaderContainer>
    <Title>
      CryptoTracker Pro
    </Title>

    <Thumb source={userSrc} />
  </HeaderContainer>
);

export default Header;
