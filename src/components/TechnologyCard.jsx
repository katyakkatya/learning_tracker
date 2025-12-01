import TechnologyNotes from "./TechnologyNotes"

const TechnologyCard = ({ id, technology, clickStatus, onNotesChange }) => {
    
    return (
    <div className={`card ${technology.status}`} onClick={() => clickStatus(id)}>
        <h2 className="card-title">{technology.title}</h2>
        <p className="card-description">Описание: {technology.description}</p>
        <p className="card-status">Статус: {technology.status}</p>
        <div>
          <TechnologyNotes
            notes={technology.notes}
            onNotesChange={onNotesChange}
            techId={id}
          />
        </div>
      </div>
    );
}

export default TechnologyCard