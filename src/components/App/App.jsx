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
   totalPage: null,
    
  };

async componentDidUpdate(prevProps, prevState) {
    const { valueSearch, page, totalPage } = this.state;
    if (prevState.totalPage !== totalPage || prevState.page !== page) {
      if (page === totalPage || totalPage === 1) {
        toast.info('Це всі зображення по запиту');
      }
    }

    if (prevState.valueSearch !== valueSearch || prevState.page !== page) {
      try {
        this.setState({ isLoading: true });
        const items = await Fetch(valueSearch, page,);
        if (items.length === 0) {
          toast.error('Зображення за пошуком не знайдено');
          return;
        }
        this.setState
          (state => ({
         images: [...state.images, ...items],
         
          }));
       
      } catch (error) {
        console.warn(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  };



  
  handleSubmit =  e => {
    e.preventDefault();
    if (e.target.elements.inputForSearch.value.trim() === '') {
       toast.error('Ведіть поле для пошуку зображення');
        return;
    }
    this.setState({
      valueSearch: e.target.elements.inputForSearch.value,
      page: 1,
      images: [],
    });
  };

  handleClickMore =  () => {
    this.setState(state => ({ page: state.page + 1 }));
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

  // handleKeyDown = e => {
  //   if (e.code === 'Escape') {
  //     this.handleModalClose();
  //   } 
  // };

// handleBackdropClick = e => {
//     if (e.currentTarget === e.target) {
//      this.handleModalClose();
//     }
//   };
//  async componentDidMount() {
//    window.addEventListener('keydown', this.handleKeyDown);

//   };

// componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
// }


  render() {
    const {isLoading, images,  modal, Img, Alt} = this.state;
    return (<ThemeProvider theme={theme}> <GlobalStyle />
       <Searchbar onSubmit={this.handleSubmit} /><ToastContainer />
      {isLoading
          ? (<Loader />)
          : (
          <>
           {images.length > 0 ? (<ImageGallery
              onClick={this.handleClickImage}
              images={images}
              />) : null}
           
      
            {images.length > 0  ? (
              <Button onClick={this.handleClickMore} />
            ) : null}
          </>
        )}
        {modal ? (
          <Modal
            src={Img}
            alt={Alt}
            handleModalClose={this.handleModalClose}
          />
        ) : null}
   </ThemeProvider> );
  }
}