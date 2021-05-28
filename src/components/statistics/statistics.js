import React, { useState } from "react";
import Chart from "react-google-charts";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Statistics() {
  const [charttype, setcharttype] = useState("LineChart");
  const { typingmatches, sumwpm, sumaccuracy, cnt } = useSelector(
    (state) => state.typingdetails
  );
  console.log(typingmatches, sumaccuracy, sumwpm, cnt);
  let k = 0;
  let temparr = [];
  temparr.push(["matchnumber", "wpm", "accuracy"]);
  typingmatches.forEach((typingmatch) => {
    temparr.push([k, typingmatch.wpm, typingmatch.accuracy]);
    k += 1;
  });

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
        <Link to="/">
          <h5>play again</h5>
        </Link>
      </div>
      <div>
        <Chart
          width={"600px"}
          height={"400px"}
          chartType={charttype}
          loader={<div>Loading Chart</div>}
          data={temparr}
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
        <h3 className="text-center">Average wpm:{sumwpm / cnt}</h3>
        <h3 className="text-center">Average accuracy:{sumaccuracy / cnt}</h3>
      </div>
    </div>
  );
}

export default Statistics;
