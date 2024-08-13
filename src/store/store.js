import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './uiSlice';
import videoReducer from './videoSlice';

const store = configureStore({
    reducer: {
        ui: uiReducer,
        video: videoReducer,
    },
});

export default store;
