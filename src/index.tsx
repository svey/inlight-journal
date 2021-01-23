import React from "react";
import { render } from "react-dom";
import { Layout } from "./Layout";
import { EntriesTable } from "./components";
import "./styles/styles.css";

const NoOp = () => null;

const rootElement = document.getElementById("root");
render(
  <Layout
    Header={NoOp}
    Footer={NoOp}
    EntriesTable={EntriesTable}
  />,
  rootElement
);
