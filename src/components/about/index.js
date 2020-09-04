import * as React from 'react';
import { css } from 'aphrodite/no-important';
import { style } from './style';

const About = () => {

  const styles = style();

  return (
    <div className={css(styles.about)}>
      <figure className={css(styles.avatar_wrapper)}>
        <img className={css(styles.avatar)} src='/images/avatar.jpg' alt='Avatar' />
      </figure>
      <div className={css(styles.bio)}>
        <h1 className={css(styles.headline)}>Hi, I'm Nesceal.</h1>
        <p className={css(styles.subheadline)}>web developer. music lover. casual gamer.</p>
      </div>
    </div>
  );
};

export default About;