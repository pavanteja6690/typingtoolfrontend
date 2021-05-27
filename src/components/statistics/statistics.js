import React, { useState } from "react";
import Chart from "react-google-charts";
function Statistics() {
  const [charttype, setcharttype] = useState("LineChart");
  return (
    <div
      style={{
        background: "grey",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div
        className="graphoptions"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100vw",
        }}
      >
        <h4
          onClick={() => {
            setcharttype("LineChart");
          }}
        >
          LineChart
        </h4>
        <h4
          onClick={() => {
            setcharttype("BarChart");
          }}
        >
          BarChart
        </h4>
        <h4
          onClick={() => {
            setcharttype("AreaChart");
          }}
        >
          AreaChart
        </h4>
        <h4
          onClick={() => {
            setcharttype("ScatterChart");
          }}
        >
          ScatterChart
        </h4>
        <h4
          onClick={() => {
            setcharttype("SteppedAreaChart");
          }}
        >
          SteppedAreaChart
        </h4>
      </div>
      <div>
        <Chart
          width={"600px"}
          height={"400px"}
          chartType={charttype}
          loader={<div>Loading Chart</div>}
          data={[
            ["matchnumber", "wpm", "accuracy"],
            [0, 40, 80],
            [1, 42, 80],
            [2, 45, 80],
            [3, 50, 80],
            [4, 60, 80],
            [5, 75, 90],
          ]}
          options={{
            title: "Your typing matches statistics",
            hAxis: { title: "matchnumber", minValue: 0 },
            vAxis: { minValue: 0 },
            legend: "none",
            animation: {
              startup: true,
              easing: "linear",
              duration: 1500,
            },
            enableInteractivity: true,
          }}
          chartEvents={[
            {
              eventName: "animationfinish",
              callback: () => {
                console.log("Animation Finished");
              },
            },
          ]}
          rootProps={{ "data-testid": "2" }}
        />
      </div>
    </div>
  );
}

export default Statistics;
