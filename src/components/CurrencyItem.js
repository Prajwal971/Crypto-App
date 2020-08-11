import React, { useEffect, useState } from 'react';
import { CurrencyIcon, TrendingIcon } from './images';
import { PercentageText, Title, ValueText, Subtitle } from './typography';
import { CheckboxButton } from './buttons';
import styled from 'styled-components/native';

const ItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  border-bottom-color: #C9C9C9;
  border-bottom-width: 2px;
`;

const LeftContainer = styled.View`
  padding-right: 10px;
  margin-right: 5px;
  justify-content: center;
  height: 80px;
  width: 80px;
  align-items: center;
`;

const RightContainer = styled.View`
  padding-right: 10px;
  margin-left: 5px;
  justify-content: center;
`;

const MiddleContainder = styled.View`
  flex: 1;
  margin-left: 5px;
`;

const PercentageContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;


const CurrencyItem = ({ value, percentage, symbol, name, removeMode, toggleRemoveMode, onTouchCheckbox }) => {
  const direction = percentage > 0 ? "up" : "down";

  return (
    <ItemContainer onLongPress={toggleRemoveMode}>
      
      <LeftContainer>
      {removeMode ?
        <CheckboxButton onPress={onTouchCheckbox} /> :
        <CurrencyIcon />
      }
      </LeftContainer>

      <MiddleContainder>
        <Title>{name}</Title>
        <Subtitle>{symbol}</Subtitle>
      </MiddleContainder>

      <RightContainer>
        <ValueText>
          $ {value}
        </ValueText>
        <PercentageContainer>
          <TrendingIcon _direction={direction} />
          <PercentageText increasing={percentage > 0}>
            {percentage}%
          </PercentageText>
        </PercentageContainer>
      </RightContainer>
    </ItemContainer>
  );
}

export default CurrencyItem;
