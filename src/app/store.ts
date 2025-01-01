// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { companyReducer } from '../../src/features/company/companySlice.ts';
import { communicationReducer } from '../features/company/communicationSlice.ts';

export const store = configureStore({
  reducer: {
    company: companyReducer,
    communication: communicationReducer // Register the company reducer
  },
});

// Infer the `RootState` type from the store
export type RootState = ReturnType<typeof store.getState>;
// Infer the `AppDispatch` type from the store
export type AppDispatch = typeof store.dispatch;
