import React from 'react';
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';

import LogoImg from '../../assets/logo.png';
import WakeUpImg from '../../assets/wake-up.png';
import GoToSleepImg from '../../assets/sleep.png';

import {
  Logo,
  Form,
  Contact,
  Description,
  Result,
  Options,
  Pipe
} from './styles';

const Home: React.FC = () => {
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

        <div className="hour-minutes">
          <select>
            <option>01</option>
            <option>02</option>
          </select>
          <p>:</p>
          <select>
            <option>00</option>
            <option>05</option>
          </select>
          <select className="period">
            <option>am</option>
            <option>pm</option>
          </select>
        </div>

        <button type="button">Calculate</button>
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
      <Result />
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
