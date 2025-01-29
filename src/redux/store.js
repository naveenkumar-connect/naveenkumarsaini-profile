import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { createLogger } from "redux-logger";
import { thunk } from "redux-thunk";
import profileReducer from "../modules/profile/store/profileReducer";

const composeEnhancers  = 
        typeof window === "object" && window.__REDDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                // Specify extension's options like name, actionsBlacklist, actionsCreators, serialize...
            })
            : compose;

const enhancer = composeEnhancers(
    process.env.REACT_APP_HOST==="LOCAL"?
        applyMiddleware(thunk, createLogger())
        :
        applyMiddleware(thunk)
);

export const rootReducer = combineReducers({
    profileReducer
})

const store = createStore(rootReducer, enhancer);

export default store;