// SkillsData.ts
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faNodeJs,
  faGitAlt,
  faGithub,
  faSass,
  faNpm,
  faFigma,
  faDocker,
  faLinux,
  faVuejs,
  faPhp,
  faPython,
  faWordpress,
  faShopify
} from '@fortawesome/free-brands-svg-icons';

export type SkillStatus = 'aprendendo' | 'domina' | 'especializando';

export type Skill = {
  name: string;
  icon?: any;
  svg?: string;
  color?: string;
  status?: SkillStatus;
};

export type SkillGroup = {
  title: string;
  skills: Skill[];
};

export const statusColors: Record<SkillStatus, string> = {
  aprendendo: '#facc15',
  domina: '#22c55e',
  especializando: '#3b82f6',
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', icon: faHtml5, color: '#E34F26', status: 'domina' },
      { name: 'CSS3', icon: faCss3Alt, color: '#1572B6', status: 'domina' },
      { name: 'JavaScript', icon: faJsSquare, color: '#F7DF1E', status: 'especializando' },
      { name: 'TypeScript', svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', status: 'aprendendo' },
      { name: 'React', icon: faReact, color: '#61DAFB', status: 'especializando' },
      { name: 'Next.js', svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', status: 'aprendendo' },
      { name: 'Vue.js', icon: faVuejs, color: '#42b883', status: 'domina' },
      { name: 'Sass', icon: faSass, color: '#CC6699', status: 'domina' },
      { name: 'Bootstrap', svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', status: 'domina' },
      { name: 'Tailwind', svg: 'https://avatars.githubusercontent.com/u/30317862?s=200&v=4', status: 'domina' },
      { name: 'Materialize', svg: 'https://avatars.githubusercontent.com/u/64709442?s=200&v=4', status: 'domina' },
      { name: 'jQuery', svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg', status: 'domina' }, // <-- jQuery adicionado aqui
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: faNodeJs, color: '#339933', status: 'aprendendo' },
      { name: 'PHP', icon: faPhp, color: '#777BB4', status: 'domina' },
      { name: 'Python', icon: faPython, color: '#3776AB', status: 'domina' },
      { name: 'Flask', svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg', status: 'domina' },
      { name: 'GraphQL', svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', status: 'domina' },
    ],
  },
  {
    title: 'Banco de Dados',
    skills: [
      { name: 'MySQL', svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', status: 'domina' },
      { name: 'PostgreSQL', svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', status: 'domina' },
      { name: 'SQLite', svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg', status: 'domina' },
      { name: 'MongoDB', svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', status: 'domina' },
    ],
  },
  {
    title: 'DevOps / Sistema',
    skills: [
      { name: 'Linux', icon: faLinux, status: 'domina' },
      { name: 'Docker', icon: faDocker, color: '#0db7ed', status: 'domina' },
    ],
  },
  {
    title: 'Ferramentas / Plataformas',
    skills: [
      { name: 'Git', icon: faGitAlt, color: '#F05032', status: 'domina' },
      { name: 'GitHub', icon: faGithub, color: '#181717', status: 'domina' },
      { name: 'Figma', icon: faFigma, color: '#A259FF', status: 'domina' },
      { name: 'npm', icon: faNpm, color: '#CB3837', status: 'domina' },
      { name: 'VTEX', svg: 'https://avatars.githubusercontent.com/u/1288938?s=200&v=4', status: 'domina' },
      { name: 'Shopify', icon: faShopify, color: '#95C675', status: 'aprendendo' },
      { name: 'WordPress', icon: faWordpress, color: '#21759b', status: 'aprendendo' },
    ],
  },
];
