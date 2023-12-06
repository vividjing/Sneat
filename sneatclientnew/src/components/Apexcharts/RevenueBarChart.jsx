import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux/es/hooks/useSelector";

function RevenueBarChart() {
  const { currentColor } = useSelector((state) => state.global);
  const [chartData, setChartData] = useState({
    series: [
      {
        data: [
          {
            x: "M",
            y: 2,
            fillColor: currentColor,
          },
          { x: "T", y: 6, fillColor: currentColor },
          { x: "W", y: 5, fillColor: currentColor },
          { x: "T", y: 3, fillColor: currentColor },
          { x: "F", y: 8, fillColor: currentColor },
          { x: "S", y: 4, fillColor: currentColor },
          { x: "S", y: 5, fillColor: currentColor },
        ],
      },
    ],

    options: {
      title: {
        text: "Revenue",
        style: {
          color: currentColor,
          fontWeight: 600,
        },
        offsetY: 10,
      },
      subtitle: {
        text: "425K",
        style: {
          color: "#4d5f71",
          fontSize: 18,
          fontWeight: 700,
        },
      },
      chart: {
        type: "bar",
        toolbar: { show: false },
      },
      grid: {
        show: false,
      },

      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      yaxis: {
        show: false,
      },
      xaxis: {
        show: false,
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        categories: ["M", "T", "W", "T", "F", "S", "S"],
      },
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height="110%"
      />
    </div>
  );
}

export default RevenueBarChart;
