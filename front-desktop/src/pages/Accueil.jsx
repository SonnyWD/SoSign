import { Link } from "react-router-dom";
import Card from "../components/card";

function Accueil() {
  const now = new Date();
  const date = now.toLocaleDateString('fr-FR'); 
  const heure = now.toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
   <div className="home flex flex-col items-center justify-center bg-orange-50 min-h-screen">
     <Card
     title="Cours du matin"
     subtitle="Développement Front"
     items={["Tudisco Matthieu", date, heure, "103 Boole"]}
     />
     <Card
     title="Cours de l'après midi"
     subtitle="Développement Mobile"
     items={["Tudisco Matthieu", date, heure, "103 Boole"]}
     />
    </div>
  );
}

export default Accueil;
