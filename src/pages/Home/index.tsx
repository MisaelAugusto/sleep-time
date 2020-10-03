/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useCallback } from 'react';
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';

import Alarm from '../../components/Alarm';

import LogoImg from '../../assets/logo.png';
import WakeUpImg from '../../assets/wake-up.png';
import GoToSleepImg from '../../assets/sleep.png';

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

import {
  Logo,
  Form,
  Contact,
  Description,
  Schedules,
  Options,
  Pipe
} from './styles';

const Home: React.FC = () => {
  const handleHourClick = useCallback(() => {
    console.log('hour');
  }, []);

  const handleMinuteClick = useCallback(() => {
    console.log('minute');
  }, []);

  const handlePeriodClick = useCallback(() => {
    console.log('period');
  }, []);

  return (
    <>
      <Logo>
        <img src={LogoImg} alt="SleepTime Logo" />
        <p>Sleeping well is growing healthy</p>
      </Logo>
      <Form>
        <p>I want to</p>

        <Options>
          <button className="wake-up" type="button">
            <img src={WakeUpImg} alt="Wake up" />
          </button>
          <button className="go-to-sleep" type="button">
            <img src={GoToSleepImg} alt="Go to sleep" />
          </button>
        </Options>

        <p>at</p>

        <div className="clock-buttons">
          <button className="red" type="button" onClick={handleHourClick} />
          <button
            className="orange"
            type="button"
            onClick={handleMinuteClick}
          />
        </div>

        <div className="clock-numbers">
          <img className="hour-left" src={Zero} alt="Hour" />
          <img className="hour-right" src={Zero} alt="Hour" />
          <img className="minute-left" src={Zero} alt="Minute" />
          <img className="minute-right" src={Zero} alt="Minute" />
          <img className="day-period" src={PM} alt="Day Period" />
        </div>

        <div className="reset-button">
          <button className="grey" type="button" onClick={handlePeriodClick} />
        </div>

        <button className="calculate-button" type="button">
          Calculate
        </button>
      </Form>
      <Description>
        <p>
          “Normally people take between
          <span id="highlighted">&nbsp;10 and 20 minutes&nbsp;</span>
          to fall sleep. A good night&apos;s sleep consists of
          <span id="highlighted">&nbsp;5 or 6 complete sleep cycles</span>
          These cycles last an average of
          <span id="highlighted">&nbsp;90 minutes&nbsp;</span>
          and the ideal is to wake up between the end of one cycle and the
          beginning of another.” Considering this, to have a
          <span id="highlighted">&nbsp;good night&apos;s sleep&nbsp;</span>
          you should
          <span id="highlighted">&nbsp; go to bed &nbsp;</span>
          at any of these times:
        </p>
      </Description>
      <Schedules>
        <Alarm schedule="1245" dayPeriod={1} />
        <Alarm schedule="1245" dayPeriod={1} />
        <Alarm schedule="1245" dayPeriod={1} />
        <Alarm schedule="1245" dayPeriod={1} />
        <Alarm schedule="1245" dayPeriod={1} />
      </Schedules>
      <Contact>
        <FiGithub size={40} />
        <Pipe />
        <FiMail size={40} />
        <Pipe />
        <FiLinkedin size={40} />
      </Contact>
    </>
  );
};

export default Home;
