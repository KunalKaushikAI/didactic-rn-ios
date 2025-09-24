// UnbxdFacetScreen.js
import React, { useEffect } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';


/**
 * UnbxdFacetScreen
 * A screen that contains a button to add a price facet using Unbxd hook
 */
const UnbxdFacetScreen = () => {

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Unbxd Facet Test</Text>
      
    </View>
  );
};

export default UnbxdFacetScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 100,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
