import React ,{ Component } from "react";
import { SafeAreaView, TouchableOpacity, Text } from "react-native";
import AuthActions from "../../redux/login/Actions";
import { connect } from "react-redux";

type ProfileProps = {
    signOut: () => any
 };
 
 class ProfileScreen extends Component<ProfileProps> {
 
 
   render() {
     return (
       <SafeAreaView>
         <TouchableOpacity onPress={() => this.props.signOut()}>
           <Text>Sign Out</Text>
         </TouchableOpacity>
       </SafeAreaView>
     );
   }
 
 }
 
 function mapDispatchToProps(dispatch: any) {
   return {
     signOut: () => {
       dispatch(AuthActions.signOut());
     },
   };
 }
 
 const Profile = connect(null, mapDispatchToProps)(ProfileScreen);
 
 export default Profile