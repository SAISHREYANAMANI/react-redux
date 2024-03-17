

import {legacy_createStore } from "redux"
import { reducer } from "./reducers"
import { rootReducer } from "./combineReducer"
import { composeWithDevTools } from "redux-devtools-extension"


export const reduxStore = legacy_createStore(rootReducer,composeWithDevTools())