import React from "react";

export function Page({ children }) {
  return (
    <>
      <header>
        <a href="https://github.com/nilshartmann/react-hook-and-suspense" target="_blank">
          https://github.com/nilshartmann/react-hook-and-suspense
        </a>
      </header>
      <main>{children}</main>
      <footer>
        <a href="https://twitter.com/nilshartmann" target="_blank">
          @nilshartmann
        </a>
      </footer>
    </>
  );
}
