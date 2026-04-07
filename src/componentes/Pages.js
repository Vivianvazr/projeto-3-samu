import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../pages/Home';
import Perfil from '../pages/Perfil'

const Drawer = createDrawerNavigator();

export default function Pages({ route }) {
  const usuario = route.params?.usuario;

  return (
    <Drawer.Navigator
      screenOptions={{
        // Fundo da gaveta
        drawerStyle: {
          backgroundColor: '#0F172A',
        },

        // Cor dos ícones/texto do header 
        headerTintColor: '#FFFFFF',

        // Fundo do header (topo)
        headerStyle: {
          backgroundColor: '#1E3A8A',
        },

        // Cor dos textos dentro da gaveta
        drawerLabelStyle: {
          color: '#E2E8F0',
        },

        // Item ativo (quando selecionado)
        drawerActiveBackgroundColor: '#2563EB', 
        drawerActiveTintColor: '#FFFFFF',

        // Item inativo
        drawerInactiveTintColor: '#94A3B8',
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        initialParams={{ usuario: usuario }}
      />

      <Drawer.Screen
        name="Texto"
        component={Texto}
        options={{
          title: 'Não clique',
        }}
      />
    </Drawer.Navigator>
  );
}