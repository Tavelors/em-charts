//App.tsx

import "./App.css";
import Chart from "./components/Chart";

function App() {
  return (
    <div className="App">
      <Chart />
      {/* <Chart chartOptions={barChartOptions} />
      <Chart chartOptions={columnChartOptions} /> */}
      <div className="row">
        {/* <Chart chartOptions={lineChartOptions} /> */}
        {/* <Chart chartOptions={columnChartOptions} /> */}
      </div>
      {/* <Upload/> */}
    </div>
  );
}

export default App;