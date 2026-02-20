import type { Character } from "../../types";
import "./style.css";

interface Props {
  character: Character;
}

const CharacterCard = ({ character }: Props) => {
  return (
    <div className="card">
      <h2>{character.name}</h2>
      <p>Género: {character.gender}</p>
      <p>Año nacimiento: {character.birth_year}</p>
    </div>
  );
};

export default CharacterCard;