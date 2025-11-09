const TechnologyCard = ({ title, description, status }) => {
    return (
        <div className={`card ${status}`}>
            <h2 className="card-title">{title}</h2>
            <p className="card-description">Описание: {description}</p>
            <p className="card-status">Статус: {status}</p>
        </div>
    )
}

export default TechnologyCard