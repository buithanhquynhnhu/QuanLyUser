import { Route, Routes } from "react-router-dom";
import CreateUser from "../pages/CreateUser";
import ViewUser from "../pages/ViewUser";
import Login from "../pages/Login";
import Update from "../pages/Update";
import WeatherApp from "../pages/WeatherApp";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/viewuser" element={<ViewUser />}></Route>
      <Route path="/createuser" element={<CreateUser />}></Route>
      <Route path="/weatherapp" element={<WeatherApp />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/update/:id" element={<Update />}></Route>
    </Routes>
  );
}
export default AppRoutes;
