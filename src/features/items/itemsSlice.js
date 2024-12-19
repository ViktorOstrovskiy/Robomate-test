import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    list: [
        { id: '1', name: 'Item 1' },
        { id: '2', name: 'Item 2' }
    ],
};
const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = {
                id: Math.random().toString(36).substr(2, 9),
                name: action.payload.name,
            };
            state.list.push(newItem);
        },
        updateItem: (state, action) => {
            const { id, name } = action.payload;
            const index = state.list.findIndex(item => item.id === id);
            if (index !== -1) {
                state.list[index].name = name;
            }
        }
    },
});
export const { addItem, updateItem } = itemsSlice.actions;
export default itemsSlice.reducer;
