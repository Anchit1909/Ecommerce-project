import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import cx from "classnames";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <main className={cx(poppins.variable)}>
        <Toaster />
        <Component {...pageProps} />;
      </main>
    </Provider>
  );
}
