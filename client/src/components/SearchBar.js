

const SearchBar = ({ keyword, setKeyword }) => {

    return (
        <div>
            Search:
            <input
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)} />
        </div>
    )
}

export default SearchBar;
