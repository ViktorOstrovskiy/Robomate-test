import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from '../features/items/itemsSlice';
import userReducer from '../features/user/userSlice';
export const store = configureStore({
    reducer: {
        items: itemsReducer,
        user: userReducer,
    },
});
