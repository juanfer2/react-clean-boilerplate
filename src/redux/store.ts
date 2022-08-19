import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';

const store = configureStore({
  reducer: reducers
});

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;

export default store;