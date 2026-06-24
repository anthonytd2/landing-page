interface ICardProps {
  title: string;
  description: string;
}

// O ícone agora é fixo aqui, mas poderíamos passar via props se cada card tivesse um ícone diferente
import SunIcon from "../assets/sun.svg";

export default function Card({ title, description }: ICardProps) {
  return (
    <div className="card">
      <span>
        {/* Substitua "sun.svg" pelo nome do ícone que você vai usar, como "champion.svg" se manteve o do professor */}
        <img src={SunIcon} alt="Ícone de destaque" width={64} height={64} />
      </span>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <hr />
      </div>
    </div>
  );
}
