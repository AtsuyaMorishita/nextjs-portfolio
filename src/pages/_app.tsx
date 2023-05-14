import { GlobalStyle } from "@/styles/global";
import type { AppProps } from "next/app";
import Layout from "./components/Layout";
import { FormProvider } from "@/context/FormContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <FormProvider>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </FormProvider>
    </>
  );
}
