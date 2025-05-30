import { ScrollView, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Card from "./card";

export default function Accueil() {
  const router = useRouter();

  const now = new Date();
  const date = now.toLocaleDateString("fr-FR");
  const heure = now.toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card
        title="Cours du matin"
        subtitle="Développement Front"
        items={["Tudisco Matthieu", date, heure, "103 Boole"]}
        buttonTitle="Signer"
        onPressButton={() => router.push("/signature")}
      />
      <Card
        title="Cours de l'après midi"
        subtitle="Développement Mobile"
        items={["Tudisco Matthieu", date, heure, "103 Boole"]}
        buttonTitle="Scanner"
        onPressButton={() => router.push("/scanner")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "#FFF7ED",
    flexGrow: 1,
  },
});
