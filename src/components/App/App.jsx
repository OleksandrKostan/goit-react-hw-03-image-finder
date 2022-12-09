import React, { Component } from 'react';
// import { ToastContainer } from 'react-toastify';
 
import { ThemeProvider } from 'styled-components';
import { theme } from '../Styled/Theme';
import { GlobalStyle } from '../Styled/GlobalStyle';

import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import { Searchbar } from '../Searchbar/Searchbar';
import { fetchImages } from 'services/Api';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button';
import { Loader } from '../Loader/Loader';
import { Modal } from '../Modal/Modal';


export class App extends Component {
 state = {
    images: [],
    isLoading: false,
    currentSearch: '',
    page: 1,
    modalOpen: false,
    modalImg: '',
    modalAlt: '',
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ isLoading: true });

    if (e.target.elements.inputForSearch.value.trim() === '') {
       toast.error('Ведіть поле для пошуку зображення');
      this.setState({ isLoading: false })
        return;
    }
 
    const response = await fetchImages(e.target.elements.inputForSearch.value, 1);
    this.setState({
      images: response,
      isLoading: false,
      currentSearch: e.target.elements.inputForSearch.value,
      pageNr: 1,
    });
  };

  handleClickMore = async () => {
    const response = await fetchImages(
      this.state.currentSearch,
      this.state.page + 1
    );
    this.setState({
      images: [...this.state.images, ...response],
      page: this.state.page + 1,
    });
  };

  handleImageClick = e => {
    this.setState({
      modalOpen: true,
      modalAlt: e.target.alt,
      modalImg: e.target.name,
    });
  };

  handleModalClose = () => {
    this.setState({
      modalOpen: false,
      modalImg: '',
      modalAlt: '',
    });
  };

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.handleModalClose();
    }
  };

  async componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  render() {
    return ( <ThemeProvider theme={theme}> <GlobalStyle />
      {
        this.state.isLoading
          ? (<Loader />)
          : (
          <>
            <Searchbar onSubmit={this.handleSubmit} /><ToastContainer/>
            <ImageGallery
              onImageClick={this.handleImageClick}
              images={this.state.images}
              />
       
            {this.state.images.length > 0 ? (
              <Button onClick={this.handleClickMore} />
            ) : null}
          </>
        )}
        {this.state.modalOpen ? (
          <Modal
            src={this.state.modalImg}
            alt={this.state.modalAlt}
            handleClose={this.handleModalClose}
          />
        ) : null}
     
   </ThemeProvider> );
  }
}