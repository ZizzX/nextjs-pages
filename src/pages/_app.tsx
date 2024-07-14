import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Noto_Sans } from 'next/font/google'

const notoSans = Noto_Sans({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
      <main className={notoSans.className}>
        <Component {...pageProps} />
      </main>
  );
}
