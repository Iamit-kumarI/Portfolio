import { useEffect, useState } from "react";
import { fetchCodeChefData } from "../../services/codechefApi";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

import "./CodeChefDashboard.css";

export default function CodeChefDashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchCodeChefData().then(setData).catch(console.error);
  }, []);

  if (!data) return (
    <p className="cc-loading">
      <a href="https://www.codechef.com/users/amitk300" target="_blank">
        Loading CodeChef stats...
      </a>
    </p>
  );

  // ✅ ORDER FIXED: Global → Country → Participation → Rating
  const chartData = [
    { name: "Global Rank", value: data.globalRank, fill: "#6366f1" },
    { name: "Country Rank", value: data.countryRank, fill: "#22c55e" },
    { name: "Participation", value: data.participation, fill: "#f97316" },
    { name: "Rating", value: data.rating, fill: "#facc15" },
  ];

  return (
    <section className="cc-container">
      <h2 className="cc-title">
        <a
          href={`https://www.codechef.com/users/${data.username}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          CodeChef Stats 🥈🏆
        </a>
      </h2>

      {/* Stats */}
      <div className="cc-stats">
        <Stat label="Rating" value={data.rating} />
        <Stat label="Stars" value={"⭐".repeat(data.stars)} />
        <Stat label="Total Participation" value={data.participation} />
        <Stat label="Country" value={data.country} />
      </div>

      {/* Bar Chart */}
      <div className="cc-chart">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            {/* ✅ Y-axis always starts from 0 */}
            <YAxis domain={[0, "dataMax"]} />
            <Tooltip />
            <Bar dataKey="value" isAnimationActive={false}>
              {chartData.map((entry, index) => (
                <Cell key={index} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        <p className="cc-note">
          * participation value is too less its not even visible on graph</p>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="cc-stat">
      <span className="cc-stat-label">{label}</span>
      <span className="cc-stat-value">{value}</span>
    </div>
  );
}
