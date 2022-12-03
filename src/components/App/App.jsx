import React, { Component } from 'react';

import { ThemeProvider } from 'styled-components';
import { theme } from '../Styled/Theme';
import { GlobalStyle } from '../Styled/GlobalStyle';


// import css from './App.module.css'; ???



export class App extends Component {
  state = {
   
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

  render() {
   
    return (<> <ThemeProvider theme={theme}> <GlobalStyle />
    
      
    </ThemeProvider> </>
    );
  }
}