import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <WebView
      source={{ uri: "http://171.244.60.172:8069/vi/web/login" }}
      style={{ flex: 1, marginTop: 50 }}
    />
  );
}
