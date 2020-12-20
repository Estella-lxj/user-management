import './SearchBar.css';
import { Link } from 'react-router-dom';
import { FiSearch, FiUserPlus } from 'react-icons/fi';

const SearchBar = ({ keyword, setKeyword }) => {

    return (
        <div className="search-bar-container">
            <span className="search-icon"><FiSearch /></span>
            <input
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Find users..."
            />
            <Link to="/user/new" ><span className='add-icon'><FiUserPlus /></span></Link>
        </div>
    )
}

export default SearchBar;
