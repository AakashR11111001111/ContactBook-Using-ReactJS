import { useEffect, useRef } from 'react';
import styles from './SideBar.module.css'
import { addContact, editContact } from '../../Slices/ContactSlice';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
const SideBar = () => {

    const contactList = useSelector(store => store.Contacts.contactList);

    const EditContactID = useSelector(store => store.Contacts.editContactID);

    const FavListLength = useSelector(store => store.Contacts.favList.length)
    const dispatch = useDispatch();

    const Fname = useRef("");
    const Lname = useRef("");
    const mobile = useRef("");

    useEffect(()=>{
        Fname.current.focus();
    },[])

    useEffect(()=>{
        if(EditContactID){
            const contactToEdit = contactList.find(contact => contact.id === EditContactID);
            Fname.current.value = contactToEdit.fName;
            Lname.current.value = contactToEdit.lName;
            mobile.current.value = contactToEdit.mobile;
        }
        
    },[EditContactID])
  

    const onFormSubmit = (e) => {
        e.preventDefault();
        const contactDetails = {
            fName: Fname.current.value,
            lName: Lname.current.value,
            mobile: mobile.current.value,
            id: EditContactID ? EditContactID : uuidv4(),
        }

        if(EditContactID){
            //yha edit krna h
            dispatch(editContact(contactDetails))
        }else{
            //yha add krna h
            dispatch(addContact(contactDetails))
        }
        if(Fname.current.value == "" || Lname.current.value == "" || mobile.current.value == ""){
            alert("All the Fields Are Must to be Filled");
        }
        else{
            Fname.current.value = "";
            Lname.current.value = "";
            mobile.current.value = "";
        }
       
    }

    return (
        <div className={styles.sideBar}>
            <div className={styles.contacts}>
                <h3>All Contacts</h3>
                <h3>{contactList.length} Contact</h3>
            </div>
            <div className={styles.FavCont}>
                <h3>Favourites</h3>
                <h3>{FavListLength} Contact</h3>
            </div>
            <div className={styles.divide}>
                <img src="/mask.png" alt="" />
                <h5><em>2 Gaz Ki Duri Mask Hai Jaruri</em></h5>
            </div>
            <form onSubmit={onFormSubmit} className={styles.inputs}>
                <input ref={Fname} type="text" placeholder='First-Name' />
                <input ref={Lname} type="text" placeholder='Sur-Name' />
                <input ref={mobile} style={{width:"100%"}} type="tel" placeholder='Mobile' />
                <button className={styles.addContactBtn}>{EditContactID ? "Edit Contact" : "Add Contact"}</button>
            </form>
        </div>
    )

}
export default SideBar;