import { useState } from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { skillGroups, statusColors } from './skillsData';

const Skills = () => {

  const [filterStatus, setFilterStatus] = useState<string>('');

  const filterSkillsByStatus = (skills: typeof skillGroups[0]['skills']) => {
    if (!filterStatus) return skills; 
    return skills.filter((skill) => skill.status === filterStatus);
  };

  return (
    <div id='skills' className="skills-full">
      <div className="skills-container">
        <h2 className="skills-title">Habilidades</h2>

        {/* Filtros */}
        <div className="filter-buttons">
          <button
            className={filterStatus === '' ? 'filter-option active all' : 'filter-option '}
            onClick={() => setFilterStatus('')}
          >
            Todos
          </button>
          <button
            className={filterStatus === 'domina' ? 'filter-option active domina' : 'filter-option'}
            onClick={() => setFilterStatus('domina')}
          >
            Domina
          </button>
          <button
            className={filterStatus === 'especializando' ? 'filter-option active especializando' : 'filter-option'}
            onClick={() => setFilterStatus('especializando')}
          >
            Especializando
          </button>
          <button
            className={filterStatus === 'aprendendo' ? 'filter-option active aprendendo' : 'filter-option'}
            onClick={() => setFilterStatus('aprendendo')}
          >
            Aprendendo
          </button>
        </div>

        {/* Legenda */}
        <div className="status-legend">
          <span className="status-text">
            <span className="dot" style={{ backgroundColor: statusColors.domina }}></span>Domina
          </span>
          <span className="status-text">
            <span className="dot" style={{ backgroundColor: statusColors.especializando }}></span>Especializando
          </span>
          <span className="status-text">
            <span className="dot" style={{ backgroundColor: statusColors.aprendendo }}></span>Aprendendo
          </span>
        </div>

        {skillGroups.map((group) => {
          const filteredSkills = filterSkillsByStatus(group.skills);
          if (filteredSkills.length === 0) return null;

          return (
            <div key={group.title} className="skill-group">
              <h3 className="skill-group-title">{group.title}</h3>
              <div className="skills-list">
                {filteredSkills.map((skill) => (
                  <div key={skill.name} className="skill-card">
                    <div className="skill-icon-wrapper">
                      {skill.icon ? (
                        <FontAwesomeIcon
                          icon={skill.icon}
                          style={{
                            color: skill.color || 'inherit',
                            fontSize: '3rem',
                          }}
                        />
                      ) : (
                        <img
                          src={skill.svg}
                          alt={skill.name}
                          style={{ height: '3rem' }}
                          loading="lazy"
                        />
                      )}
                      {skill.status && (
                        <span
                          className="status-dot"
                          style={{ backgroundColor: statusColors[skill.status] }}
                          title={skill.status}
                        />
                      )}
                    </div>
                    <p className="skill-name">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
