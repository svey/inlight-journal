import React, { useState } from "react";
import axios from "axios";

interface EntryFormInterface {
  fetchEntries: Function;
}

export const EntryForm = (props: EntryFormInterface) => {
  const { fetchEntries } = props;
  // @todo Formik
  const DEFAULT_DATE = new Date().toDateString();
  const [entryDate, setEntryDate] = useState(DEFAULT_DATE);
  const [color, setColor] = useState("");

  const handleInputsReset = () => {
    setColor("");
    setEntryDate(DEFAULT_DATE);
  };

  const handleEntryCreate = () => {
    axios
      .post("http://localhost:4001/journal/create", {
        color,
        entryDate,
      })
      .then((res) => {
        fetchEntries();
      })
      .catch((error) =>
        console.error(`"${color}" entry creation error: ${error}`)
      );
  };

  const handleEntrySubmit = () => {
    if (color && entryDate) {
      handleEntryCreate();
      handleInputsReset();
    }
  };

  return (
    <form className="entry-form">
          <label className="form-label" htmlFor="entryDate">
            Entry Date:
          </label>
          <input
            className="form-input"
            type="text"
            id="entryDate"
            name="entryDate"
            value={entryDate}
            onChange={(e) => setEntryDate(e.currentTarget.value)}
          />
          <label className="form-label" htmlFor="color">
            Color:
          </label>
          <input
            className="form-input"
            type="text"
            id="color"
            name="color"
            value={color}
            onChange={(e) => setColor(e.currentTarget.value)}
          />
      <button onClick={handleEntrySubmit} className="btn btn-add">
        Submit
      </button>
    </form>
  );
};
