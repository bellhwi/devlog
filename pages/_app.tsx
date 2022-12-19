import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import store from '../store'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider value={{ dark: 'black', light: 'lofi' }}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}
