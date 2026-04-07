import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function Home({ navigation, route }) {
  const usuario = route.params?.usuario;

  return (
    <ImageBackground 
      source={require('../img/spider.png')}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}> Bem-vindo(a) {usuario}</Text>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate("Perfil", { 
            usuario,
            isAdmin: false 
          })}
        >
          <Text style={styles.buttonText}>Ir para Perfil</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)"
  },
  title: {
    color: "#fff",
    fontSize: 26,
    marginBottom: 20,
    fontWeight: "bold"
  },
  button: {
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 10
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold"
  }
});