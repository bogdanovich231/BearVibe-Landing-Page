import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from '../Helper/Api/Api';
import productsReducer from './slices/Products.slice';
import categoriesReducer from './slices/Categories.slice';
import formReducer from './slices/Form.slice';

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  products: productsReducer,
  categories: categoriesReducer,
  form: formReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getdefaultMiddleware) => getdefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
