import { StyleSheet } from 'aphrodite/no-important';
import { children, media } from '../../util/style-helpers';

export const style = () => StyleSheet.create({

  icon: {
    margin: '10px',

    [children('svg')]: {
      fill: '#333333',
      height: '18px',
      width: '18px',

      [media.tablet]: {
        height: '26px',
        width: '26px',
      }
    }
  },

  linkedin: {
    [children('svg')]: {
      fill: '#2867b2'
    }
  },

  instagram: {
    [children('svg')]: {
      fill: '#c13584'
    }
  },

  twitter: {
    [children('svg')]: {
      fill: '#1DA1F2'
    }
  },

  socials: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    padding: '15px'
  },
});