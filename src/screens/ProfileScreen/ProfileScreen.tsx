import React, { Component } from "react";
import { SafeAreaView, View } from "react-native";
import CustomButton from "../../components/common/Button";
import styles from "./styles";

type ProfileProps = {
  signOut: () => any;
};

class ProfileScreen extends Component<ProfileProps> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.bottom}>
          <CustomButton style={styles.button}  onPress={() => this.props.signOut()}   text='Sign Out' />
        </View>
      </SafeAreaView>
    );
  }
}

export default ProfileScreen;
