const ProgressHeader = ({total, done, progress}) => {
    return (
        <div className="header">
            <p className="header-total">Общее количество технологий: {total}</p>
            <p className="header-done">Количество изученных технологий: {done}</p>
            <p>Прогресс: {`${progress}%`}</p>
            <div className="progressbar-container">
                <div className="progressbar" style={{height: "100%", width: `${done/total*100}%`, backgroundColor: "#b38fadff"}}></div>
            </div>
        </div>
    )
}

export default ProgressHeader