import Filters from "./components/Filters"
import ProgressHeader from "./components/ProgressHeader"
import QuickActions from "./components/QuickActions"
import TechnologyCard from "./components/TechnologyCard"
import SearchQuery from "./components/SearchQuery"
//import { useState, useEffect } from 'react'
import useTechnologies from "./useTechnologies"


const App = () => {

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

    console.log("Все технологии:", technologies);
    console.log("Отфильтрованные технологии:", filteredTechnologies);
    console.log("Поисковый запрос:", searchQuery);
    console.log("Прогресс:", progress);
  return (
    <>
      <div className="header-box">
        <ProgressHeader
          total={technologies?.length || 0}
          done={
            technologies.filter((tech) => tech.status == "completed")?.length
          }
          progress={progress}
        />
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
      <h1 className="technologies-title">Технологии</h1>
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
    </>
  );
}

export default App
