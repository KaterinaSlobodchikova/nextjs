import { Provider } from "react-redux";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { store, wrapper } from "../Redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
