import PropTypes from 'prop-types';

const CardImage = ({ src, alt }) => {
    return (
       <img src={src} alt={alt} className="card-img-top" />
    )
};

CardImage.propTypes = {
    title: PropTypes.string,
};

export default CardImage;

