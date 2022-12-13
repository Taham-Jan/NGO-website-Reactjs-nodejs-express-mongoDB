import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
//import goalReducer from '../features/goals/goalSlice'

import storage from 'redux-persist/lib/storage';
import { combineReducers,getDefaultMiddleware, } from '@reduxjs/toolkit';
import { 
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';




const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};
const reducer = combineReducers({ 
  auth: authReducer,
  // goals: goalReducer,
});

const persistedReducer = persistReducer(persistConfig,reducer)


export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})