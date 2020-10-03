import styled, { css } from 'styled-components';

import Alarm from '../../assets/clock/alarm.svg';

interface ContainerProps {
  isBigger: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 11rem;
  height: 7.2rem;
  margin-top: -0.8rem;
  z-index: 5;
  background: url(${Alarm}) no-repeat center;
  background-size: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 1.2rem;
    top: -0.3rem;
    position: relative;
  }

  .hour,
  .minute {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img + img {
      margin-left: 0.4rem;
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

  ${props =>
    props.isBigger &&
    css`
      width: 18rem;

      img {
        top: -0.4rem;
        width: 2.2rem;
        position: relative;
      }

      .hour {
        margin-left: 0.5rem;
        margin-right: 1.2rem;
      }

      .day-period {
        top: 1rem;
        margin-left: 0.8rem;
        position: relative;
      }
    `}
`;
