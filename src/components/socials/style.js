import { StyleSheet } from 'aphrodite/no-important';
import { colors, children, media } from '../../util/style-helpers';

export const style = () => StyleSheet.create({

  icon: {
    margin: '10px',

    [children('svg')]: {
      fill: colors.pink,
      height: '18px',
      width: '18px',

      [media.tablet]: {
        height: '26px',
        width: '26px',
      }
    }
  },

  socials: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    padding: '15px'
  },
});