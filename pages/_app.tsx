import '../styles/globals.css'
import { SWRConfig } from "swr"
import type { AppProps } from 'next/app'
import { CookieProvider } from '../context/cookieContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        onError: (err) => {
          console.error(err);
        },
      }}
    >
      <CookieProvider>
        <Component {...pageProps} />
      </CookieProvider>
    </SWRConfig>
  )
}
