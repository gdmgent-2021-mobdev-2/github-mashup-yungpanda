import PropTypes from 'prop-types';

const Card = ({ className, title, image, children }) => {
    return (
        <div className={`card ${className}`}>
            { image }
            <div className="card-body">
                { title && <h2 className="card-title">{title}</h2> }
                { children }
            </div>
        </div>
    )
};

// variant (note: there are at least a few other variants possible)
const CardAlt = ({ className, title, image, imageAlt, children }) => {
    return (
        <div className={`card ${className}`}>
            { image && <img src={image} alt={imageAlt || ''} className="card-img-top" /> }
            <div className="card-body">
                { title && <h2 className="card-title">{title}</h2> }
                { children }
            </div>
        </div>
    )
};

Card.propTypes = {
    image: PropTypes.element,
    title: PropTypes.string
};

export default Card;

