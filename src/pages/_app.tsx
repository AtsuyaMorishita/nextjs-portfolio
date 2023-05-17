import { GlobalStyle } from "@/styles/global";
import type { AppProps } from "next/app";
import { FormProvider } from "@/context/FormContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <FormProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </FormProvider>
    </>
  );
}
