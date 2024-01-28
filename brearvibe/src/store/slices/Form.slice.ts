import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IFormInput } from '../../Helper/Interface/Interface';


export const formSlice = createSlice({
    name: 'form',
    initialState: {
        name: '',
        email: '',
        topic: '',
        message: '',
        isLoading: false,
    },
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setTopic: (state, action: PayloadAction<string>) => {
            state.topic = action.payload;
        },
        setMessage: (state, action: PayloadAction<string>) => {
            state.message = action.payload;
        },
        resetForm: (state) => {
            state.name = '';
            state.email = '';
            state.topic = '';
            state.message = '';
        },
        setLoader: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        }
    },
});

export const { setName, setEmail, setTopic, setMessage, resetForm, setLoader } = formSlice.actions;

export const selectForm = (state: RootState) => state.form;

export default formSlice.reducer;