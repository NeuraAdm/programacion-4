import PropTypes from 'prop-types'
import { useState } from 'react'

export const Search = ({ placeholder, onSearch }) => {
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleButtonClick = () => {
        onSearch(search);
    };
    
    return(
    <>
        <input
            type="text"
            required
            placeholder={placeholder}
            value={search}
            onChange={handleSearch}
        />
        <button onClick={handleButtonClick}>
            Buscar
        </button>
    </>
    );

};

Search.propTypes = {
    placeholder: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired
};
