import { createSlice } from "@reduxjs/toolkit";

const initState = {
    contactList : [],
    editContactID: "",
    searchKey: "",
    idToDelete: "",
    favList: [],
}


const ContactSlice = createSlice({
    name:"CONTACTS",
    initialState: initState,
    reducers:{
        addContact(state,action){
            state.contactList.push(action.payload)
        },
        editContact(state,action){
            const index = state.contactList.findIndex(cont => cont.id === state.editContactID)
            state.contactList.splice(index,1,action.payload);
            state.editContactID = "";
        },
        deleteContact(state,action){
            state.contactList = state.contactList.filter(c => c.id !== state.idToDelete)
        },
        markFavourite(state,action){
            const detailsToFav = state.contactList.find(c => c.id == action.payload)
            const isAlreadyPresent = state.favList.some(c => c.id == detailsToFav.id);
            if(!isAlreadyPresent){
                state.favList.push(detailsToFav);
                alert("Contact Added to Favourite List Successfully !")
            }else{
                alert("Contact Already Present")
            }
        },
        setEditContactID(state,action){
            state.editContactID = action.payload;
        },
        setsearchKey(state, action){
            state.searchKey = action.payload;
        },
        setDeleteContactID(state, action){
            state.idToDelete = action.payload;
        },
    }
})

export const { addContact, editContact, setEditContactID, setsearchKey, setDeleteContactID, deleteContact, markFavourite} = ContactSlice.actions;
export default ContactSlice.reducer;