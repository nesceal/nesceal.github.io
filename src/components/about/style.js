import { StyleSheet } from 'aphrodite/no-important';
import { colors, media } from '../../util/style-helpers';

export const style = () => StyleSheet.create({

  about: {
    alignItems: 'center',
    borderBottom: `1px solid ${colors.grey}`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 40px 20px',

    [media.desktop]: {
      flexDirection: 'row'
    }
  },

  avatar_wrapper: {
    width: '112px',

    [media.tablet]: {
      width: '150px'
    }
  },

  avatar: {
    borderRadius: '50%',
    width: '100%'
  },

  bio: {
    textAlign: 'center',

    [media.desktop]: {
      textAlign: 'left'
    }
  },

  headline: {
    fontSize: '26px',
    margin: '12px 0',

    [media.tablet]: {
      fontSize: '38px'
    }
  },

  subheadline: {
    margin: '12px 0',

    [media.tablet]: {
      fontSize: '20px'
    }
  }
});