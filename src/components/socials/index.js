import * as React from 'react';
import { css } from 'aphrodite/no-important';
import { style } from './style';
import { GithubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from '../../util/icons';

const Socials = () => {

  const styles = style();

  return (
    <div className={css(styles.socials)}>
      <span className={css(styles.icon, styles.linkedin)}>
        <a href='https://linkedin.com/in/nesceal' target='_blank' rel='noopener noreferrer'><LinkedInIcon /></a>
      </span>
      <span className={css(styles.icon, styles.github)}>
        <a href='https://github.com/nesceal' target='_blank' rel='noopener noreferrer'><GithubIcon /></a>
      </span>
      <span className={css(styles.icon, styles.instagram)}>
        <a href='https://instagram.com/dreamynai' target='_blank' rel='noopener noreferrer'><InstagramIcon /></a>
      </span>
      <span className={css(styles.icon, styles.twitter)}>
        <a href='https://twitter.com/nesceal' target='_blank' rel='noopener noreferrer'><TwitterIcon /></a>
      </span>
    </div>
  );
};

export default Socials;