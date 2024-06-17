import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../pages/Welcome";
import Signin from "../pages/Signin";
import Register from "../pages/Register";
import Forgout from "../pages/Forgout"
import Home from "../pages/Home";
import CadFazenda from "../pages/CadFazenda";
import Remove from "../pages/Remove";
import History from "../pages/History";
import Insert from "../pages/Insert";
import Calc from "../pages/Calc";
import Splash from "../pages/Splash/splash";

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (

        <Stack.Navigator>

            <Stack.Screen
                name="Splash"
                component={Splash}
                options={{ headerShown: false }}
            />
            
            <Stack.Screen
                name="Bem-vindo"
                component={Welcome}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Login"
                component={Signin}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Cadastre-se"
                component={Register}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Redefinir a senha"
                component={Forgout}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Cadastro de Fazenda"
                component={CadFazenda}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Ola, Sr(a) Pessoa"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Remover Fazendas"
                component={Remove}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Histórico"
                component={History}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Inserir dados"
                component={Insert}
                options={{ headerShown: false }}
            />
             <Stack.Screen
                name="Calculo Detalhado"
                component={Calc}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}