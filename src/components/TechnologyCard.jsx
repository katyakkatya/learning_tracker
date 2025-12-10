import TechnologyNotes from "./TechnologyNotes"
import { Link } from "react-router-dom";

const TechnologyCard = ({ id, technology, clickStatus, onNotesChange }) => {
    
    return (
      <div
        className={`card ${technology.status}`}
        onClick={() => clickStatus(id)}
      >
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
        <Link
          to={`/technology/${technology.id}`}
          className="btn-link"
          onClick={(event) => event.stopPropagation()}
        >
          Подробнее →
        </Link>
      </div>
    );
}

export default TechnologyCard