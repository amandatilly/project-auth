import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import styled from "styled-components";

// Imported components
import Main from "./components/Main";
import Login from "./components/Login";
import NotFound from "./components/NotFound";

// Imported reducers
import user from "./reducers/user";
import jokes from "./reducers/jokes";

import img from "./assets/background.png";

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${img});
`;

// Combining reducers: user & thoughts
const reducer = combineReducers({
  user: user.reducer,
  jokes: jokes.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <MainWrapper>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </MainWrapper>
  );
};
