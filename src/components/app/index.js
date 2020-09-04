import React from 'react';
import { css } from 'aphrodite/no-important';
import { style } from './style';

import About from '../about';
import Container from '../container';
import Socials from '../socials';

const App = () => {

  const styles = style();

  return (
    <div className={css(styles.main)}>
      <Container children={<About />} />
      <Container children={<Socials />} />
    </div>
  );
};

export default App;