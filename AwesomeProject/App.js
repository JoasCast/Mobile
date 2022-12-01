import { NavigationContainer } from '@react-navigation/native';
import RoutesCrud from './components/crud_firebase/RoutesCrud/RoutesCrud';

export default function App() {
  return (
    <NavigationContainer>
      <RoutesCrud></RoutesCrud>
    </NavigationContainer>
  );
}
