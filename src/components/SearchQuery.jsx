const SearchQuery = ({ searchQuery, setSearchQuery }) => {
    return (
        <div className="search-box">
            <input
                className="search-input"
                type="text"
                placeholder="Поиск технологий..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            {/* <span className="searched-info">Найдено: {searchQuery.length > 0 ? filterTechnologies.length : 0}</span> */}
        </div>

    )
}

export default SearchQuery