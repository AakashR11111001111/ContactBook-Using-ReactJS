import { Provider } from 'react-redux';

import ContactTable from '../../Components/ContactsTable/ContactTable';
import Header from '../../Components/Header/Header';
import SideBar from '../../Components/SideBar/SideBar';
import styles from './Main.module.css'
import store from '../../store';
const Main = () => {
    return (
        <Provider store={store}>
            <>
                <div className={styles.main}>
                    <Header />
                    <div className={styles.lower}>
                        <SideBar />
                        <ContactTable />
                    </div>
                </div>
            </>
        </Provider>
    )
}

export default Main;