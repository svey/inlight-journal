import React, { PureComponent, useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export interface EntryInterface {
  id: number;
  color: string;
  entryDate: string;
}

export const ColorByEntryOverDate = class Example extends PureComponent<
  { data: EntryInterface[] },
  {}
> {
  render() {
    let getColorVal = (entry: EntryInterface) => {
      if (entry.color === "green") return 3.5;
      if (entry.color === "yellow") return 2;
      if (entry.color === "red") return 0.5;
    };
    return (
      <LineChart
        width={500}
        height={300}
        data={this.props.data}
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
        <Line
          type="monotone"
          dataKey={getColorVal}
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey={getColorVal} stroke="#82ca9d" />
      </LineChart>
    );
  }
};
