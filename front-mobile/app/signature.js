import { useState } from "react";
import { Text, TextInput, Button, SafeAreaView, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";

export default function Signature() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const router = useRouter();

  const handleSign = () => {
    if (firstName.trim() && lastName.trim()) {

      router.push("/scanner");
    } else {
      Alert.alert("Erreur", "Veuillez remplir le prénom et le nom.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Signature de présence</Text>
      <TextInput
        placeholder="Prénom"
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        placeholder="Nom"
        style={styles.input}
        value={lastName}
        onChangeText={setLastName}
      />
      <Button title="Valider la signature" onPress={handleSign} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },
  input: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
});
