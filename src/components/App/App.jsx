import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';

 
import { ThemeProvider } from 'styled-components';
import { theme } from '../Styled/Theme';
import { GlobalStyle } from '../Styled/GlobalStyle';
import { Modal } from 'components/Modal/Modal';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Button } from 'components/Button/Button';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';




export class App extends Component {
  state = {
    query: '',
    showModal: false,
    page: 1,
    images: null,
    error: null,
    status: 'idle',
  };
  handleFormSubmit = query => {
    this.setState({ query })
  };

  

   

  //   if (prevQuery !== currentQuery || prevState.page !== this.state.page) {
  //     console.log('Изменился query');
  //     this.setState({ status: 'pending' });
  //     fetch(
  //       `https://pixabay.com/api/?q=${currentQuery}}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
  //     )
  //       .then(res => {
  //         if (res.ok) {
  //           return res.json();
  //         }
  //         return Promise.reject(
  //           new Error(`По Вашему запросу ${currentQuery} ничего не найдено!`)
  //         );
  //       })
  //       .then(images => this.setState({ images, status: 'resolved' }))
  //       .catch(error => this.setState({ error, status: 'rejected' }));
  //   }
  // }
  
  
  
//   componentDidUpdate(prevProps, prevState) {
//     const nextContacts = this.state.contacts;
//     const prevContacts = prevState.contacts;
//     if (nextContacts !== prevContacts) {
//       localStorage.setItem('contacts', JSON.stringify(nextContacts));
//     }
//   }
//  
//  componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//  }
 
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
   
    return (<> <ThemeProvider theme={theme}> <GlobalStyle />
    
      <Searchbar onSubmit={this.handleFormSubmit} />
    <ToastContainer/>
           
      <ImageGallery query={this.state.query}/>
      <button type='button' onClick={this.toggleModal}>відкритя модалки</button>
      {this.state.showModal && <Modal onClose={this.toggleModal}/>}
    
      
      <Button/>
      
    </ThemeProvider> </>
    );
  }
}