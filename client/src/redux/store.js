import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

// ===== REDUCERS ===== \\
import eatReducer from "./reducers/eatReducer";
import userReducer from "./reducers/userReducer";

// ======= SAGAS ======= \\
import eatSaga from "./sagas/eatSaga";
import userSaga from "./sagas/userSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { eatReducer: eatReducer, userReducer: userReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
  logger,
});

sagaMiddleware.run(eatSaga);
sagaMiddleware.run(userSaga);

export default store;
