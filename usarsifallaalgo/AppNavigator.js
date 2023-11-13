import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ContactListScreen from './ContactListScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ContactList"
        component={ContactListScreen}
        options={{
          title: 'Lista de Contactos',
          headerRight: () => (
            <Button
              onPress={() => {
                // Aquí puedes abrir el menú o navegar a una pantalla de opciones
              }}
              title="Menú"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
