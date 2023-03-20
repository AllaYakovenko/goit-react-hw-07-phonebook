import css from 'components/App.module.css';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectError, selectIsLoading } from '../redux/selectors/selectors';
import { ThreeDots } from 'react-loader-spinner';
import { fetchContacts } from "../redux/operations";


export const App = () => {
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
        <h2 className={css.title}>Contacts</h2>
        <Filter />
        {isLoading&&!error?<div className={css.loader}><ThreeDots /></div>:<ContactList /> }
      </div>
    </div>
  );
};
