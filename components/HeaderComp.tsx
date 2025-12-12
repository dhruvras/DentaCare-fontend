import { Ionicons } from "@expo/vector-icons"; // For icons
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export default function HeaderComp() {
  return (
    <View style={styles.container}>

      {/* Left: Menu */}
      <TouchableOpacity>
        <Ionicons name="menu" size={28} color="#004f4f" />
      </TouchableOpacity>

      {/* Center: Logo */}
      <Image
        source={require("../assets/images/logo-header.jpg")}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Right: Bell + Profile */}
      <View style={styles.rightIcons}>

        <TouchableOpacity style={{ marginRight: 15 }}>
          <Ionicons name="notifications-outline" size={26} color="#004f4f" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="person-circle-outline" size={28} color="#004f4f" />
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    backgroundColor:"#9ae0e0",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    elevation: 5,
    paddingTop: 30,

  },
  logo: {
    width: 200,
    height: 60,
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
});
