import React, { Suspense, lazy } from "react";

const Lazy = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(import("./ListAndKeys"));
    }, 5000);
  });
});

export default class LazyLoad extends React.Component {
  render() {
    return (
      <>
        <Suspense fallback={<Loader />}>
          <Lazy />
        </Suspense>
      </>
    );
  }
}

const Loader = () => {
  return <p>Loading...</p>;
};
