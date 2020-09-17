import styled from 'styled-components';

export const Logo = styled.div`
  display: flex;
  margin-top: 0.8rem;
  align-items: center;
  flex-direction: column;

  p {
    color: #e7cf09;
    font-weight: 100;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.2rem 0;

  .wake-up,
  .go-to-sleep {
    border: 0;
    width: 9rem;
    height: 9rem;
    background: #344c79;
    border-radius: 0.8rem;
    transition: transform 0.2s;

    img {
      width: 80%;
      height: 80%;
    }

    & + div {
      margin-left: 1.6rem;
    }

    &:hover {
      transform: scale(1.2);
    }
  }

  .wake-up {
    background: #fffdd2;
    margin-right: 1.2rem;
  }
`;

export const Form = styled.form`
  display: flex;
  padding: 0 3.2rem;
  font-size: 2.8rem;
  margin-top: 2.4rem;
  align-items: center;
  flex-direction: column;

  .hour-minutes {
    display: flex;
    margin: 1.2rem 0;

    select {
      border: 0;
      width: 3.6rem;
      height: 3.6rem;
      font-size: 1.6rem;
      padding-left: 0.4rem;
      border-radius: 0.8rem;
    }

    .period {
      height: 1.8rem;
      font-size: 1.2rem;
      margin-left: 1.2rem;
      align-self: flex-end;
      border-radius: 0.4rem;
    }

    p {
      margin: 0 0.8rem;
    }
  }

  > button {
    border: 0;
    width: 80%;
    height: 3.6rem;
    color: #1c1c1c;
    font-size: 1.6rem;
    margin: 0.8rem 0 1.6rem 0;
    background: #e7cf09;
    border-radius: 0.8rem;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.6rem;
  justify-content: center;

  p {
    width: 80%;
    color: #f1f1f1;
    font-size: 1.2rem;
    font-style: italic;
    text-align: justify;

    span {
      color: #e7cf09;
    }
  }
`;

export const Result = styled.div``;

export const Contact = styled.footer`
  display: flex;
  margin-bottom: 1.2rem;
  align-items: center;
  justify-content: center;

  svg {
    transition: transform 0.2s;

    & + svg {
      padding-left: 0.8rem;
    }

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const Pipe = styled.div`
  width: 0.05rem;
  height: 2.4rem;
  margin: 0 0.6rem;
  background: #f1f1f1;
`;
