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

export interface EntryI {
  id: number;
  color: string;
  entryDate: string;
}

export interface ColorByEntryOverDateI {
  data: EntryI[];
}

type colorMapToValueType = {
  [key: string]: number;
};

const colorToValueMap: colorMapToValueType = {
  green: 3,
  yellow: 2,
  red: 1,
};

type valueMapToColorType = {
  [key: number]: string;
};

const valueToColorMap: valueMapToColorType = {
  3: 'green',
  2: 'yellow',
  1: 'red',
};

const getShortDateLabel = (entry: EntryI) => entry.entryDate.slice(5,10);
const getColorValue = (entry: EntryI) => colorToValueMap[entry.color];
const getValueColor = (entryValue: number) => valueToColorMap[entryValue];

export const ColorByEntryOverDate = (props: ColorByEntryOverDateI) => {
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
      <XAxis dataKey={getShortDateLabel} />
      <YAxis interval={1} domain={[1, 3]} tickFormatter={getValueColor} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey={getColorValue} stroke="#82ca9d" />
    </LineChart>
  );
};
