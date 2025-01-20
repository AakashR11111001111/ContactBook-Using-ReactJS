import { useDispatch, useSelector } from 'react-redux';

import ContactCard from '../ContactCard/ContactCard';
import styles from './ContactTable.module.css';
import { setEditContactID, setDeleteContactID, deleteContact, markFavourite } from '../../Slices/ContactSlice';

const ContactTable = () => {
    const dispatch = useDispatch();
    const data = useSelector((store)=> store.Contacts.contactList);

    const SearchKey = useSelector((store)=>store.Contacts.searchKey);
        
    
    const onEditContact = (id) => {
        dispatch(setEditContactID(id));
    }

    const onDeleteContact = (id) => {
        dispatch(setDeleteContactID(id));
        dispatch(deleteContact());
        dispatch(setDeleteContactID(""));
    }

    const onMarkFav = (id) => {
        dispatch(markFavourite(id));
    }

    return (
        <div className={styles.main}>
            <table>
                <thead>
                    <tr>
                        <th>Profile</th>
                        <th>First-Name</th>
                        <th>Sur-Name</th>
                        <th>Mobile No.</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data
                        .filter(cont => cont.fName.includes(SearchKey) || cont.lName.includes(SearchKey))
                        .map(cont => <ContactCard onMarkFav={onMarkFav} onDeleteContact={onDeleteContact} onEditContact={onEditContact} key={cont.id} {...cont} />)
                    }
                </tbody>
               
            </table>
        </div>
    )
}
export default ContactTable;