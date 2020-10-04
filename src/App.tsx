import React, { useEffect, useState } from 'react';

import Splash from './pages/Splash';

import Home from './pages/Home';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? <Splash /> : <Home />}
      <GlobalStyle />
    </>
  );
};

export default App;
