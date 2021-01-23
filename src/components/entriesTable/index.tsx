import React from 'react';
import { EntryInterface } from '../interfaces';
import { EntryRow, EntryFormRow } from './components';
import { ColorByEntryOverDate } from '../charts';
import { exportTableToCSV } from '../../utils/table';
import './style.css';

interface EntriesTableInterface {
  entries: EntryInterface[];
  loading: boolean;
  fetchEntries: Function;
}

export const EntriesTable = (props: EntriesTableInterface) => {
  if (props.loading) return <p>Loading your journal :)...</p>;

  return (
    <>
      <table id="entries-table" className="table">
        <thead>
          <tr className="table-row">
            <th className="table-head-item"></th>
            <th className="table-head-item">Color</th>
            <th className="table-head-item">Date</th>
            <th className="table-head-item">
              <button
                disabled={props.entries.length === 0}
                onClick={() =>
                  exportTableToCSV('entries-table', 'inlight-journal.csv')
                }
              >
                Export
              </button>
            </th>
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
              <td className="table-item" />
              <td className="table-item" colSpan={5}>
                There are no entrys to show. Create one!
              </td>
            </tr>
          )}
          <tr className="table-row">
            <td className="table-item" />
            <td className="table-item" colSpan={5}>
              <ColorByEntryOverDate data={props.entries} />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
