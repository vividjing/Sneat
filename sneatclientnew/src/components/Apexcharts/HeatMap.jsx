import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux/es/hooks/useSelector";

const HeatMap = () => {
  const { currentColor } = useSelector((state) => state.global);
  const [state] = useState({
    series: [
      {
        name: "1k",
        data: [
          {
            x: "Jan",
            y: 250,
          },
          {
            x: "Feb",
            y: 350,
          },
          {
            x: "Mar",
            y: 220,
          },
          {
            x: "Apr",
            y: 290,
          },
          {
            x: "May",
            y: 650,
          },
          {
            x: "Jun",
            y: 260,
          },
          {
            x: "Jul",
            y: 274,
          },
          {
            x: "Aug",
            y: 850,
          },
        ],
      },
      {
        name: "2k",
        data: [
          {
            x: "Jan",
            y: 750,
          },
          {
            x: "Feb",
            y: 3350,
          },
          {
            x: "Mar",
            y: 1220,
          },
          {
            x: "Apr",
            y: 1290,
          },
          {
            x: "May",
            y: 1650,
          },
          {
            x: "Jun",
            y: 1260,
          },
          {
            x: "Jul",
            y: 1274,
          },
          {
            x: "Aug",
            y: 850,
          },
        ],
      },
      {
        name: "3k",
        data: [
          {
            x: "Jan",
            y: 375,
          },
          {
            x: "Feb",
            y: 1350,
          },
          {
            x: "Mar",
            y: 3220,
          },
          {
            x: "Apr",
            y: 2290,
          },
          {
            x: "May",
            y: 2650,
          },
          {
            x: "Jun",
            y: 2260,
          },
          {
            x: "Jul",
            y: 1274,
          },
          {
            x: "Aug",
            y: 815,
          },
        ],
      },
      {
        name: "4k",
        data: [
          {
            x: "Jan",
            y: 575,
          },
          {
            x: "Feb",
            y: 1350,
          },
          {
            x: "Mar",
            y: 2220,
          },
          {
            x: "Apr",
            y: 3290,
          },
          {
            x: "May",
            y: 3650,
          },
          {
            x: "Jun",
            y: 2260,
          },
          {
            x: "Jul",
            y: 1274,
          },
          {
            x: "Aug",
            y: 315,
          },
        ],
      },
      {
        name: "5k",
        data: [
          {
            x: "Jan",
            y: 875,
          },
          {
            x: "Feb",
            y: 1350,
          },
          {
            x: "Mar",
            y: 2220,
          },
          {
            x: "Apr",
            y: 3290,
          },
          {
            x: "May",
            y: 3650,
          },
          {
            x: "Jun",
            y: 2260,
          },
          {
            x: "Jul",
            y: 1274,
          },
          {
            x: "Aug",
            y: 965,
          },
        ],
      },
      {
        name: "6k",
        data: [
          {
            x: "Jan",
            y: 575,
          },
          {
            x: "Feb",
            y: 1350,
          },
          {
            x: "Mar",
            y: 2220,
          },
          {
            x: "Apr",
            y: 2290,
          },
          {
            x: "May",
            y: 2650,
          },
          {
            x: "Jun",
            y: 260,
          },
          {
            x: "Jul",
            y: 1274,
          },
          {
            x: "Aug",
            y: 815,
          },
        ],
      },
      {
        name: "7k",
        data: [
          {
            x: "Jan",
            y: 575,
          },
          {
            x: "Feb",
            y: 1350,
          },
          {
            x: "Mar",
            y: 1220,
          },
          {
            x: "Apr",
            y: 1290,
          },
          {
            x: "May",
            y: 1650,
          },
          {
            x: "Jun",
            y: 1260,
          },
          {
            x: "Jul",
            y: 3274,
          },
          {
            x: "Aug",
            y: 815,
          },
        ],
      },
      {
        name: "8k",
        data: [
          {
            x: "Jan",
            y: 575,
          },
          {
            x: "Feb",
            y: 350,
          },
          {
            x: "Mar",
            y: 220,
          },
          {
            x: "Apr",
            y: 290,
          },
          {
            x: "May",
            y: 650,
          },
          {
            x: "Jun",
            y: 260,
          },
          {
            x: "Jul",
            y: 274,
          },
          {
            x: "Aug",
            y: 815,
          },
        ],
      },
    ],
    options: {
      chart: {
        type: "heatmap",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        heatmap: {
          radius: 5,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: [currentColor],
      xaxis: {
        show: false,
        axisBorder: { show: false },
        labels: {
          style: {
            colors: "#b7bec6",
            fontSize: 14,
          },
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#b7bec6",
            fontSize: 14,
          },
        },
      },
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="heatmap"
        height="210%"
      />
    </div>
  );
};

export default HeatMap;
