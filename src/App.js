import "./App.css";
import Users from "./component/Users";
import { Route, Routes } from "react-router-dom";
import HomePage from "./component/HomePage";
import About from "./component/About";
import Concerts from "./component/Concerts";
import ContactUs from "./component/ContactUs";
import LogInRegister from "./component/LogInRegister";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/homePage" element={<HomePage />}>
          <Route path="about/" element={<About />}></Route>
          <Route path="contactUs/" element={<ContactUs />}></Route>
          <Route path="logInRegister/" element={<LogInRegister />}></Route>
          <Route path="concerts/" element={<Concerts />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
