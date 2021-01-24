import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ResponseI } from './components/interfaces';
import { PostIt } from './components/common';
import { ColorOverDate } from './components/charts';
import './styles/styles.css';

interface LayoutI {
  Header?: React.ElementType;
  Footer?: React.ElementType;
  EntriesTable: React.ElementType;
}

export const Layout = (props: LayoutI) => {
  const { EntriesTable } = props;

  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    axios
      .get('/journal/all')
      .then((response: ResponseI) => {
        setEntries(response.data);
        setLoading(false);
      })
      .catch(setError);
  };

  return (
    <>
      <div className="text bold">Stoplight Diary</div>
      <EntriesTable
        fetchEntries={fetchEntries}
        entries={entries}
        loading={loading}
      />
      {error && (
        <PostIt className="red">
          <div className="text bold">Error!</div>
          <div className="text">{error}</div>
        </PostIt>
      )}
      <PostIt>
        <div className="text bold">Color Over Date</div>
        <ColorOverDate data={entries} />
      </PostIt>
    </>
  );
};
