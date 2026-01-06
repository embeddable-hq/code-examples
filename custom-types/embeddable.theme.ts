import { defineTheme } from '@embeddable.com/core';

const themeProvider = (_clientContext: any, parentTheme: ReturnType<typeof defineTheme>) => {
  const theme = defineTheme(parentTheme, {});
  return theme;
};

export default themeProvider;
