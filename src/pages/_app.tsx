import React from "react";
import type {AppProps} from "next/app"
import {ChakraProvider} from "@chakra-ui/react";
import {theme as defaultTheme} from "src/ui/theme";
import "polyfill-object.fromentries";
import {AccentGlobal} from "src/components/accent";
import {PrismGlobal} from "src/ui/prism";
import {DefaultSeo} from "next-seo";
import defaultSeoConfig from "../next-seo.json";

function MyApp({Component, pageProps}: AppProps) {

    const getLayout = (Component as any).getLayout || ((page: any) => page);
    console.log(defaultTheme);
    return (
        <>
            <DefaultSeo {...defaultSeoConfig} />
            <ChakraProvider theme={defaultTheme}>
                <AccentGlobal />
                <PrismGlobal />
                {getLayout(<Component {...pageProps} />)}
            </ChakraProvider>
        </>
    );
}

export default MyApp
