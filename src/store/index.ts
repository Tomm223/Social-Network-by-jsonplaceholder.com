import React from "react";

import { applyMiddleware, compose, legacy_createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
//import rootRedux from './rootRedux';
import thunk from 'redux-thunk';
import { timeoutControll } from "./middlewares/timeoutsControll";
import { rootReducer } from "./rootReducer";




export const store = legacy_createStore(rootReducer,
   composeWithDevTools(
      applyMiddleware(thunk, timeoutControll)
   )
)