import { Component } from 'react';
import css from './ImageGallery.module.css';
// import { toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';

export class ImageGallery extends Component {
  state = {
      images: [],
    error: null,
    status: 'idle',
    page: 1,
  } 
  
componentDidUpdate(prevProps, prevState) {
    const key = '30471998-a8edceaaf22ac8084f766fdc6';
  const prevQuery = prevProps.query;
    const currentQuery = this.props.query;
    const { page } = this.state;

    if (prevQuery !== currentQuery || prevState.page !== this.state.page) {
    
      this.setState({ status: 'pending' });
      fetch(
        `https://pixabay.com/api/?q=${currentQuery}}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(
            new Error(`По Вашому запиту ${currentQuery} ничого не знайдено!`)
          );
        })
        .then(images => this.setState({ images, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() { 
const { images, error, status } = this.state;

    if (status === 'idle') {
      // return <Request>Введите запрос! </Request>;
    }
    if (status === 'pending') {
      // return <Loader />;
    }

    if (status === 'rejected') {
      // return <ErrorMessage>{error.message} </ErrorMessage>;
    }
    if (status === 'resolved') {
      return (
        // <GalleryContainer>
        //   <ImageGalleryItem images={images} />
        //   {images.total > 0 ? (
        //     <Button onClick={this.loadMore} />
        //   ) : (
        //     <ErrorMessage>По Вашему запросу ничего не найдено</ErrorMessage>
        //   )}
        // </GalleryContainer>
      // );
    // }
  // }
}



//     return (<><ul className={css.ImageGallery}>
//   {/* <!-- Набір <li> із зображеннями --> */}
//   </ul></>);
//   }
// };

