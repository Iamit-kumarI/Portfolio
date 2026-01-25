import { useEffect, useState } from "react";
import { fetchLeetCodeData } from "../../services/leetcodeApi";
import "./LeetCodeDashboard.css"
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
  Legend,
} from "recharts";

import "./LeetCodeDashboard.css";

const COLORS = ["#22c55e", "#facc15", "#ef4444"];

export default function LeetCodeDashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchLeetCodeData().then(setData).catch(console.error);
  }, []);

  if (!data) return (
    <p className="lc-loading">
      <a href="https://leetcode.com/u/amitK300/" target="_blank">
        Loading LeetCode stats...
      </a>
    </p>
  );

  const problemData = [
    { name: "Easy", value: data.easySolved },
    { name: "Medium", value: data.mediumSolved },
    { name: "Hard", value: data.hardSolved },
  ];

  return (
    <section className="lc-container">
      <h2 className="lc-title">
        <a href="https://leetcode.com/u/amitK300/"
            target="_blank"
        >LeetCode Stats 🏅</a>
      </h2>

      {/* Stats */}
      <div className="lc-stats">
        <Stat label="Rating" value={Math.round(data.contestRanking.rating)} />
        <Stat label="Global Rank" value={data.contestRanking.globalRanking} />
        <Stat label="Contribution Points" value={data.contributionPoints} />
      </div>

      {/* Charts */}
      <div className="lc-charts">
        {/* Bar Chart */}
        <div className="lc-chart">
          <ResponsiveContainer width="100%" height={300}>
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
                        ? "#22c55e"
                        : entry.name === "Medium"
                          ? "#facc15"
                          : "#ef4444"
                    }
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="lc-chart">
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={problemData}
                dataKey="value"
                nameKey="name"
                outerRadius={140}
                innerRadius={60}
                label
              >
                {problemData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="lc-stat">
      <span className="lc-stat-label">{label}</span>
      <span className="lc-stat-value">{value}</span>
    </div>
  );
}
