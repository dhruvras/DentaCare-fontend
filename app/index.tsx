import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import CustomRoundButton from '../components/CustomRoundButton';

export default function index() {
    const router = useRouter();
    const handleContinue = () => {
        console.log("Continue button pressed");
        router.push('/(loginsignup)/login');
    }
  return (
    <View style={styles.container}>
        <Image source={require('../assets/images/logo.png')} style={styles.image}/>
        <Text style={styles.text}>Let's make that smile more beautiful...</Text>
        <View style={{marginTop:"45%", width:"100%"}}>
            <CustomRoundButton title='Continue...' action={handleContinue}/>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#9ae0e0",
    },
    text: {
        fontSize: 24,
        color: '#00616b',
        fontWeight: 'bold',
        fontStyle:'italic',
        textAlign: 'center', 
    },
    image: {
        width: 400,
        height: 400,
        marginTop:"13%",
    },
})