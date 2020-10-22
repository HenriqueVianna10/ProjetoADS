import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import {
    View,
    ImageBackground,
    Text,
    StyleSheet,
    Image,
  } from "react-native";
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'


const Home = () => {
  const navigation = useNavigation();


  function handleNavigateToPoints(){
    navigation.navigate('Points');
  }




    return (
            <ImageBackground 
              source={require('../../assets/home-background.png')} 
              style={styles.container}
              
              >
                <View style={styles.main}> 
                <Image source={require('../../assets/sus-logo.png')} />
                <Text style={styles.title}>E-Vacina</Text>
                <Text style={styles.description}>Encontre as Vacinas Disponíveis na Sua Região.</Text>
                </View>

              <View style={styles.footer}>
                <RectButton style={styles.button} onPress={handleNavigateToPoints}> 
                  <View style={styles.buttonIcon}> 
                   <Text> 
                     <Icon name="arrow-right"
                           color="#FFF"
                           size={24}
                           />      
                   </Text>
                  </View>
                  <Text style={styles.buttonText}>
                    Entrar
                  </Text>
                </RectButton>
              </View>
            </ImageBackground>
        );
};

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 32  
    },
  
    main: {
      flex: 1,
      justifyContent: "center",
    },
  
    title: {
      color: "#322153",
      fontSize: 45,
      fontFamily: "Ubuntu_700Bold",
      maxWidth: 260,
      marginTop: 200,
    },
  
    description: {
      color: "#322153",
      fontSize: 19,
      marginTop: 120,
      fontFamily: "Roboto_400Regular",
      maxWidth: 260,
      lineHeight: 24,
    },
  
    footer: {},
  
    select: {},
  
    input: {
      height: 60,
      backgroundColor: "#FFF",
      borderRadius: 10,
      marginBottom: 8,
      paddingHorizontal: 24,
      fontSize: 16,
    },
  
    button: {
      backgroundColor: "#34CB79",
      height: 60,
      flexDirection: "row",
      borderRadius: 10,
      overflow: "hidden",
      alignItems: "center",
      marginTop: 8,
    },
  
    buttonIcon: {
      height: 60,
      width: 60,
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      justifyContent: "center",
      alignItems: "center",
    },
  
    buttonText: {
      flex: 1,
      justifyContent: "center",
      textAlign: "center",
      color: "#FFF",
      fontFamily: "Roboto_500Medium",
      fontSize: 16,
    },
  });