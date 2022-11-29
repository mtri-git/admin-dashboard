import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import statisticService from "../../services/statisticService";

const data = [
  { name: "January", Total: 1200 },
  { name: "February", Total: 2100 },
  { name: "March", Total: 800 },
  { name: "April", Total: 1600 },
  { name: "May", Total: 900 },
  { name: "June", Total: 1700 },
];

const dataWeek = [
  { name: "Week 1", Total: 120 },
  { name: "Week 2", Total: 300 },
  { name: "Week 3", Total: 800 },
  { name: "Week 4", Total: 1600 },
  { name: "Week 5", Total: 900 },
  { name: "Week 6", Total: 1700 },
];

const Chart = ({ aspect, title}) => {

  const [myData, setMyData] = useState(data)
  const token = localStorage.getItem('login')
  useEffect(()=>{
      if(token)
        statisticService.getDataJoinLastWeek().then(res => setMyData(res?.data?.data))
  }, [])

  console.log('chart', myData)

  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={dataWeek}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;