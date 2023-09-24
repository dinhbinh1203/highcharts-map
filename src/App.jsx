import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { SelectRegion } from "./pages/SelectRegion";
import { HoverRegion } from "./pages/HoverRegion";
import { ChartRegion } from "./pages/ChartRegion";
import { DefaultLayout } from "./layouts/DefaultLayout";

function App() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/select-region" element={<SelectRegion />} />
        <Route path="/hover-region" element={<HoverRegion />} />
        <Route path="/chart-region" element={<ChartRegion />} />
      </Route>
    </Routes>
  );
}

export default App;
