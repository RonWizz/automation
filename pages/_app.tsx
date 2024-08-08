import '@/styles/globals.css'
import '@/devlink/global.css'
import { Provider } from 'react-redux';
import { CartProvider } from "./CartContext";
import { UserProvider } from "../contexts/user.context";
// import '@/components/button/button.styles.scss'

import type { AppProps } from 'next/app'
import { InteractionsProvider, createIX2Engine } from '@/devlink'

export default function App({ Component, pageProps }: AppProps) {
  return (
      <InteractionsProvider createEngine={createIX2Engine}>
        <UserProvider>
        <CartProvider>
        <Component {...pageProps} />
        </CartProvider>
        </UserProvider>
      </InteractionsProvider>
      
  );
}
