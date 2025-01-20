import { configureStore } from "@reduxjs/toolkit";
import ContactReducer from './Slices/ContactSlice';
const store = configureStore({
    reducer: {
        Contacts: ContactReducer
    },
});

export default store;