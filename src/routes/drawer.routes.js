import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../pages/Home";
import Perfil from "../pages/Perfil";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes({ route }) {
  const usuario = route.params?.usuario;
  const isAdmin = route.params?.isAdmin || false;
  const email = route.params?.email || "";
  const dataNasc = route.params?.data || "";

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#0F172A",
        },
        headerStyle: {
          backgroundColor: "#1E3A8A",
        },
        headerTintColor: "#fff",
        drawerActiveBackgroundColor: "#2563EB",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#94A3B8"
      }}
    >
      <Drawer.Screen 
        name="Home" 
        component={Home}
        initialParams={{ usuario }}
      />

      <Drawer.Screen 
        name="Perfil" 
        component={Perfil}
        initialParams={{ 
          usuario: usuario || "",
          isAdmin: isAdmin,
          email: email,
          data: dataNasc
        }}
      />
    </Drawer.Navigator>
  );
}