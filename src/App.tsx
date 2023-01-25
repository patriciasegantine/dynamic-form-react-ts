import React from "react";
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './@theme/defaultTheme'
import { GlobalStyle } from './Global.styles'
import { Router } from "./Router";

const App: React.FC = () => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle/>
    <Router/>
  </ThemeProvider>
)

export default App
