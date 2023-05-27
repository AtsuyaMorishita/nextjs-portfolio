import { GlobalStyle } from "@/styles/global";
import type { AppProps } from "next/app";
import { FormProvider } from "@/context/FormContext";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <FormProvider>
        <GlobalStyle />
        <AnimatePresence
          mode="wait"
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
      </FormProvider>
    </>
  );
}
