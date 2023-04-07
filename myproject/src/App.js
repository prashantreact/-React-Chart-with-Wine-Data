import './App.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import newData from "./windata.json";

function App() {

 
  return (
    <>
    <LineChart
      width={1300}
      height={650}
      data={newData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 6" />
      <XAxis />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="Alcohol" stroke="#8884d8" />
      <Line type="monotone" dataKey="Malic Acid" stroke="#82ca9d" />
      <Line type="monotone" dataKey="Ash" stroke="#8884d8" />
      <Line type="monotone" dataKey="Alcalinity of ash" stroke="#8884d8" />
      <Line type="monotone" dataKey="Total phenols" stroke="#82ca9d" />
      <Line type="monotone" dataKey="Flavanoids" stroke="#8884d8" />
      <Line type="monotone" dataKey="Nonflavanoid phenols" stroke="#82ca9d" />
      <Line type="monotone" dataKey="Proanthocyanins" stroke="#8884d8" />
      <Line type="monotone" dataKey="Color intensity" stroke="#82ca9d" />
      <Line type="monotone" dataKey="Hue" stroke="#8884d8" />
      <Line
        type="monotone"
        dataKey="OD280/OD315 of diluted wines"
        stroke="#82ca9d"
      />
      <Line type="monotone" dataKey="Unknown" stroke="#8884d8" />
    </LineChart>

    
    
     </>)
  };
  



export default App;
