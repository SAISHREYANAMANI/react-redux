

import {legacy_createStore } from "redux"
import { reducer } from "./reducers"


export const reduxStore = legacy_createStore(reducer)