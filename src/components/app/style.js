import { StyleSheet } from 'aphrodite/no-important';
import { colors } from '../../util/style-helpers';

export const style = () => StyleSheet.create({

  main: {
    alignItems: 'center',
    backgroundColor: '#FBF7F5',
    color: colors.black,
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Overlock, cursive',
    justifyContent: 'center',
    minHeight: '100vh',
  }
});