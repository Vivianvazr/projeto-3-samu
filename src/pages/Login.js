import { View, Text, TouchableOpacity, TextInput, StyleSheet, ImageBackground } from 'react-native';
import { useState } from 'react';

export default function Login({ navigation, route }) {
  const [user, setUser] = useState("");
  const [senha, setSenha] = useState("");

function entrar() {
  const usuarioCadastrado = route.params?.usuario;
  const senhaCadastrada = route.params?.senha;

  if (user === usuarioCadastrado && senha === senhaCadastrada) {
    navigation.replace("App", { usuario: user });
  } else {
    alert("Usuário ou senha incorretos");
  }
}
  return (
    <ImageBackground 
      source={require('../img/miranha.png')}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          placeholder="Usuário"
          placeholderTextColor="#ccc"
          value={user}
          onChangeText={setUser}
          style={styles.input}
        />

        <TextInput
          placeholder="Senha"
          placeholderTextColor="#ccc"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={entrar}>
          <Text style={styles.buttonText}>Entrar</Text>
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
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold"
  },
  input: {
    backgroundColor: "#666",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#CD1C18",
    padding: 15,
    borderRadius: 10,
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  }
});