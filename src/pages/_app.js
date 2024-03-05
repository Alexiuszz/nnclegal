import CustomCursorManager from "@/components/CustomCursor/context/manager";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="The Pearl Website" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomCursorManager>
        <Component {...pageProps} />
      </CustomCursorManager>
    </>
  );
}
