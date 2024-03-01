import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { useRoutes } from "react-router-dom";
import { RegisterForm } from "./Components/RegisterForm";
import LoginForm from "./Components/LoginForm";
import LandingPage from "./Components/LandingPage";
import UserProfile from "./Components/UserProfile";
import UserView from "./Components/UserView";
import Module1 from "./Components/Module1";
import Module2 from "./Components/Module2";
import Module3 from "./Components/Module3";
// import Cart from "./Cart";
// import Location from "./Location"; // Import the 'Location' component
// import Sports from "./components/Sports"; // Import the 'Sports' component
// import Music from "./Music"; // Import the 'Music' component
// import Tools from "./Tools"; // Import the 'Tools' component
// import Vehicles from "./Vehicles"; // Import the 'Vehicles' component
// import LawnGarden from "./LawnGarden"; // Import the 'LawnGarden' component
// import Electronics from "./Electronics"; // Import the 'Electronics' component
// import HomeGoods from "./HomeGoods"; // Import the 'HomeGoods' component
// import ToysGames from "./ToysGames"; // Import the 'ToysGames' component
// import Clothing from "./Clothing"; // Import the 'Clothing' component
// import House from "./House"; // Import the 'House' component

function NoMatch() {
  return (
    <div style={{ padding: 20 }}>
      <h2>404: Page Not Found</h2>
      <p>
        <font color="white">There is no page at the requested url</font>
      </p>
    </div>
  );
}

function UnAuthorized() {
  return (
    <div style={{ padding: 20 }}>
      <h2>401: Unauthorized</h2>
      <p>
        <font color="white">
          You are not authorized to view the page at the requested url
        </font>
      </p>
    </div>
  );
}

function App() {
  return (
    <div>
      <header className="App-topbar-alt">
        {/* <!-- Search bar Added by Ronald --> */}
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Logo
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/location" className="nav-link">
              Location
            </Link>
          </li>
          <li className="nav-item-center">
            <form className="form-inline">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </li>

          <li className="nav-item nav-item-right">
            <Link to="/cart" className="nav-link">
              Cart
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/SignIn" className="nav-link">
              Sign In
            </Link>
          </li>
        </ul>
      </header>

      <header className="App-topbar">
        {/* <!-- Navigation bar Added by Ronald --> */}
        <ul className="nav nav-pills">
          <li className="nav-item-center2">
            <Link to="/Profile" className="nav-link">
              Profile
            </Link>
          </li>
          <li className="nav-item-center2">
            <Link to="/" className="nav-link">
              Outdoor Gear
            </Link>
          </li>
          <li className="nav-item-center2">
            <Link to="/sports" className="nav-link">
              Sports
            </Link>
          </li>

          <li className="nav-item-center2">
            <Link to="/music" className="nav-link">
              Music
            </Link>
          </li>
          <li className="nav-item-center2">
            <Link to="/tools" className="nav-link">
              Tools
            </Link>
          </li>
          <li className="nav-item-center2">
            <Link to="/vehicles" className="nav-link">
              Vehicles
            </Link>
          </li>
          <li className="nav-item-center2">
            <Link to="/lawn-garden" className="nav-link">
              Lawn and Garden
            </Link>
          </li>
          <li className="nav-item-center2">
            <Link to="/electronics" className="nav-link">
              Electronics
            </Link>
          </li>
          <li className="nav-item-center2">
            <Link to="/home-goods" className="nav-link">
              Home Goods
            </Link>
          </li>
          <li className="nav-item-center2">
            <Link to="/toys-games" className="nav-link">
              Toys and Games
            </Link>
          </li>
          <li className="nav-item-center2">
            <Link to="/clothing" className="nav-link">
              Clothing
            </Link>
          </li>
          <li className="nav-item-center2">
            <Link to="/house" className="nav-link">
              House
            </Link>
          </li>
        </ul>
      </header>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/SignIn" element={<RegisterForm />} />
        <Route path="/Profile" element={<UserProfile />} />
        <Route path="/users" element={<UserView />} />
        <Route path="/module1" element={<Module1 />} />
        <Route path="/module2" element={<Module2 />} />
        <Route path="/module3" element={<Module3 />} />
        {/* <Route path="/Cart" element={<Cart />} /> */}
        {/* <Route path="/location" element={<Location />} /> */}
        {/* <Route path="/sports" element={<Sports />} /> */}
        {/* <Route path="/music" element={<Music />} />
          <Route path="/tools" element={<Tools />} /> */}
        {/* <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/lawn-garden" element={<LawnGarden />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/home-goods" element={<HomeGoods />} />
          <Route path="/toys-games" element={<ToysGames />} />
          <Route path="/clothing" element={<Clothing />} />
          <Route path="/house" element={<House />} /> */}

        <Route path="/unauthorized" element={<UnAuthorized />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
