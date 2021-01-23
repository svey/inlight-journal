import React from 'react';
import axios from 'axios';
import { EntryInterface } from '../../interfaces';
import { ColorBox } from '../../common';
interface EntryRowInterface {
  className: string;
  entry: EntryInterface;
  fetchEntries: Function;
}

const handleEntryDelete = (id: number, onSuccessHandler: Function) => {
  axios
    .put('http://localhost:4001/journal/delete', {
      id,
    })
    .then(() => onSuccessHandler())
    .catch(console.log);
};

export const EntryRow = (props: EntryRowInterface) => (
  <tr className={`table-row ${props.className}`}>
    <td className="table-item" />
    <td className="table-item">
      <ColorBox color={props.entry.color} />
    </td>
    <td className="table-item">{props.entry.entryDate}</td>
    <td className="table-item">
      <button
        className="btn btn-remove"
        onClick={() => handleEntryDelete(props.entry.id, props.fetchEntries)}
      >
        Delete
      </button>
    </td>
  </tr>
);
