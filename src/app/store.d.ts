import { ItemsState } from '../features/items/itemsSlice';
import { UserState } from '../features/user/userSlice';
export interface RootState {
    items: ItemsState;
    user: UserState;
}
export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    items: ItemsState;
    user: UserState;
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        items: ItemsState;
        user: UserState;
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export type AppDispatch = typeof store.dispatch;
