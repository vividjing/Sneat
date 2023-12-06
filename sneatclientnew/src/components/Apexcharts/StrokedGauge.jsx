import React from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux/es/hooks/useSelector";

const StrokedGauge = () => {
  const { currentColor } = useSelector((state) => state.global);
  const chartData = {
    series: ["78"],
    options: {
      chart: {
        height: 360,
        type: "radialBar",
        offsetY: -10,
      },

      plotOptions: {
        radialBar: {
          startAngle: -145,
          endAngle: 135,
          track: {
            background: "#fff",
          },

          dataLabels: {
            name: {
              fontSize: "14px",
              color: "#85929e",
              offsetY: 25,
              fontWeight: "530",
            },
            value: {
              offsetY: -10,
              fontSize: "22px",
              color: currentColor,
              formatter: function (val) {
                return val + "%";
              },
            },
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          shadeIntensity: 0.15,
          inverseColors: true,
          gradientToColors: [currentColor],
          stops: [0, 100],
          opacityFrom: 1,
          opacityTo: 0.3,
        },
      },
      stroke: {
        dashArray: 4,
      },
      labels: ["Growth"],
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="radialBar"
        height="160%"
      />
    </div>
  );
};

export default StrokedGauge;
