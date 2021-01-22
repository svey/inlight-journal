import React from 'react';
import { EntryInterface } from '../../interfaces';

interface EntryRowInterface {
  className: string;
  entry: EntryInterface;
}

export const EntryRow = (props: EntryRowInterface) => (
  <tr className={`table-row ${props.className}`}>
    <td className="table-item">{props.entry.entryDate}</td>
    <td className="table-item">{props.entry.color}</td>
    <td className="table-item">
      <button
        className="btn btn-remove"
        onClick={() => console.log('@todo!')} // @todo
      >
        Delete
      </button>
    </td>
  </tr>
);
