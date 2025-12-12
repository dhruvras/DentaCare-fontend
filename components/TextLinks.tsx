import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function TextLinks({ link = "link", action = () => {} }) {
  return (
    <TouchableOpacity onPress={action}>
      <Text style={{ fontSize: 14, marginLeft:3, color: 'blue', textDecorationLine: 'underline' }}>
        {link}
      </Text>
    </TouchableOpacity>
  );
}
