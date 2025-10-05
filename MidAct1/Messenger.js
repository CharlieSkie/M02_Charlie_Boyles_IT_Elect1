import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";

export default function Messenger() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const flatListRef = useRef(null);

  const sendMessage = () => {
    if (text.trim() === "") return;
    setMessages((prev) => [...prev, { id: Date.now().toString(), text }]);
    setText("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {/* Message list */}
        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.message}>
              <Text>{item.text}</Text>
            </View>
          )}
          onContentSizeChange={() =>
            flatListRef.current.scrollToEnd({ animated: true })
          }
        />

        {/* Input row */}
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Type a message"
            value={text}
            onChangeText={setText}
          />
          <TouchableOpacity style={styles.sendBtn} onPress={sendMessage}>
            <Text style={styles.sendText}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  message: {
    padding: 10,
    marginVertical: 4,
    backgroundColor: "#eee",
    borderRadius: 6,
    alignSelf: "flex-start", // messages show on left for now
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    padding: 8,
    marginRight: 8,
  },
  sendBtn: {
    backgroundColor: "#007bff",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    justifyContent: "center",
  },
  sendText: { color: "#fff", fontWeight: "600" },
});
