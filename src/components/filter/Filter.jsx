import css from './filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';


export const Filter = () => {
const dispatch = useDispatch();
const filter = useSelector(selectFilter);

  return (
    <form className={css.form}>
 <label className={css.label}>
      <span className={css.span}>Find contacts by name</span>
      <input
        className={css.input}
        type="name"
        placeholder="input contact name"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </label>
  </form>
     );
   
};

