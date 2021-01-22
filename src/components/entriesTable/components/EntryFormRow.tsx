import React, { useState } from 'react';
import axios from 'axios';

interface EntryFormInterface {
  fetchEntries: Function;
}

export const EntryFormRow = (props: EntryFormInterface) => {
  const { fetchEntries } = props;
  // @todo Formik
  const DEFAULT_DATE = new Date().toDateString();
  const [entryDate, setEntryDate] = useState(DEFAULT_DATE);
  const [color, setColor] = useState('');

  const handleInputsReset = () => {
    setColor('');
    setEntryDate(DEFAULT_DATE);
  };

  const handleEntryCreate = () => {
    axios
      .post('http://localhost:4001/journal/create', {
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
        <td className="table-item">
          <input
            className="form-input"
            type="text"
            id="entryDate"
            name="entryDate"
            value={entryDate}
            onChange={(e) => setEntryDate(e.currentTarget.value)}
          />
        </td>
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
          <button onClick={handleEntrySubmit} className="btn btn-add">
            Submit
          </button>
        </td>
      </tr>
  );
};
