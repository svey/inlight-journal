import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

export interface EntryInterface {
  id: number;
  color: string;
  entryDate: string;
}

export interface ColorByEntryOverDateInterface {
  data: EntryInterface[];
}

let getColorVal = (entry: EntryInterface) => {
  console.log(entry);
  
  if (entry.color === 'green') return 3.5;
  if (entry.color === 'yellow') return 2;
  if (entry.color === 'red') return 0.5;
};

export const ColorByEntryOverDate = (props: ColorByEntryOverDateInterface) => {
  console.log(props.data)
  return (
    <LineChart
      width={500}
      height={300}
      data={props.data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="entryDate" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey={getColorVal} stroke="#82ca9d" />
    </LineChart>
  );
};
