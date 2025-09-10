import PropTypes from 'prop-types'

export const Header = ({title, description}) => {
    return (
        <div > 
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

Header.PropTypes={
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};
