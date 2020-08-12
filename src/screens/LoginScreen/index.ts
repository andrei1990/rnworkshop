import AuthActions from "../../redux/login/Actions";
import { connect } from "react-redux";
import LoginScreen from "./LoginScreen";

function mapDispatchToProps(dispatch: any) {
    return {
      signIn: (token: string) => {
        dispatch(AuthActions.userLoggedIn(token));
      },
    };
  }

export default connect(null, mapDispatchToProps)(LoginScreen);