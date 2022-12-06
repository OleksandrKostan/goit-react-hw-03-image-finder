
import css from './Searchbar.module.css';

export const Searchbar = () => (
<header  className={css.Searchbar}>
  <form className={css.SearchForm}>
    <button type="submit" className={css.SearchForm_button}>
      <span className={css.SearchForm_button_label}>Search</span>
    </button>

    <input
      className={css.SearchForm_input}
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
)

