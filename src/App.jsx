import Filters from "./components/Filters"
import ProgressHeader from "./components/ProgressHeader"
import QuickActions from "./components/QuickActions"
import TechnologyCard from "./components/TechnologyCard"
import SearchQuery from "./components/SearchQuery"
//import { useState, useEffect } from 'react'
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation"
import TechnologyList from "./pages/TechnologyList"
import AddTechnology from "./pages/AddTechnology"
import TechnologyDetail from "./pages/TechnologyDetail"



const App = () => {

  // const {
  //   technologies,
  //   clickStatus,
  //   updateTechnologyNotes,
  //   setCurrentFilter,
  //   setStatusComplete,
  //   setStatusNotStarted,
  //   setRandomInProgress,
  //   filteredTechnologies,
  //   progress,
  //   searchQuery,
  //   setSearchQuery,
  // } = useTechnologies();

  return (
    <>
      {/* <div className="header-box">
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
      </ul> */}
      <Router>
        <Navigation />
        {/* Основное содержимое */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/TechnologyList.jsx" element={<TechnologyList />} />
            <Route path="/AddTechnology.jsx" element={<AddTechnology />} />
            <Route path="/technology/:techId" element={<TechnologyDetail />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App
