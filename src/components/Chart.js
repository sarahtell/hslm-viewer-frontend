import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ bridge_displacement, time_vector }) => {
  const newData = time_vector.map((time, index) => {
    return { time: time, displacement: bridge_displacement[index] };
  });

  return (
        <ResponsiveContainer width="90%" aspect={3}>
          <LineChart
            data={newData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" label={{ value: "Time [s]", position: "center",   dy: 20,  dx: 0}} />
            <YAxis label={{ value: "Displacement [m]", position: "insideLeft", angle: -90,   dy: 60,  dx: 0}}/>
            <Tooltip />
            <Line type="monotone" dataKey="displacement" stroke="blue" yAxis="Displacement" />
          </LineChart>
        </ResponsiveContainer>
  );
};

export default Chart;
