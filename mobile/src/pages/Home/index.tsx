import React, { useState } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View, ImageBackground, Text, Image, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const Home = () => {
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');

  const navigation = useNavigation();

  function handleNavigateToPoints(){
    navigation.navigate('Points', {
      uf,
      city
    });
  }

    return (
      <KeyboardAvoidingView 
        style={{ flex: 1 }} 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <ImageBackground 
              source={require('../../assets/home-background.png')} 
              style={styles.container}
              imageStyle={{ width: 640, height: 856}}
          >
                  <View style={styles.main}>
                      <Image source={require('../../assets/sus-logo.png')} />
                      <View>
                        <Text style={styles.title}>E-Vacina</Text>
                        <Text style={styles.description}>Encontre Vacinas Na Sua Região:</Text>
                      </View>
                  </View>

                  <View style={styles.footer}>
                    <TextInput 
                        style={styles.input}
                        placeholder="Digite a UF:"
                        value={uf}
                        maxLength={2}
                        autoCapitalize="characters"
                        autoCorrect={false}
                        onChangeText={setUf}
                    />

                    <TextInput 
                        style={styles.input}
                        placeholder="Digite a Cidade:"
                        value={city}
                        autoCorrect={false}
                        onChangeText={setCity}
                    />

                      <RectButton style={styles.button} onPress={handleNavigateToPoints}>
                        <View style={styles.buttonIcon}>
                          <Text>
                            <Icon name="arrow-right" color="#FFF" size={24} />
                          </Text>
                        </View>
                        <Text style={styles.buttonText}>
                          Entrar
                        </Text>
                      </RectButton>
                  </View>
          </ImageBackground> 
        </KeyboardAvoidingView>  
    );
};

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
      color: "#005bab",
      fontSize: 45,
      fontFamily: "Ubuntu_700Bold",
      maxWidth: 260,
      marginTop: 64,
    },
  
    description: {
      color: "#005bab",
      fontSize: 19,
      marginTop: 20,
      fontFamily: "Roboto_400Regular",
      maxWidth: 280,
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
      backgroundColor: "#005bab",
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
      backgroundColor: "#4682B4",
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


export default Home; 