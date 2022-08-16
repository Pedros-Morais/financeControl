import type { AppProps } from "next/app";
import * as Styles from "../styles/styles";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
