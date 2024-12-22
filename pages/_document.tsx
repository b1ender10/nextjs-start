import { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';
 
interface MyDocumentProps extends DocumentInitialProps {
    initialState: any;
}

export default function Document ({ initialState }: MyDocumentProps) {

    return (
        <Html lang="en">
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/> 
            <link rel="preconnect" href="https://fonts.gstatic.com"/> 
            <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Sora:wght@100..800&display=swap" rel="stylesheet"/>
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
        </Html>
    )
}
