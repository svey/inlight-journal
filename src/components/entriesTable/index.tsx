import React from 'react';
import { EntryInterface } from '../interfaces';
import { EntryRow, EntryFormRow } from './components';
import { exportTableToCSV } from '../../utils/table';
import './../../styles/entriesTable.css';

interface EntriesTableInterface {
  entries: EntryInterface[];
  loading: boolean;
  fetchEntries: Function;
}

export const EntriesTable = (props: EntriesTableInterface) => {
  if (props.loading) return <p>Loading your journal :)...</p>;

  return (
    <>
      <button onClick={() =>  exportTableToCSV('entries-table', 'members.csv')}>
        Export HTML Table To CSV File
      </button>
      <table id="entries-table" className="table">
        <thead>
          <tr>
            <th className="table-head-item">Color</th>
            <th className="table-head-item">Date</th>
            <th className="table-head-item" />
          </tr>
        </thead>
        <tbody className="table-body">
          <EntryFormRow fetchEntries={props.fetchEntries} />
          {props.entries.length > 0 ? (
            props.entries.reduceRight((arr: any, entry: EntryInterface) => {
              return [
                ...arr,
                <EntryRow
                  fetchEntries={props.fetchEntries}
                  className={entry.color}
                  key={entry.id}
                  entry={entry}
                />,
              ];
            }, [])
          ) : (
            <tr className="table-row">
              <td className="table-item" colSpan={6}>
                There are no entrys to show. Create one!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};
