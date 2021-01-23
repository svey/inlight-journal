import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '../../common';

interface EntryFormI {
  fetchEntries: Function;
}

export const EntryFormRow = (props: EntryFormI) => {
  const { fetchEntries } = props;
  // @todo Formik
  const DEFAULT_DATE = new Date().toISOString().slice(0,10);
  const [entryDate, setEntryDate] = useState(DEFAULT_DATE);
  const [color, setColor] = useState('');

  const handleInputsReset = () => {
    setColor('');
    setEntryDate(DEFAULT_DATE);
  };

  const handleEntryCreate = () => {
    axios
      .post('/journal/create', {
        color,
        entryDate,
      })
      .then(() => fetchEntries())
      .catch(console.log);
  };

  const handleEntrySubmit = () => {
    if (color && entryDate) {
      handleEntryCreate();
      handleInputsReset();
    }
  };

  return (
    <tr className={`table-row ${color}`}>
      <td className="table-item" />
      <td className="table-item">
        <input
          className="form-input"
          type="text"
          id="color"
          name="color"
          value={color}
          onChange={(e) => setColor(e.currentTarget.value)}
        />
      </td>
      <td className="table-item">
        {entryDate}
      </td>
      <td className="table-item">
        <Button className="blue" onClick={handleEntrySubmit}>
          Submit
        </Button>
      </td>
    </tr>
  );
};
