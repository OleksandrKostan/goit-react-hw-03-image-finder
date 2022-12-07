import { Component } from 'react';
import css from './Searchbar.module.css';
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



export class Searchbar extends Component {
  state = {
    query: '',
  };
   handleInputChange = e => {
     this.setState({ query: e.currentTarget.value.toLocaleLowerCase() });
     
  };
  
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.query.trim() === '') {
      toast.error('Ведіть поле для пошуку зображення');
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
   
  };
 
  
  render() { 
    return (<header  className={css.Searchbar}>
  <form onSubmit={this.handleSubmit} className={css.SearchForm}>
    <button type="submit" className={css.SearchForm_button}>
      <span className={css.SearchForm_button_label}>Search</span>
    </button>

        <input
          name="query"
      className={css.SearchForm_input}
      type="text"
      autocomplete="off"
      autoFocus
          placeholder="Search images and photos"
          onChange={this.handleInputChange}
    />
  </form>
</header>);
  }
}
 




