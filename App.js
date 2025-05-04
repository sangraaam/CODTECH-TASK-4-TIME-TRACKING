import React, { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

function App() {
  const [data, setData] = useState([]);
  const [report, setReport] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:4000/analytics").then((res) => {
      setData(res.data.map(item => ({
        domain: item._id,
        time: Math.round(item.total / 1000 / 60)  // minutes
      })));
    });

    axios.get("http://localhost:4000/report/weekly").then((res) => {
      setReport(res.data);
    });
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h2>Time Spent on Websites</h2>
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="domain" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="time" fill="#8884d8" />
      </BarChart>

      {report && (
        <>
          <h2>Weekly Productivity Report</h2>
          <p>Productive Time: {Math.round(report.productive / 60000)} min</p>
          <p>Unproductive Time: {Math.round(report.unproductive / 60000)} min</p>
          <p>Productivity Score: {report.productivityScore}%</p>
        </>
      )}
    </div>
  );
}

export default App;
