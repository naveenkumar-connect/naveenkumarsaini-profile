import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import profileReducer from "../modules/profile/store/profileReducer";

const logger = createLogger();

const middleware = (getDefaultMiddleware) =>
    process.env.REACT_APP_HOST === "LOCAL"
      ? getDefaultMiddleware().concat(logger)
      : getDefaultMiddleware();

const store = configureStore({
    reducer: {
        profile: profileReducer,  // Ensure the key matches how you access the slice in your state
    },
    middleware, 
    devTools: typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
});

export default store;