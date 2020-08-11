import styled from 'styled-components/native';
import trendingUp from '../../assets/round_trending_up/round_trending_up.png';
import trendingDown from '../../assets/round_trending_down/round_trending_down.png';
import currencyIcon from '../../assets/currency/currency.png';
import checkIcon from '../../assets/check/check.png';

const trendingsSources = {
  up: {
    icon: trendingUp,
    color: '#0a804f'
  },
  down: {
    icon: trendingDown,
    color: '#DE3616'
  }
};

export const Thumb = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 27.5px;
`;

export const CurrencyIcon = styled.Image.attrs({ source: currencyIcon })`
  height: 80px;
  width: 80px;
  border-radius: 20px;
`;

export const TrendingIcon = styled.Image.attrs(props => ({ source: trendingsSources[props._direction].icon }))`
  tintColor: ${props => trendingsSources[props._direction].color};
  height: 20px;
  width: 20px;
  margin-right: 3px;
`;

export const CheckIcon = styled.Image.attrs(() => ({ source: checkIcon }))`
  width: 20px;
  height: 20px;
  tintColor: #385774;
`;


