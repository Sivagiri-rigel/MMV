// Light theme colors
export const lightTheme = {
  name: 'light',
  colors: {
    primary: {
      main: '#8C53FF',
      light: '#957fc1',
      dark: '#35009F',
    },
    secondary: {
      main: '#5CE1E6',
      light: '#ACF8F8',
      dark: '#09ABB1',
    },
    tertiary: {
      main: '#FFFEFE',
      light: '#DDDDDD',
      dark: '#FFEFEF',
    },
    warning: '#F20303',
    success: '#00C27B',
    background: '#FFFFFF',
    text: {
      primary: '#010101',
      secondary: '#FFFEFE',
      tertiary_1: '#727272',
      tertiary_2: '#C3C3C3',
    },
    button: '#BB86FC',
  },
};

// Dark theme colors
export const darkTheme = {
  name: 'dark',
  colors: {
    primary: {
      main: '#8C53FF',
      light: '#957fc1',
      dark: '#35009F',
    },
    secondary: {
      main: '#5CE1E6',
      light: '#ACF8F8',
      dark: '#09ABB1',
    },
    tertiary: {
      main: '#FFFEFE',
      light: '#DDDDDD',
      dark: '#FFEFEF',
    },
    warning: '#F20303',
    success: '#00C27B',
    background: '#000000',
    text: {
      primary: '#FFFFFF',
      secondary: '#FFFFFF',
      tertiary_1: '#FFFFFF',
      tertiary_2: '#C3C3C3',
    },
    button: '#BB86FC',
  },
};

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export default themes;
