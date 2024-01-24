// pages/_app.js
import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import Head from 'next/head';

const theme = extendTheme({
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Roboto, sans-serif",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Head>
        <title>Dom Bosco - Vila Matilde</title>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
