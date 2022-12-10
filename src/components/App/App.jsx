import React, { Component } from 'react';
 
import { ThemeProvider } from 'styled-components';
import { theme } from '../Styled/Theme';
import { GlobalStyle } from '../Styled/GlobalStyle';

import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Searchbar } from '../Searchbar/Searchbar';
import { Fetch } from 'services/Api';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button';
import { Loader } from '../Loader/Loader';
import { Modal } from '../Modal/Modal';


export class App extends Component {
 state = {
    images: [],
    isLoading: false,
    valueSearch: '',
    page: 1,
    modal: false,
    Img: '',
    Alt: '',
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ isLoading: true });

    if (e.target.elements.inputForSearch.value.trim() === '') {
       toast.error('Ведіть поле для пошуку зображення');
      this.setState({ isLoading: false })
        return;
    }
 
    const response = await Fetch(e.target.elements.inputForSearch.value, 1);
    this.setState({
      images: response,
      isLoading: false,
      valueSearch: e.target.elements.inputForSearch.value,
      page: 1,
    });
  };

  handleClickMore = async () => {
    const response = await Fetch(
      this.state.valueSearch,
      this.state.page + 1
    );
    this.setState({
      images: [...this.state.images, ...response],
      page: this.state.page + 1,
    });
  };

  handleClickImage = e => {
    this.setState({
      modal: true,
      Alt: e.target.alt,
      Img: e.target.name,
    });
  };

  handleModalClose = () => {
    this.setState({
      modal: false,
      Img: '',
      Alt: '',
    });
  };

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.handleModalClose();
     
    }
  };

 async componentDidMount() {
   window.addEventListener('keydown', this.handleKeyDown);
   
  }



  render() {
    const {isLoading, images,  modal, Img, Alt} = this.state;
    return ( <ThemeProvider theme={theme}> <GlobalStyle />
      {isLoading
          ? (<Loader />)
          : (
          <>
            <Searchbar onSubmit={this.handleSubmit} /><ToastContainer />
            <ImageGallery
              onClick={this.handleClickImage}
              images={images}
              />
       
            {images.length > 0 ? (
              <Button onClick={this.handleClickMore} />
            ) : null}
          </>
        )}
        {modal ? (
          <Modal
            src={Img}
            alt={Alt}
            handleClose={this.handleModalClose}
          />
        ) : null}
   </ThemeProvider> );
  }
}