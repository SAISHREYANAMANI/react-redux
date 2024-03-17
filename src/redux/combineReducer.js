import { combineReducers } from "redux";
import { profileReducer } from "./profile/reducer";
import { reducer } from "./reducers";
import { productReducer } from "./products/reducer";


export const rootReducer=combineReducers(
    {
      profile: profileReducer,
       ticket: reducer,
       productListing: productReducer
    }
)