import propTypes from 'prop-types';
import css from './Searchbar.module.css';




export const Searchbar = ({ onSubmit }) => (
  <header className={css.Searchbar}>
    <form className={css.SearchForm} onSubmit={onSubmit}>
      <button type="submit" className={css.SearchForm_button}>
        <span className={css.SearchForm_button_label}>Search</span>
      </button>

      <input
        name="inputForSearch"
        className={css.SearchForm_input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);

Searchbar.propTypes = {
  onSubmit: propTypes.func,
};
 






