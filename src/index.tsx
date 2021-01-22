import React from "react";
import { render } from "react-dom";
import { Layout } from "./Layout";
import { ColorByEntryOverDate, EntriesTable, EntryForm } from "./components";
import "./styles/styles.css";

const NoOp = () => null;

const rootElement = document.getElementById("root");
render(
  <Layout
    Header={NoOp}
    Footer={NoOp}
    AnalysisCharts={ColorByEntryOverDate}
    EntriesTable={EntriesTable}
    EntryForm={EntryForm}
  />,
  rootElement
);
