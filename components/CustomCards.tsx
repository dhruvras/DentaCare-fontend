import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CustomCard({ image, title, description, onPress }) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.9} onPress={onPress}>
      
      {/* Upper Image Section */}
      <Image source={image} style={styles.image} resizeMode="cover" />

      {/* Lower Text Section */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        {description && <Text style={styles.description}>{description}</Text>}
      </View>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "45%",
    height: 180,
    backgroundColor: "#fff",
    borderRadius: 16,
    overflow: "hidden", // ensures image respects rounded corners

    // Shadow for Android & iOS
    elevation: 5, // Android shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,

    alignSelf: "center",
    marginVertical: 12,
  },

  image: {
    width: "60%",
    height: "50%", // top half
  },

  textContainer: {
    padding: 12,
    height: "45%",
    justifyContent: "center",
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 4,
  },

  description: {
    fontSize: 14,
    color: "#555",
  },
});
