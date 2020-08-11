import styled, { css } from 'styled-components/native';

export const Title = styled.Text`
  color: ${props => props.color || '#212B36'};
  font-size: 20px;
  font-weight: bold;
  marginVertical: 10px;
  ${props => css`${props.customStyle}`};
`;

export const Subtitle = styled.Text`
  color: ${props => props.color || '#77818B'};
  font-size: 14px;
`;

export const ButtonLabel = styled.Text`
  color: ${props => props.color || '#385774'};
  font-size: 18px;
`;

export const PercentageText = styled.Text`
  color: ${props => props.increasing ? '#0D8152' : '#DE3616'};
  font-size: 12px;
`;

export const ValueText = styled.Text`
  color: #000;
  font-size: 20px;
  font-weight:bold;
`;
