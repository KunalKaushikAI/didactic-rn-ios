import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Button, Platform, NativeModules } from 'react-native';

import UnbxdSearchProvider from './src/UnbxdSearchProvider';
import UnbxdFacetScreen from './src/UnbxdFacetScreen';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ padding: 40 }}>
      <Button
        title="Facet Screen"
        onPress={() => {
          navigation.navigate('UnbxdFacet');
        }}
      />
    </View>
  );
}

const App = () => {
  useEffect(() => {
    console.log("hello unbxd......");
    
  }, []);

  return (
    <UnbxdSearchProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="UnbxdFacet" component={UnbxdFacetScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </UnbxdSearchProvider>
  );
};

export default App;
