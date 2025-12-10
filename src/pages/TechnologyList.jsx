// pages/TechnologyList.js
import { Link } from "react-router-dom";
import "../pages/TechnologyList.css";
import useTechnologies from "../useTechnologies";
import TechnologyCard from "../components/TechnologyCard";
import Filters from "../components/Filters";
import ProgressHeader from "../components/ProgressHeader";
import QuickActions from "../components/QuickActions";
import SearchQuery from "../components/SearchQuery";

function TechnologyList() {
  const {
    technologies,
    clickStatus,
    updateTechnologyNotes,
    setCurrentFilter,
    setStatusComplete,
    setStatusNotStarted,
    setRandomInProgress,
    filteredTechnologies,
    progress,
    searchQuery,
    setSearchQuery,
  } = useTechnologies();

  return (
    <div className="page">
      <div className="page-header">
        <h1>Все технологии</h1>
        <Link to="/add-technology" className="btn btn-primary">
          + Добавить технологию
        </Link>
      </div>

      <div className="content-section">
        <ProgressHeader
          total={technologies?.length || 0}
          done={
            technologies.filter((tech) => tech.status === "completed")?.length
          }
          progress={progress}
        />
      </div>

      <div className="content-section">
        <QuickActions
          setStatusComplete={setStatusComplete}
          setStatusNotStarted={setStatusNotStarted}
          setRandomInProgress={setRandomInProgress}
          technologies={technologies}
        />
      </div>

      <div className="filters-box">
        <Filters setCurrentFilter={setCurrentFilter} />
        <SearchQuery
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>

      <div className="technologies">
        <ul className="technologies-container">
          {filteredTechnologies.map((technology) => (
            <li key={technology.id}>
              <TechnologyCard
                id={technology.id}
                technology={technology}
                clickStatus={clickStatus}
                onNotesChange={updateTechnologyNotes}
              />
            </li>
          ))}
        </ul>

        {technologies.length === 0 && (
          <div className="empty-state">
            <p>Технологий пока нет.</p>
            <Link to="/add-technology" className="btn btn-primary">
              Добавить первую технологию
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default TechnologyList;
