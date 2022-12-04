import React, { Component } from 'react';

import { ThemeProvider } from 'styled-components';
import { theme } from '../Styled/Theme';
import { GlobalStyle } from '../Styled/GlobalStyle';
import { Modal } from 'components/Modal/Modal';


// import css from './App.module.css'; ???



export class App extends Component {
  state = {
    showModal: false,
  };
//   componentDidUpdate(prevProps, prevState) {
//     const nextContacts = this.state.contacts;
//     const prevContacts = prevState.contacts;
//     if (nextContacts !== prevContacts) {
//       localStorage.setItem('contacts', JSON.stringify(nextContacts));
//     }
//   }
//   // порівнюємо попередній стейт із наступним, та записуємо в локал сторедж
//  componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//  }
  // витягуємо із локал сторедж, розпаршуємо та рендимо збережене
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal
    }));
  };
  render() {
    const { showModal } = this.state;
    return (<> <ThemeProvider theme={theme}> <GlobalStyle />
      <button type='button' onClick={this.toggleModal}>відкритя модалки</button>
      {showModal && <Modal/>}
    
      
    </ThemeProvider> </>
    );
  }
}