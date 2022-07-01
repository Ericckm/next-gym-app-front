import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/globalstyles'
import { theme } from '../styles/theme'
import { ExerciseContextProvider } from '../src/context/ExerciseContext'

import '../styles/globals.css'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ExerciseContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </ExerciseContextProvider>
    </>
  )
}
