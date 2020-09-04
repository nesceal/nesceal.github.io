import * as React from 'react';
import { css } from 'aphrodite/no-important';
import { style } from './style';

const Container = (props) => {

  const styles = style();
  const children = props.children;

  return (
    <div className={css(styles.container)}>
      {children}
    </div>
  );
};

export default Container;