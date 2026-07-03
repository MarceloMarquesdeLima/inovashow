import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DashboardScreen from '../screens/DashboardScreen';
import CidadeScreen from '../screens/CidadeScreen';
import ExpositorScreen from '../screens/ExpositorScreen';
import PessoaScreen from '../screens/PessoaScreen';
import VendedorScreen from '../screens/VendedorScreen';
import VisitaScreen from '../screens/VisitaScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Cidade" component={CidadeScreen} />
        <Stack.Screen name="Expositor" component={ExpositorScreen} />
        <Stack.Screen name="Pessoa" component={PessoaScreen} />
        <Stack.Screen name="Vendedor" component={VendedorScreen} />
        <Stack.Screen name="Visita" component={VisitaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}