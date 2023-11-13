import React, { Component } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      newMessage: '',
    };
  }

  handleInputChange = (text) => {
    this.setState({ newMessage: text });
  };

  handleSendMessage = () => {
    if (this.state.newMessage) {
      const newMessages = [...this.state.messages, { text: this.state.newMessage, user: 'me' }];
      this.setState({ messages: newMessages, newMessage: '' });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.messages}
          keyExtractor={(message, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={item.user === 'me' ? styles.myMessage : styles.theirMessage}>
              <Text style={styles.messageText}>{item.text}</Text>
            </View>
          )}
        />
        
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Escribe un mensaje..."
            value={this.state.newMessage}
            onChangeText={this.handleInputChange}
          />
          <Text style={styles.sendButton} onPress={this.handleSendMessage}>
            Enviar
          </Text>
        </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
  },
  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: 'blue',
    borderRadius: 10,
    margin: 5,
    padding: 10,
  },
  theirMessage: {
    alignSelf: 'flex-start',
    backgroundColor: 'red',
    borderRadius: 10,
    margin: 5,
    padding: 10,
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  sendButton: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ChatScreen;