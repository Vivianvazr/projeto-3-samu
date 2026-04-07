import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";  // ← adiciona isso
import Perfil from "../pages/Perfil";      // ← adiciona isso
import DrawerRoutes from "./drawer.routes";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Cadastro" 
        component={Cadastro}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ headerShown: false }}
      />
      
      {/* ← ADICIONA ESSA LINHA */}
      <Stack.Screen 
        name="Perfil" 
        component={Perfil}
        options={{ headerShown: false }}
      />

      <Stack.Screen 
        name="App"
        component={DrawerRoutes}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}