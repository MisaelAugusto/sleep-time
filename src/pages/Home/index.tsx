/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useCallback, useState } from 'react';
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';

import Alarm from '../../components/Alarm';

import LogoImg from '../../assets/logo.png';
import WakeUpImg from '../../assets/wake-up.png';
import GoToSleepImg from '../../assets/sleep.png';

import {
  Logo,
  Form,
  AlarmButton,
  PeriodButton,
  Contact,
  Description,
  Alarms,
  Options,
  Option,
  Pipe
} from './styles';

interface Schedule {
  schedule: string;
  period: string;
}

const Home: React.FC = () => {
  const [mode, setMode] = useState('');
  const [hours, setHours] = useState('01');
  const [minutes, setMinutes] = useState('00');
  const [dayPeriod, setDayPeriod] = useState('am');
  const [buttonsPressed, setButtonsPressed] = useState([false, false, false]);

  const [isErrored, setIsErrored] = useState(false);
  const [alarms, setAlarms] = useState<Schedule[]>([]);

  const handleWakeUpClick = useCallback(() => {
    setMode('wake up');
  }, []);

  const handleGoToSleepClick = useCallback(() => {
    setMode('sleep');
  }, []);

  const handleHourClick = useCallback(() => {
    setButtonsPressed([true, buttonsPressed[1], buttonsPressed[2]]);

    const hour = Number(hours);

    if (hour === 12) {
      setHours('01');
    } else {
      const updatedHour = (hour + 1 < 10 ? '0' : '') + String(hour + 1);

      setHours(updatedHour);
    }

    setTimeout(() => {
      setButtonsPressed([false, buttonsPressed[1], buttonsPressed[2]]);
    }, 200);
  }, [hours, buttonsPressed]);

  const handleMinuteClick = useCallback(() => {
    setButtonsPressed([buttonsPressed[0], true, buttonsPressed[2]]);

    const minute = Number(minutes);

    if (minute === 55) {
      setMinutes('00');
    } else {
      const updatedMinutes = (minute === 0 ? '0' : '') + String(minute + 5);

      setMinutes(updatedMinutes);
    }

    setTimeout(() => {
      setButtonsPressed([buttonsPressed[0], false, buttonsPressed[2]]);
    }, 200);
  }, [minutes, buttonsPressed]);

  const handlePeriodClick = useCallback(() => {
    setButtonsPressed([buttonsPressed[0], buttonsPressed[1], true]);

    if (dayPeriod === 'am') {
      setDayPeriod('pm');
    } else {
      setDayPeriod('am');
    }

    setTimeout(() => {
      setButtonsPressed([buttonsPressed[0], buttonsPressed[1], false]);
    }, 200);
  }, [dayPeriod, buttonsPressed]);

  const handleCalculateAlarms = useCallback(() => {
    const result: Schedule[] = [];
    const cycles = [285, 90, 90, 90, 90];

    let period = dayPeriod;
    let totalMinutes = Number(hours) * 60 + Number(minutes);

    if (mode === '') {
      setIsErrored(true);
      setTimeout(() => {
        setIsErrored(false);
      }, 500);
      return;
    }

    cycles.forEach(cycle => {
      if (mode === 'wake up') {
        totalMinutes -= cycle;
        if (totalMinutes < 0) {
          totalMinutes = 720 + totalMinutes;
          period = dayPeriod === 'am' ? 'pm' : 'am';
        }
      } else {
        totalMinutes += cycle;
        if (totalMinutes > 720) {
          totalMinutes -= 720;
          period = dayPeriod === 'am' ? 'pm' : 'am';
        }
      }

      const h = Math.floor(totalMinutes / 60);
      const m = totalMinutes % 60;

      let schedule =
        (h < 10 ? '0' : '') + String(h) + (m < 10 ? '0' : '') + String(m);

      if (`${schedule[0]}${schedule[1]}` === '00') {
        schedule = `12${schedule[2]}${schedule[3]}`;
      }

      result.push({ schedule, period });
    });

    if (mode === 'wake up') {
      result.reverse();
    }

    setAlarms(result);
  }, [mode, hours, minutes, dayPeriod]);

  return (
    <>
      <Logo>
        <img src={LogoImg} alt="SleepTime Logo" />
        <p>Sleeping well is growing healthy</p>
      </Logo>
      <Form>
        <p>I want to</p>

        <Options isErrored={isErrored}>
          <Option
            selected={mode === 'wake up'}
            className="wake-up"
            type="button"
            onClick={handleWakeUpClick}
          >
            <img src={WakeUpImg} alt="Wake up" />
          </Option>
          <Option
            selected={mode === 'sleep'}
            className="go-to-sleep"
            type="button"
            onClick={handleGoToSleepClick}
          >
            <img src={GoToSleepImg} alt="Go to sleep" />
          </Option>
        </Options>

        <p>at</p>

        <div className="clock-buttons">
          <AlarmButton
            isPressed={buttonsPressed[0]}
            className="red"
            type="button"
            onClick={handleHourClick}
          />
          <AlarmButton
            isPressed={buttonsPressed[1]}
            className="orange"
            type="button"
            onClick={handleMinuteClick}
          />
        </div>

        <Alarm
          schedule={hours + minutes}
          dayPeriod={dayPeriod === 'am' ? 0 : 1}
          isBigger
        />

        <div className="reset-button">
          <PeriodButton
            isPressed={buttonsPressed[2]}
            className="grey"
            type="button"
            onClick={handlePeriodClick}
          />
        </div>

        <button
          className="calculate-button"
          type="button"
          onClick={handleCalculateAlarms}
        >
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
          <span id="highlighted">
            &nbsp;
            {mode === 'wake up' ? 'go to bed' : 'wake up'}
            &nbsp;
          </span>
          at any of these times:
        </p>
      </Description>
      <Alarms>
        {alarms.map(alarm => (
          <Alarm
            key={alarm.schedule}
            schedule={alarm.schedule}
            dayPeriod={alarm.period === 'am' ? 0 : 1}
          />
        ))}
      </Alarms>
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
