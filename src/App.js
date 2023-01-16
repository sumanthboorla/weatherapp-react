import React from 'react';

import { useMediaQuery } from 'react-responsive'
import Desktoproutes from './desktoproutes'
import MobileRoutes from './Mobileroutes';
//import About from './About';
function App() {
  const isDesktopOrLaptop = useMediaQuery({ maxWidth: 1824, minWidth: 767 })
  const isMobile = useMediaQuery({ maxWidth: 767 })

  return (
    <>
      {isDesktopOrLaptop && <Desktoproutes />}
      {isMobile && <MobileRoutes />}
    </>

  );
}

export default App;

