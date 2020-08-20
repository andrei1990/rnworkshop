import ProfileScreen from "./ProfileScreen";
import AuthActions from "../../redux/login/Actions";
import { connect } from "react-redux";

function mapDispatchToProps(dispatch: any) {
    return {
      signOut: () => {
        dispatch(AuthActions.signOut());
      },
    };
  }
  
  export default connect(null, mapDispatchToProps)(ProfileScreen);