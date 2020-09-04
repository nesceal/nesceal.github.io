export const children = child => {
  return `:nth-child(1n) ${child}`;
};

export const colors = {
  black: '#272B2E',
  grey: '#808080',
  pink: '#FFC0CB'
};

export const media = {
  mobile: '@media (min-width: 320px)',
  tablet: '@media (min-width: 768px)',
  desktop: '@media (min-width: 980px)'
};