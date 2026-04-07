import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { useState } from 'react';

export default function Cadastro({ navigation }) {
  const [user, setUser] = useState('');
  const [senha, setSenha] = useState('');

  function cadastrar() {
    if (user && senha) {
      navigation.navigate('Login', { usuario: user, senha });
    } else {
      alert('Preencha todos os campos');
    }
  }

  return (
    <ImageBackground
      source={require('../img/homemaranha.png')}
      style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Cadastro</Text>

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

        <TouchableOpacity style={styles.button} onPress={cadastrar}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

<TouchableOpacity 
  style={styles.buttonAdmin} 
  onPress={() => {
    const adminUser = "admin";
    const adminSenha = "123";

    let inputUser = prompt("Usuário Admin:");
    let inputSenha = prompt("Senha Admin:");
    
    if (inputUser === adminUser && inputSenha === adminSenha) {
      navigation.navigate("Perfil", { 
        usuario: "Vivian", 
        isAdmin: true, 
        email: "vivian@gmail", 
        data: "06/03/2009" 
      });
    } else {
      alert("Acesso negado!");
    }
  }}
>
  <Text style={styles.buttonText}>Administrador</Text>
</TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#666',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#CD1C18',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonAdmin: {
    backgroundColor: '#2563EB',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});