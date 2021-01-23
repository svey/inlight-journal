import React from 'react';
import axios from 'axios';
import { EntryI } from '../../interfaces';
import { ColorBox, Button } from '../../common';
interface EntryRowI {
  className: string;
  entry: EntryI;
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

export const EntryRow = (props: EntryRowI) => (
  <tr className={`table-row ${props.className}`}>
    <td className="table-item" />
    <td className="table-item">
      <ColorBox color={props.entry.color} />
      <span style={{ paddingLeft: '10px' }}>{props.entry.color}</span>
    </td>
    <td className="table-item">{props.entry.entryDate}</td>
    <td className="table-item">
      <Button className="red"
        onClick={() => handleEntryDelete(props.entry.id, props.fetchEntries)}
      >
        Delete
      </Button>
    </td>
  </tr>
);
