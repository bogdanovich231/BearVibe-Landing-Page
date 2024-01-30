import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface CategoriesState {
  allCategories: string[];
  selectedCategory: string;
}

const initialState: CategoriesState = {
  allCategories: [],
  selectedCategory: '',
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.allCategories = action.payload;
    },
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setCategories, setSelectedCategory } = categoriesSlice.actions;
export const selectAllCategories = (state: RootState) => state.categories.allCategories;
export const selectSelectedCategory = (state: RootState) => state.categories.selectedCategory;

export default categoriesSlice.reducer;
