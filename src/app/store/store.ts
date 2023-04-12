import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { commonApi } from './commonApi';
import { themeSlice } from './reducers/themeSlice';
import { authSlice } from './reducers/authSlice';
import { cellModalSlice } from './reducers/modalSlice';

const preloadedState = {};

const rootReducer = combineReducers({
    [commonApi.reducerPath]: commonApi.reducer,
    auth: authSlice.reducer,
    theme: themeSlice.reducer,
    cellModal: cellModalSlice.reducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    }).concat(commonApi.middleware),
    preloadedState,
    devTools: process.env.NODE_ENV !== 'production'
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;