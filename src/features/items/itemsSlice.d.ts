interface Item {
    id: string;
    name: string;
}
export interface ItemsState {
    list: Item[];
}
export declare const addItem: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    name: string;
}, "items/addItem">, updateItem: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    id: string;
    name: string;
}, "items/updateItem">;
declare const _default: import("redux").Reducer<ItemsState>;
export default _default;
