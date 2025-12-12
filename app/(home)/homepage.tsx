import { router } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import CustomCard from '../../components/CustomCards';
import HeaderComp from '../../components/HeaderComp';
export default function index() {
  const cardData = [
    {
      id: "1",
      title: "Scan",
      description: "upload a photo of your teeth and let our AI check it.",
      image: require("../../assets/images/1.png"),
      action: ()=>router.push('/(scan)/scan'),
    },
    {
      id: "2",
      title: "Reports",
      description: "The expert analysis we have to offer.",
      image: require("../../assets/images/4.png"),
      action: ()=>router.push('/(report)/report'),
    },
    {
      id: "3",
      title: "Chat",
      description: "Any doubts? No probs ask us.",
      image: require("../../assets/images/2.png"),
      action: ()=>router.push('/(scan)/scan'),
    },
    {
      id: "4",
      title: "Shop",
      description: "Get the best supplies for your oral health.",
      image: require("../../assets/images/3.png"),
      action: ()=>router.push('/(scan)/scan'),
    },
  ];
  return (
    <View style={styles.mainframe}>
      <HeaderComp/>

      <FlatList
        data={cardData}
        keyExtractor={(item) => item.id}
        numColumns={2} // ← IMPORTANT (2-column grid)
        columnWrapperStyle={styles.row} // spacing between columns
        renderItem={({ item }) => (
          <CustomCard
            image={item.image}
            title={item.title}
            description={item.description}
            onPress={item.action}
          />
        )}
        contentContainerStyle={{ paddingVertical: 10 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mainframe:{
    flex:1,

    alignItems:'center',
    backgroundColor:"#a7f7f7ff",
    
  },
  row: {
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 15,
  },

})