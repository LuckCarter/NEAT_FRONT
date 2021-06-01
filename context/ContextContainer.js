import React from "react";
import { createGlobalStyle } from "styled-components";
import { LangProvider } from "./LangContext";
import { ThemeProviderContext } from "./ThemeContext";
import { AuthProvider } from "./AuthContext";
const ContextContainer = ({ children, ...props }) => {
  return (
      <ThemeProviderContext>
        <GlobalStyle />
        <LangProvider>
          <AuthProvider>{children}</AuthProvider>
        </LangProvider>
      </ThemeProviderContext>
  );
};
const GlobalStyle = createGlobalStyle`
body,html {
  background-color:${(props) => props.theme.colors.secondary};
  color:${(props) => props.theme.colors.primary};
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 20.0px );
-webkit-backdrop-filter: blur( 20.0px );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 20.0px );
-webkit-backdrop-filter: blur( 20.0px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
  transition:color 0.1s,background-color 0.1s,border-color 0.1s;
}
`;

export default ContextContainer;
