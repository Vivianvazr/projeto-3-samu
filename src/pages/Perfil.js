import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';

export default function Perfil({ route, navigation }) {
  const isAdmin = route.params?.isAdmin || false;
  const usuario = route.params?.usuario || "";
  const emailParam = route.params?.email || "";
  const dataParam = route.params?.data || "";

  const [email, setEmail] = useState("");
  const [data, setData] = useState("");
  const [salvo, setSalvo] = useState(false);

  function salvar() {
    if (email && data) {
      setSalvo(true);
    } else {
      alert('Preencha todos os campos');
    }
  }

  function logout() {
    navigation.reset({ index: 0, routes: [{ name: 'Cadastro' }] });
  }

  return (
    <ImageBackground source={require('../img/aranha.png')} style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Perfil</Text>
        <Text style={styles.text}>Nome: {isAdmin ? 'Vivian' : usuario}</Text>

{isAdmin ? (
  <>
    {/* FOTO DO ADMIN - SÓ AQUI */}
    <Image 
      source={require('../img/perfil-admin.png')}
      style={styles.fotoPerfil}
    />
    
    <Text style={styles.text}>Email: {emailParam}</Text>
    <Text style={styles.text}>Data: {dataParam}</Text>
    <TouchableOpacity style={styles.buttonRed} onPress={logout}>
      <Text style={styles.buttonText}>Logout</Text>
    </TouchableOpacity>
  </>
) : (
          <>
            {!salvo ? (
              <>
                <TextInput
                  placeholder="Digite seu email"
                  placeholderTextColor="#ccc"
                  style={styles.input}
                  value={email}
                  onChangeText={setEmail}
                />
                <TextInput
                  placeholder="Digite sua data de nascimento"
                  placeholderTextColor="#ccc"
                  style={styles.input}
                  value={data}
                  onChangeText={setData}
                />
                <TouchableOpacity style={styles.buttonBlue} onPress={salvar}>
                  <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Text style={styles.text}>Email: {email}</Text>
                <Text style={styles.text}>Data: {data}</Text>
                <TouchableOpacity style={styles.buttonRed} onPress={logout}>
                  <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
              </>
            )}
          </>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  title: {
    color: '#fff',
    fontSize: 28,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#666',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    width: '80%',
    color: '#fff',
  },
  buttonBlue: {
    backgroundColor: '#2563EB',
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
  },
  buttonRed: {
    backgroundColor: '#CD1C18',
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  fotoPerfil: {
  width: 120,
  height: 120,
  borderRadius: 60,
  marginBottom: 20,
  borderWidth: 3,
  borderColor: '#2563EB'
},
});