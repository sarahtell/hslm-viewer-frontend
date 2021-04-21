import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ bridge_acceleration, time_vector }) => {
  const newData = time_vector.map((time, index) => {
    return { time: time, acceleration: bridge_acceleration[index] };
  });

  return (
    <ResponsiveContainer width="99%" aspect={3}>
      <LineChart
        data={newData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="acceleration" stroke="blue" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
