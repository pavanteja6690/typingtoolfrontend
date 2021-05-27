import { createStore } from "redux";
import rootreducer from "./reducers/rootreducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
const persistConfig = {
  key: "root",
  storage,
};
// const persistedReducer = persistReducer(persistConfig, rootreducer);
const persistedReducer = persistReducer(persistConfig, rootreducer);

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const persistor = persistStore(store);
export default store;
