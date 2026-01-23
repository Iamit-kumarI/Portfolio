import { useEffect, useState } from "react";
import { fetchLeetCodeData } from "../../services/leetcodeApi";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const COLORS = ["#22c55e", "#facc15", "#ef4444"];

export default function LeetCodeDashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchLeetCodeData().then(setData).catch(console.error);
  }, []);

  if (!data) return <p>Loading LeetCode stats...</p>;

  const problemData = [
    { name: "Easy", value: data.easySolved },
    { name: "Medium", value: data.mediumSolved },
    { name: "Hard", value: data.hardSolved },
  ];

  return (
    <div style={{ padding: "2rem" }}>
      <h2>LeetCode Stats</h2>

      {/* Summary */}
      <div style={{ display: "flex", gap: "2rem", marginBottom: "2rem" }}>
        <Stat label="Rating" value={Math.round(data.contestRanking.rating)} />
        <Stat label="Global Rank" value={data.contestRanking.globalRanking} />
        <Stat label="Contribution Points" value={data.contributionPoints} />
      </div>

      {/* Graphs */}
      <div style={{ display: "flex", gap: "3rem" }}>
        {/* Bar Chart */}
        <ResponsiveContainer width="50%" height={300}>
          <BarChart data={problemData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value">
              {problemData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={
                    entry.name === "Easy"
                      ? "#22c55e" // green
                      : entry.name === "Medium"
                        ? "#facc15" // yellow
                        : "#ef4444" // red
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        {/* Pie Chart */}
        <ResponsiveContainer width="50%" height={300}>
          <PieChart>
            <Pie
              data={problemData}
              dataKey="value"
              nameKey="name"
              outerRadius={123}
              innerRadius={114}
              label
            >
              {problemData.map((_, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div>
      <h4>{label}</h4>
      <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{value}</p>
    </div>
  );
}
