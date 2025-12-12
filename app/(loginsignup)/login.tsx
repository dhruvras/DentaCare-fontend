import CustomRoundButton from '@/components/CustomRoundButton';
import TextLinks from '@/components/TextLinks';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const action = ()=>{
    // we have to make a email and password validation here, the data enter here will be sent to the backend server for validation
    // compared to the the data present in the mongodb database 
    // if the comparison is successful we will route to the homepage else we will show an error message and suggest to signup
    console.log(`Email: ${email}\nPassword: ${password}`);
    router.push('/(home)/homepage');
  }
  return (
    <View style={styles.mainframe}>
      <Text style={styles.heading}>Login Page</Text>

      <View style={styles.box}>

        <TextInput
          placeholder="Username or Email"
          placeholderTextColor="#5c9a9a"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="#5c9a9a"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        <View style={{ marginTop: 30,marginBottom:10, width: '100%', paddingTop: 20 }}>
          <CustomRoundButton title="Next" action={action} />
        </View>
        <TextLinks link="Forgot Password?" action={() => {alert("forgot password")}} />
        <View style={{ marginTop: 12 , flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '60%' }}>
          <Text>don't have an account</Text>
          <TextLinks link="Sign Up" action={() => {router.navigate('/signup')}} />
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainframe: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#9ae0e0",
  },
  box: {
    width: "75%",
    height:'50%',
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: "#98fbfbff",
    borderRadius: 15,
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "#004f4f",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#cfffff",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    color: "#003f3f",
  },
});
