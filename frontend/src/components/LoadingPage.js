import React from "react";
import { Page } from "./Page";
import { Spinner } from "./Spinner";

export default function LoadingPage() {
  return (
    <Page>
      <Spinner label="Page is loading" />
    </Page>
  );
}
