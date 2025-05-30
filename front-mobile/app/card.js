import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Card({ title, subtitle, items, buttonTitle, onPressButton }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      {items.map((item, index) => (
        <Text key={index} style={styles.item}>
          {item}
        </Text>
      ))}
      {buttonTitle && onPressButton && (
        <TouchableOpacity style={styles.button} onPress={onPressButton}>
          <Text style={styles.buttonText}>{buttonTitle}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FEEBC8",
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    width: "90%",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 10,
    color: "#666",
  },
  item: {
    fontSize: 14,
    marginBottom: 3,
  },
  button: {
    marginTop: 15,
    backgroundColor: "#FF7F50",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
