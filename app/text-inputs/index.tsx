import ThemedCard from "@/presentation/shared/ThemeCard";
import ThemeIInputText from "@/presentation/shared/ThemeIInputText";
import ThemeView from "@/presentation/ThemeView";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

const isIOS = Platform.OS ==="ios"
const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  // <KeyboardAvoidingView behavior={isIOS ? "height" : "undefined"}></KeyboardAvoidingView>
  return (
     <KeyboardAvoidingView >
     <ScrollView>
     <ThemeView>
      <ThemedCard>
        <ThemeIInputText
          placeholder="Nombre Completo"
          autoCapitalize="words"
          autoCorrect={false}
          keyboardType="numeric"
          onChangeText={(text) => setForm({ ...form, name: text })}
        />

        <ThemeIInputText
          placeholder="Email"
          autoCorrect={false}
          keyboardType="email-address"
          onChangeText={(text) => setForm({ ...form, email: text })}
        />

        <ThemeIInputText
          placeholder="Email"
          autoCorrect={false}
          keyboardType="email-address"
          onChangeText={(text) => setForm({ ...form, email: text })}
        />

        <ThemeIInputText
          placeholder="Phone"
          autoCorrect={false}
          keyboardType="phone-pad"
          onChangeText={(text) => setForm({ ...form, phone: text })}
        />
      </ThemedCard>
    </ThemeView>
  </ScrollView>
  </KeyboardAvoidingView>
  );
 
 
};
export default TextInputsScreen;
