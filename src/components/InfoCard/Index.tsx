import './styles.css'
import programmer from "../../assets/icons/programmer.png"

const InfoCard = () => {
  return (
    <div className='inforcard-container'>
        <div className='infocard-image'>
            <img src={programmer} width={152} height={152} className='infocard-image-svg' />
        </div>
        <h1 className='inforcart-name'>
            Olá, eu sou
            <span className='inforcart-name-strong'>
            João Porfirio
            </span>
        </h1>
        <p className='inforcart-description'>
            Desenvolvedor FullStack especializado em criar soluções digitais eficientes e escaláveis.
        </p>
        <div className='inforcart-links'>
            <a className='inforcart-link outline'>
                Contato
            </a>

            <a className='inforcart-link fulled'>
                CV
            </a>
        </div>
    </div>
  );
};

export default InfoCard;
