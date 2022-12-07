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
  };
  handleFormSubmit = query => {
    this.setState({ query })
  };
// componentDidUpdate(prevProps, prevState) {
//     const image = this.props;

//     if (prevState.image !== image) {
//       getImages(image).then(res => res.json().then(res => console.log(res)));
//     }
//   }
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
    const { showModal } = this.state;
    return (<> <ThemeProvider theme={theme}> <GlobalStyle />
    
      <Searchbar onSubmit={this.handleFormSubmit} />
    <ToastContainer/>
           
      <ImageGallery/>
      <button type='button' onClick={this.toggleModal}>відкритя модалки</button>
      {showModal && <Modal onClose={this.toggleModal}/>}
    
      
      <Button/>
      
    </ThemeProvider> </>
    );
  }
}