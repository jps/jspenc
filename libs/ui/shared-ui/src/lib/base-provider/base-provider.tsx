import styled from '@emotion/styled';
import { ThemeProvider,newskitLightTheme, Button } from 'newskit';

/* eslint-disable-next-line */
export interface BaseProviderProps {
  children: React.ReactNode
}

export function BaseProvider({children}: BaseProviderProps) {
  return (
    <ThemeProvider theme={newskitLightTheme}>
      {children}
    </ThemeProvider>
  );
}

export default BaseProvider;
