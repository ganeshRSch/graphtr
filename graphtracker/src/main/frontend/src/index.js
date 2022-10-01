import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.js"
import Layout from "./layout";
import Home from "./Home";
import Employee from "./employee";
import BasicChart from "./chart";

export default function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="App" element={<App />} />
          <Route path="employee" element={<Employee />} />
          <Route path="chart" element={<BasicChart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppRoute />);