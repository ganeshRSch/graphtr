import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./app.js"
import Layout from "./layout";
import Home from "./Home";
import Contact from "./contact";
import BasicChart from "./chart";

function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="App" element={<App />} />
          <Route path="Contact" element={<contact />} />
          <Route path="chart" element={<BasicChart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
