import TechnologyNotes from "./TechnologyNotes"

const TechnologyCard = ({ title, description, status, clickStatus, notes, onNotesChange, techId }) => {
    return (
        <div className={`card ${status}`} onClick={clickStatus}>
            <h2 className="card-title">{title}</h2>
            <p className="card-description">Описание: {description}</p>
            <p className="card-status">Статус: {status}</p>
            <div>
                <TechnologyNotes notes={notes} onNotesChange={onNotesChange} techId={techId} />
            </div>
        </div>
    )
}

export default TechnologyCard