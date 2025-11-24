const QuickActions = ({setStatusComplete, setStatusNotStarted, setRandomInProgress}) => {
    return (
        <div className="quick-actions-btns">
            <button className="quick-actions-btn" type="button" onClick={setStatusComplete}>Отметить все как выполненные</button>
            <button className="quick-actions-btn" type="button" onClick={setStatusNotStarted}>Сбросить все статусы</button>
            <button className="quick-actions-btn" type="button" onClick={setRandomInProgress}>Случайный выбор следующей технологии</button>
        </div>
    )
}

export default QuickActions