import './styles.css';
import { auth, db, storage } from "../../services/Firebase";
import GetCollectionData from "../../services/GetCollectionData";
import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons';

interface Project { 
  id: string;
  [key: string]: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      console.log("Auth:", auth);
      console.log("Firestore:", db);
      console.log("Storage:", storage);

      try {
        const listProjects = await GetCollectionData("projects");
        console.log("listProjects", listProjects);
        setProjects(listProjects);
      } catch (error) {
        console.error("Erro ao buscar projetos:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      {projects && projects.length > 0 && 
        <div className="projects-full">
          <div className="projects-container">
            <h2 className="projects-title">
              Projetos
            </h2>
            <ul className="projects-list">
              {projects.map(project => (
                <li key={project.id} className="projects-item">
                  {project?.iframe &&
                    <iframe 
                    src={project?.iframe} 
                    width="100%" 
                    height="200"
                    className="projects-item-iframe"
                    loading='lazy'
                    >
                  </iframe>
                  }

                  {(project?.name || project?.description || project?.flags || project?.link )&&
                    <div className='projects-item-options'>
                      {project?.name &&
                        <h3 className="projects-item-name">
                          {project?.name}
                        </h3>
                      }
                      {project?.description &&
                        <p className="projects-item-description">
                          {project?.description}
                        </p>
                      }
                      {project?.flags &&
                        <ul className="projects-item-flags-list">
                          {project.flags.split(",").map((flag: string, index: number) => (
                            <li key={index} className="projects-item-flag-item">
                              {flag}
                            </li>
                          ))}
                        </ul>
                      }
                      {project?.link &&
                        <div className='projects-item-links'>
                          <a href={project?.link} target='_blank' className='projects-item-link'>
                            Ver Projeto
                            <FontAwesomeIcon icon={faGithub} color='#6b7280' width={32} height={32}/> 
                          </a>
                          
                        </div>
                      }
                    </div>
                  }

                </li>
              ))}
            </ul>
          </div>
        </div>
      }
    </>
  );
};

export default Projects;
