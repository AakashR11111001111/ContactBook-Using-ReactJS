import { useDispatch } from 'react-redux'
import styles from './Header.module.css'
import { setsearchKey } from '../../Slices/ContactSlice';
const Header = () => {
    const dispatch = useDispatch();
    const onInputChange = (e) => {
        dispatch(setsearchKey(e.target.value))
    }

    return (
        <div className={styles.header}>
            <div className={styles.searchip}>
                <form action="">
                    <input onChange={onInputChange} type="text" id='SearchC' placeholder='Search Contact'/>
                </form>
            </div>
        </div>
    )
}
export default Header;