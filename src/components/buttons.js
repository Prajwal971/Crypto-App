import React, { useState } from 'react';
import styled, { css } from 'styled-components/native';
import { ButtonLabel } from './typography';
import { CheckIcon } from './images';

export const BaseButtonTouchable = styled.TouchableOpacity`
  background-color: ${props => props.bgColor || 'transparent'};
  justify-content: center;
  align-items: center;
  paddingHorizontal: 30px;
  paddingVertical: 10px;
  border-radius: 3px;
  ${props => css`${props.customStyle}`};
`;

export const ContainedButton = ({ onPress, color, bgColor, label }) => (
  <BaseButtonTouchable onPress={onPress} bgColor={bgColor}>
    <ButtonLabel color={color}>
      {label}
    </ButtonLabel>
  </BaseButtonTouchable>
);

export const TextButton = ({ onPress, color, label }) => (
  <BaseButtonTouchable onPress={onPress}>
    <ButtonLabel color={color}>
      {label}
    </ButtonLabel>
  </BaseButtonTouchable>
);

const CheckboxButtonTouchable = styled.TouchableOpacity`
  border-width: 1px;
  border-color: #C9C9C9;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const CheckboxButtonContainer = styled.View`
  width: 30px;
  height: 30px;
`;

export const CheckboxButton = ({ onPress }) => {
  const [checked, setChecked] = useState(false);

  const _onPress = () => {
    setChecked(!checked);
    onPress();
  }

  return (
    <CheckboxButtonContainer>
      <CheckboxButtonTouchable onPress={_onPress}>
        {checked && <CheckIcon />}
      </CheckboxButtonTouchable>
    </CheckboxButtonContainer>
  );
};
