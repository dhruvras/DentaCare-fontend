import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function CustomRoundButton({ action = () => {alert("empty button")}, title = "button" }) {
  return (
    <TouchableOpacity style={styles.mainframe} onPress={action} activeOpacity={0.7}>
      <Text style={styles.buttontext}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainframe: {
    width: "80%",
    height: 55,
    backgroundColor: "#00616b",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",   // <-- centers button in parent views
  },
  buttontext: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
