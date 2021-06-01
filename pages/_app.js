import React from "react";
import { ContextContainer } from "../context";
import "../styles/globals.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Navbar from "../components/elements/NavBar";

function MyApp({ Component, pageProps }) {
  return (

      <ContextContainer>
        <Navbar></Navbar>
        <Component {...pageProps} />
      </ContextContainer>
  );
}

export default MyApp;
