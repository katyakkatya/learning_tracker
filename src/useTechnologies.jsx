import useLocalStorage from "./useLocalStorage";
import { useState } from "react";
// Начальные данные для технологий
const initialTechnologies = [
  {
    id: 1,
    title: "React Components",
    description: "Изучение базовых компонентов",
    status: "not-started",
    notes: "",
  },
  {
    id: 2,
    title: "JSX Syntax",
    description: "Освоение синтаксиса JSX",
    status: "not-started",
    notes: "",
  },
  {
    id: 3,
    title: "State Management",
    description: "Работа с состоянием компонентов",
    status: "not-started",
    notes: "",
  },
];



function useTechnologies() {
  const [technologies, setTechnologies] = useLocalStorage(
    "technologies",
    initialTechnologies
  );
  const [currentFilter, setCurrentFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  // Функция для обновления статуса технологии
  const clickStatus = (id) => {
    setTechnologies((prevTech) =>
      prevTech.map((tech) => {
        if (tech.id === id) {
          if (tech.status === "not-started") {
            return { ...tech, status: "in-progress" };
          }
          if (tech.status === "in-progress") {
            return { ...tech, status: "completed" };
          }
          if (tech.status === "completed") {
            return { ...tech, status: "not-started" };
          }
        }
        return tech;
      })
    );
  };
  const filteredTechnologies = technologies.filter((tech) => {
    // Сначала применяем фильтр по статусу
    let statusMatch = true;
    switch (currentFilter) {
      case "completed":
        statusMatch = tech.status === "completed";
        break;
      case "in-progress":
        statusMatch = tech.status === "in-progress";
        break;
      case "not-started":
        statusMatch = tech.status === "not-started";
        break;
      default:
        statusMatch = true;
    }

    // Затем применяем поисковый запрос (если он есть)
    const searchMatch =
      searchQuery === "" ||
      tech.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tech.description.toLowerCase().includes(searchQuery.toLowerCase());

    return statusMatch && searchMatch;
  });

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
  const updateTechnologyNotes = (techId, newNotes) => {
    setTechnologies(prevTech =>
      prevTech.map(tech => tech.id === techId ? { ...tech, notes: newNotes } : tech
    ));
  };
  // Функция для расчета общего прогресса
  const calculateProgress = () => {
    if (technologies.length === 0) return 0;
    const completed = technologies.filter(
      (tech) => tech.status === "completed"
    ).length;
    return Math.round((completed / technologies.length) * 100);
  };

  console.log("useTechnologies loaded, technologies:", technologies);
  console.log("filteredTechnologies:", filteredTechnologies);
  return {
    technologies,
    clickStatus,
    updateTechnologyNotes,
    setCurrentFilter,
    setStatusComplete,
    setStatusNotStarted,
    setRandomInProgress,
    filteredTechnologies,
    progress: calculateProgress(),
    searchQuery,
    setSearchQuery,
  };
}
export default useTechnologies;
