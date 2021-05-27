<Chart
  width={"500px"}
  height={"300px"}
  chartType="AreaChart"
  loader={<div>Loading Chart</div>}
  data={[
    ["matches", "wpm", "accuracy"],
    [1, 10, 20],
    [2, 20, 30],
    [3, 20, 40],
    [4, 45, 90],
    [5, 50, 100],
  ]}
  options={{
    title: "Population of Largest U.S. Cities",
    chartArea: { width: "50%" },
    hAxis: {
      title: "Total Population",
      minValue: 1,
    },
    vAxis: {
      title: "City",
    },
  }}
  // For tests
  rootProps={{ "data-testid": "1" }}
/>;
