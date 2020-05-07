import React from "react";
import AuthContext from "./ContextExample";

// Conditional Rendering with Context Example.
export default function ConditionalRendering() {
  return (
    <AuthContext.Consumer>
      {context => (context.authenticated ? <LoginButton /> : <LogoutButton />)}
    </AuthContext.Consumer>
  );
}

function LoginButton() {
  return (
    <AuthContext.Consumer>
      {context => <button onClick={context.login}>Logout</button>}
    </AuthContext.Consumer>
  );
}

const LogoutButton = () => {
  return (
    <AuthContext.Consumer>
      {context => <button onClick={context.login}>Login</button>}
    </AuthContext.Consumer>
  );
};
