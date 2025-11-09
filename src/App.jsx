import ProgressHeader from "./components/ProgressHeader";
import TechnologyCard from "./components/TechnologyCard"


const App = () => {
  const technologies = [
 { id: 1, title: 'React Components', description: 'Изучение базовых компонентов', status: 'completed' },
 { id: 2, title: 'JSX Syntax', description: 'Освоение синтаксиса JSX', status: 'in-progress' },
 { id: 3, title: 'State Management', description: 'Работа с состоянием компонентов', status: 'not-started' }
];

  return (
    <>
      <ProgressHeader total={technologies.length} done={technologies.filter(({ status }) => status == 'completed').length}/>
      <h1 className="technologies-title">Технологии</h1>
      <ul className="technologies-container">
        {technologies.map((technology) => (
          <TechnologyCard title={technology.title} description={technology.description} status={technology.status}/>
        ))}
      </ul>
    </>
  )
}

export default App
