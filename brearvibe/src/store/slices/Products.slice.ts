import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProducts: (state, action) => {
            return action.payload;
        },
    },
});

export const { setProducts } = productsSlice.actions;

export const selectAllProducts = (state: RootState) => state.products;

export default productsSlice.reducer;