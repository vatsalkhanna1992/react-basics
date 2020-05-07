import React from "react";

export default function ChildrenExample() {
  return (
    <WelcomeMessage>
      <h2>Hello User</h2>
    </WelcomeMessage>
  );
}

const WelcomeMessage = ({ children }) => {
  return <>{children}</>;
};
