import { configureStore } from '@reduxjs/toolkit';
import { fibonacciApi } from './api/fibonacciApi';

export const store = configureStore({
  reducer: {
    [fibonacciApi.reducerPath]: fibonacciApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fibonacciApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;