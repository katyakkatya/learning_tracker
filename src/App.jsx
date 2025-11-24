import Filters from "./components/Filters"
import ProgressHeader from "./components/ProgressHeader"
import QuickActions from "./components/QuickActions"
import TechnologyCard from "./components/TechnologyCard"
import SearchQuery from "./components/SearchQuery"
import { useState, useEffect } from 'react'


const App = () => {
  
  const [technologies, setTechnologies] = useState(() => {
    const saved = localStorage.getItem('techTrackerData');

    if (saved) {
      return JSON.parse(saved);
    }
    return (
    [ { id: 1, title: 'React Components', description: 'Изучение базовых компонентов', status: 'not-started', notes: '' }, 
      { id: 2, title: 'JSX Syntax', description: 'Освоение синтаксиса JSX', status: 'not-started', notes: '' }, 
      { id: 3, title: 'State Management', description: 'Работа с состоянием компонентов', status: 'not-started', notes: '' } ]
    )})
  const [currentFilter, setCurrentFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    localStorage.setItem('techTrackerData', JSON.stringify(technologies));
  }, [technologies]);

  const clickStatus = (id) => {
    setTechnologies(prevTech => prevTech.map(tech => {
      if (tech.id === id) {
        if (tech.status === 'not-started') {
          return { ...tech, status: 'in-progress' }
        }
        if (tech.status === 'in-progress') {
          return { ...tech, status: 'completed' }
        }
        if (tech.status === 'completed') {
          return { ...tech, status: 'not-started' }
        }
      }
      return tech
    }))
  }

  const filteredTechnologies = technologies.filter(tech => {
    switch (currentFilter) {
      case 'all':
        return true
      case 'completed':
        return tech.status === 'completed'
      case 'in-progress':
        return tech.status === 'in-progress'
      case 'not-started':
        return tech.status === 'not-started'
      default:
        return true
    }
      
  })

  const setStatusComplete = () => {
    setTechnologies(prevTech => prevTech.map(tech => {
      return {...tech, status: 'completed'}
    }))
  }

  const setStatusNotStarted = () => {
    setTechnologies(prevTech => prevTech.map(tech => {
      return {...tech, status: 'not-started'}
    }))
  }

  const setRandomInProgress = () => {
    setTechnologies(prevTech => {
      const notStartedTechs = prevTech.filter(tech => tech.status === 'not-started')

      if (notStartedTechs.length === 0) return prevTech

      const randomIndex = Math.floor(Math.random() * notStartedTechs.length)
      const randomTech = notStartedTechs[randomIndex]

      return prevTech.map(tech => 
        tech.id === randomTech.id ? {...tech, status: 'in-progress'} : tech
      )
    })
  }

  const filterTechnologies = filteredTechnologies.filter(tech =>
    tech.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tech.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const updateTechnologyNotes = (techId, newNotes) => {
    setTechnologies(prevTech =>
      prevTech.map(tech => tech.id === techId ? { ...tech, notes: newNotes } : tech
    ));
  };


  return (
    <>
      <div className="header-box">
        <ProgressHeader total={technologies?.length || 0} done={technologies.filter((tech) => tech.status == 'completed')?.length} />
        <QuickActions setStatusComplete={setStatusComplete} setStatusNotStarted={setStatusNotStarted} setRandomInProgress={setRandomInProgress} />
      </div>
      <div className="filters-box">
        <Filters setCurrentFilter={setCurrentFilter} />
        <SearchQuery searchQuery={searchQuery} setSearchQuery={setSearchQuery} filterTechnologies={filterTechnologies} />
      </div>
      <h1 className="technologies-title">Технологии</h1>
      <ul className="technologies-container">
        {filterTechnologies.map((technology) => (
          <li key={technology.id}><TechnologyCard title={technology.title} description={technology.description} status={technology.status} clickStatus={() => clickStatus(technology.id)} notes={technology.notes} onNotesChange={updateTechnologyNotes} techId={technology.id} /></li>
        ))}
      </ul>
    </>
  )
}

export default App
