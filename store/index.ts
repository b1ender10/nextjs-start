import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import homeReducer from './homeSlice';

const rootReducer = combineReducers({
    homeReducer,
});

const makeStore = () => {
    let store = configureStore({
        reducer: rootReducer,
    });

    return store;
}


export const storeWrapper = createWrapper(makeStore);

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];


