import React, { useEffect, useState } from "react";
import { AppContext, AppProps } from "next/app";
import MainLayout from "../layouts/MainLayout";
import { Provider } from "react-redux";
import  { storeWrapper } from "@/store";
import "../styles/global.scss";
import { Web3ModalProvider } from "@/lib/wagmi/context";
import { Theme } from "@radix-ui/themes";
import { ApolloProvider } from "@apollo/client";
import client from "@/lib/graphql/apollo-client";

export type AppPropsWithLayout = AppProps & {
  Component: AppProps["Component"] & {
    getLayout?: (page: React.ReactNode) => React.ReactNode;
  };
};

const MyApp: React.FC<AppPropsWithLayout> = ({ Component, ...rest }) => {
  const getLayout = Component?.getLayout || ((page) => <MainLayout>{page}</MainLayout>);
  const {store, props} = storeWrapper.useWrappedStore(rest);

  return (
      <Web3ModalProvider>
        <Provider store={store}>
          <ApolloProvider client={client}>
            <Theme>
              {getLayout(<Component {...props.pageProps} />)}
            </Theme>
          </ApolloProvider>
        </Provider>
      </Web3ModalProvider>
  );
};

export default MyApp;

