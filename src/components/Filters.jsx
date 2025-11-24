const Filters = ({setCurrentFilter}) => {
    return (
        <div className="filter-btns">
            <button className="filter-btn" type="button" onClick={() => setCurrentFilter('all')}>Все</button>
            <button className="filter-btn" type="button" onClick={() => setCurrentFilter('not-started')}>Не начаты</button>
            <button className="filter-btn" type="button" onClick={() => setCurrentFilter('in-progress')}>В процессе</button>
            <button className="filter-btn" type="button" onClick={() => setCurrentFilter('completed')}>Выполненные</button>
        </div>
    )
}

export default Filters