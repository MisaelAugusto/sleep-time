import styled from 'styled-components';

import Alarm from '../../assets/clock/alarm.svg';

export const Container = styled.div`
  width: 12rem;
  height: 7.2rem;
  margin-top: -0.8rem;
  z-index: 5;
  background: url(${Alarm}) no-repeat center;
  background-size: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 1.4rem;
    top: -0.2rem;
    position: relative;
  }

  .hour,
  .minute {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img + img {
      margin-left: 0.2rem;
    }
  }

  .hour {
    margin-left: 0.4rem;
    margin-right: 1rem;
  }

  .day-period {
    top: 0.6rem;
    position: relative;
    margin-left: 0.6rem;
  }
`;
