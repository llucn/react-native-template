import React from 'react';
import { StyleSheet, ScrollView, View, Alert, Text } from 'react-native';
import { Formio } from 'react-native-formio';
import startCenterJson from '../configs/pages/startCenter.json';
import testPageJson from '../configs/pages/testPage.json';
import simplePageJson from '../configs/pages/simplePage.json';

export default function Page() {
  return (
    <View style={styles.container}>
      <Formio 
        src={simplePageJson} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  text: {
    marginTop: 30,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
});