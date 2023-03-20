import css from 'components/ContactList/ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { getAllContacts } from 'redux/selectors/selectors';

export const ContactList = () => {
    const contacts = useSelector(getAllContacts);
    const dispatch = useDispatch();

    return (
        <>
            <ul className={css.contactList}>
                {contacts.map(({ name, id, number }) => {
                    return (
                        <li
                            key={id}
                            className={css.item}>
                            {name} : {number}
                            <button
                                type="button"
                                className={css.btnContactList}
                                onClick={() => dispatch(deleteContact(id))}
                            >
                                Delete
                            </button>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};
