import React, { useState } from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import firebaseApp from "../../firebase/config";
import styles from "./styles";
import { LoginScreenNavigationProp } from "../../navigations/AuthNavigator";
import CustomButton from "../../components/common/CustomButton/Button";

type LoginScreenProps = {
  navigation: LoginScreenNavigationProp;
  signIn: (token: string) => any;
};

const LoginScreen = ({ navigation, signIn }: LoginScreenProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [animating, setAnimating] = useState(false);

  const onFooterLinkPress = () => {
    navigation.navigate("Register");
  };

  const onLoginPress = () => {
    // refactor this and move into a separate service or in redux layer
    setAnimating(true);
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
        const usersRef = firebaseApp.firestore().collection("users");
        usersRef
          .doc(uid)
          .get()
          .then((firestoreDocument) => {
            if (!firestoreDocument.exists) {
              alert("User does not exist anymore.");
              return;
            }
            const user = firestoreDocument.data();
            setAnimating(false);
            signIn(uid);
          })
          .catch((error) => {
            setAnimating(false);
            alert(error);
          });
      })
      .catch((error) => {
        setAnimating(false);
        alert(error);
      });
  };

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" animating={animating} />
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%" }}
        keyboardShouldPersistTaps="always"
      >
        <Image style={styles.logo} />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setEmail(text)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <CustomButton onPress={() => onLoginPress()} text="Log In" />
        <View style={styles.footerView}>
          <Text style={styles.footerText}>
            Don't have an account?{" "}
            <Text onPress={onFooterLinkPress} style={styles.footerLink}>
              Sign up
            </Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default LoginScreen;
