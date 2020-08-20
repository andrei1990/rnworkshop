import { connect } from "react-redux";
import AuthActions from "../../redux/login/Actions";
import RegistrationScreen from "./RegistrationScreen";

function mapDispatchToProps(dispatch: any) {
    return {
      signIn: (token: string) => {
        dispatch(AuthActions.userLoggedIn(token));
      },
    };
  }

  export default connect(null, mapDispatchToProps)(RegistrationScreen);