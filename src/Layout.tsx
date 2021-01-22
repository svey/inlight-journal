import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/styles.css';

interface LayoutInterface {
  Header?: React.ElementType;
  Footer?: React.ElementType;
  AnalysisCharts: React.ElementType;
  EntryForm: React.ElementType;
  EntriesTable: React.ElementType;
}

export const Layout = (props: LayoutInterface) => {
  const { AnalysisCharts, EntryForm, EntriesTable } = props;

  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    axios
      .get('http://localhost:4001/journal/all')
      .then((response) => {
        setEntries(response.data);
        setLoading(false);
      })
      .catch((error) => console.error(`Journal fetch error: ${error}`));
  };
  return (
    <div className="horizontal-flex">
      <div className="vertical-flex stretch-flex">
        <AnalysisCharts data={entries} loading={loading} />
        <EntryForm fetchEntries={fetchEntries} />
      </div>
      <div className="stretch-flex">
        <EntriesTable
          fetchEntries={fetchEntries}
          entries={entries}
          loading={loading}
        />
      </div>
    </div>
  );
};
