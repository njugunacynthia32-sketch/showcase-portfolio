import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

function App() {
  const [projects, setProjects] = useState([
    { id: 1, title: "Website Design", description: "A modern UI project" },
    { id: 2, title: "Mobile App", description: "A React Native app" }
  ]);

  return (
    <div>
      <Header />
      <SearchBar />
      <ProjectForm />
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;