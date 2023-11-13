import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import contacts from '../contacts';

function ContactListScreen({ navigation }) {
  const handleContactPress = (contact) => {
    navigation.navigate('ChatScreen', { contact });
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text
            style={styles.contactItem}
            onPress={() => handleContactPress(item)}
          >
            {item.name}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  contactItem: {
    fontSize: 18,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'yellow',
  },
});

export default ContactListScreen;
