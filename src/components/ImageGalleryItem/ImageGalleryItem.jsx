import propTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ image: { id, webformatURL,tags,largeImageURL }, onClick }) => (
  <li className={css.ImageGalleryItem} id={id} onClick={onClick}>
    <img
      src={webformatURL}
      alt={tags}
      name={largeImageURL}
      className={css.ImageGalleryItem_image}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  image: propTypes.object.isRequired,
  onClick: propTypes.func.isRequired,
};