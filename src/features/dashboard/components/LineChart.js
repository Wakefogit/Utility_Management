import React from "react";
import ReactDOM from "react-dom";
import ReactApexChart from "react-apexcharts";
import TitleCard from "../../../components/Cards/TitleCard";

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Jan",
          data: this.generateData(20, {
            min: -30,
            max: 55,
          }),
        },
        {
          name: "Feb",
          data: this.generateData(20, {
            min: -30,
            max: 55,
          }),
        },
        {
          name: "Mar",
          data: this.generateData(20, {
            min: -30,
            max: 55,
          }),
        },
        {
          name: "Apr",
          data: this.generateData(20, {
            min: -30,
            max: 55,
          }),
        },
        {
          name: "May",
          data: this.generateData(20, {
            min: -30,
            max: 55,
          }),
        },
        {
          name: "Jun",
          data: this.generateData(20, {
            min: -30,
            max: 55,
          }),
        },
        {
          name: "Jul",
          data: this.generateData(20, {
            min: -30,
            max: 55,
          }),
        },
        {
          name: "Aug",
          data: this.generateData(20, {
            min: -30,
            max: 55,
          }),
        },
        {
          name: "Sep",
          data: this.generateData(20, {
            min: -30,
            max: 55,
          }),
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "heatmap",
        },
        plotOptions: {
          heatmap: {
            shadeIntensity: 0.5,
            radius: 0,
            useFillColorAsStroke: true,
            colorScale: {
              ranges: [
                {
                  from: -30,
                  to: 5,
                  name: "low",
                  color: "#00A100",
                },
                {
                  from: 6,
                  to: 20,
                  name: "medium",
                  color: "#128FD9",
                },
                {
                  from: 21,
                  to: 45,
                  name: "high",
                  color: "#FFB200",
                },
                {
                  from: 46,
                  to: 55,
                  name: "extreme",
                  color: "#FF0000",
                },
              ],
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 1,
        },
        // title: {
        //   text: "HeatMap Chart with Color Range",
        // },
      },
    };
  }

  generateData(count, yrange) {
    let i = 0;
    const series = [];
    while (i < count) {
      const x = "w" + (i + 1).toString();
      const y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      series.push({
        x: x,
        y: y,
      });
      i++;
    }
    return series;
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="heatmap"
          height={350}
        />
      </div>
    );
  }
}

function LineChart() {
  return (
    <TitleCard title={"Power"}>
      <ApexChart />
    </TitleCard>
  );
}


export default LineChart;
