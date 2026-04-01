import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import Animated, {
  FadeIn,
  FadeInDown,
} from "react-native-reanimated";

export default function LoginScreen({ navigation }) {
  const [phone, setPhone] = useState("");

  const handleLogin = () => {
    navigation.replace("Dashboard");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* HEADER */}
      <Animated.View entering={FadeIn.duration(600)}>
        <Text style={styles.title}>Welcome back</Text>
        <Text style={styles.subtitle}>
          Continue to GigShield AI
        </Text>
      </Animated.View>

      {/* INPUT */}
      <Animated.View entering={FadeInDown.delay(200)}>
        <Text style={styles.label}>Phone Number</Text>

        <TextInput
          value={phone}
          onChangeText={setPhone}
          placeholder="Enter your phone"
          placeholderTextColor="#94A3B8"
          keyboardType="phone-pad"
          style={styles.input}
        />
      </Animated.View>

      {/* BUTTON */}
      <Animated.View entering={FadeInDown.delay(400)}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
          activeOpacity={0.9}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* FOOTER */}
      <Animated.View entering={FadeIn.delay(600)}>
        <Text style={styles.footer}>
          Secure login powered by AI
        </Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC", // ✅ LIGHT
    paddingHorizontal: 20,
    paddingTop: 100,
  },
  title: {
    color: "#0F172A",
    fontSize: 28,
    fontWeight: "600",
  },
  subtitle: {
    color: "#64748B",
    marginTop: 8,
    fontSize: 14,
  },
  label: {
    color: "#64748B",
    marginTop: 40,
    marginBottom: 6,
    fontSize: 13,
  },
  input: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 16,
    color: "#0F172A",

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  button: {
    backgroundColor: "#6366F1",
    padding: 16,
    borderRadius: 16,
    marginTop: 30,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  footer: {
    marginTop: 30,
    textAlign: "center",
    color: "#94A3B8",
    fontSize: 12,
  },
});