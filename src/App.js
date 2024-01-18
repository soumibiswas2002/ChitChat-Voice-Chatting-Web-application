import React, {  } from "react";
import "./App.css";
// import Sidebar from "./Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Pages/register/Register";
import LogInPage from "./Pages/Login/LogInPage";

import Rooms from "./Pages/rooms/Rooms";

import OtpPage from "./Pages/otpPage/OtpPage";

import Main from "./Pages/userProfile/Main.jsx";
import Home from "./Pages/Home/Home";
import CreateProfile from "./Pages/CreateProfile/CreateProfile";
import { ProtectedRoute, GuestRoute } from "./Components/ProtectedRoute";
import SingleRoom from "./Pages/rooms/SingleRoom";

const App = () => {
  return (
    <BrowserRouter>
      {/* 
        {currentForm === "login" ? (
          <LogInPage onFormSwitch={toggleForm} />
        ) : (
          <Register onFormSwitch={toggleForm} />
        )}
      </div> */}
      {/*   <div>
    {contents.map(contents => (
        <Rooms 
            key={contents.id}
            name={contents.name}
            participants={contents.participants}
        />
    ))}
  </div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <GuestRoute>
              <LogInPage />
            </GuestRoute>
          }
        ></Route>
        <Route
          path="/register"
          element={
            <GuestRoute>
              <Register />
            </GuestRoute>
          }
        ></Route>
        <Route
          path="/userProfile"
          element={
            <ProtectedRoute>
              <Main />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/otppage" element={<OtpPage />} />

        <Route
          path="/create-profile"
          element={
            <ProtectedRoute>
              <CreateProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/rooms"
          element={
            <ProtectedRoute>
              <Rooms />
            </ProtectedRoute>
          }
        />
        <Route
          path="/room/:id"
          element={
            <ProtectedRoute>
              <SingleRoom />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
