import { Link } from "react-router-dom";
import Card from "../components/card";
function Accueil() {
  return (
   <div className="home flex flex-col items-center justify-center bg-orange-50 min-h-screen">
     <Card
     title="Cours du matin"
     subtitle="Développement Front"
     items={["Tudisco Matthieu", " 20/05", "9h-12h30", ""]}
     />
    </div>
  );
}

export default Accueil;
