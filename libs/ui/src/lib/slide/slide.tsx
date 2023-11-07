import './slide.css';
import { ItemSlide } from '../../lib/ItemSlide/index';
export async function Slide() {
  const personasFamosas = [
    { type: 'actors' },
    { type: 'athletes' },
    { type: 'comedians' },
    { type: 'musicians' },
    { type: 'influencers' },
  ];
  return (
    <div className="slide-container">
      <h1 className="slide-title">Videos personalizados de tus celebridades</h1>
      <div className="slide__container">
        {personasFamosas.map((personaFamosa) => {
          return (
            <div className="slide-item-container">
              <ItemSlide variant={personaFamosa.type} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
