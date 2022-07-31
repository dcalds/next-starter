import type { AppProps } from "next/app";
import { GlobalStyles, Theme } from "../styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <GlobalStyles />
      <Component {...pageProps} />
    </Theme>
  );
}

export default MyApp;