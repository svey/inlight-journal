import React from 'react';
import { EntryInterface } from '../interfaces';
import { EntryRow } from './components';
import './../../styles/entriesTable.css';

interface EntriesTableInterface {
  entries: EntryInterface[];
  loading: boolean;
  fetchEntries: Function;
}

export const EntriesTable = (props: EntriesTableInterface) => {
  if (props.loading) return <p>Loading your journal :)...</p>;

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="table-head-item">Date</th>
          <th className="table-head-item">Color</th>
          <th className="table-head-item" />
        </tr>
      </thead>
      <tbody className="table-body">
        {props.entries.length > 0 ? (
          props.entries.map((entry: EntryInterface, idx: number) => (
            <EntryRow fetchEntries={props.fetchEntries} className={entry.color} key={entry.id} entry={entry} />
          ))
        ) : (
          <tr className="table-row">
            <td
              className="table-item"
              colSpan={6}
            >
              There are no entrys to show. Create one!
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
