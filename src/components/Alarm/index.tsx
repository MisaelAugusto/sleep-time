import React from 'react';

import Zero from '../../assets/clock/0.svg';
import One from '../../assets/clock/1.svg';
import Two from '../../assets/clock/2.svg';
import Three from '../../assets/clock/3.svg';
import Four from '../../assets/clock/4.svg';
import Five from '../../assets/clock/5.svg';
import Six from '../../assets/clock/6.svg';
import Seven from '../../assets/clock/7.svg';
import Eight from '../../assets/clock/8.svg';
import Nine from '../../assets/clock/9.svg';

import AM from '../../assets/clock/am.svg';
import PM from '../../assets/clock/pm.svg';

import { Container } from './styles';

export interface AlarmProps {
  schedule: string;
  dayPeriod: number;
  isBigger?: boolean;
  className?: string;
}

const numbers = [Zero, One, Two, Three, Four, Five, Six, Seven, Eight, Nine];
const period = [AM, PM];

const Alarm: React.FC<AlarmProps> = ({
  schedule,
  dayPeriod,
  isBigger = false
}) => {
  return (
    <Container isBigger={isBigger}>
      <div className="hour">
        <img src={numbers[Number(schedule[0])]} alt="Hour" />
        <img src={numbers[Number(schedule[1])]} alt="Hour" />
      </div>
      <div className="minute">
        <img src={numbers[Number(schedule[2])]} alt="Minute" />
        <img src={numbers[Number(schedule[3])]} alt="Minute" />
      </div>
      <img className="day-period" src={period[dayPeriod]} alt="Day Period" />
    </Container>
  );
};

export default Alarm;
