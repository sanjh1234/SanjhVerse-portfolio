import "./App.css";
import { AppLayout } from "./components/layout/AppLayout";
import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { SkillPage } from "./pages/Skills";
import { ProjectPage } from "./pages/Project";
import { ContactPage } from "./pages/Contact";
import { getSkillsAPI } from "./components/getApi/GetSkillsAPI";
import { getProjectsApi } from "./components/getApi/GetProjectsAPI";
import { useEffect} from "react";

function App() {
  // Fetch API data for skills and projects
  useEffect(() => {
    getSkillsAPI();
    getProjectsApi();
  }, []);

  // Lazy load all images
  useEffect(() => {
    document.querySelectorAll("img").forEach((img) => {
      if (!img.hasAttribute("loading")) {
        img.setAttribute("loading", "lazy");
      }
    });
  }, []);

  return (
    <AppLayout>
      <section id="home">
        <HomePage />
      </section>
      
      <section id="skills">
        <SkillPage />
      </section>
      <section id="projects">
        <ProjectPage />
      </section>
      <section id="about">
        <AboutPage />
      </section>
      <section id="contact">
        <ContactPage />
      </section>
    </AppLayout>
  );
  }

export default App;
