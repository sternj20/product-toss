import { connect } from 'react-redux';
import { LoginFormComponent } from '../../components/auth/LoginForm/loginForm';
import { loginUser, loginDemoUser, restoreSession } from '../../actions/session/actions';
import { itemsFetchData} from '../../actions/items/items';

const mapStateToProps = state => ({
  restoring: state.sessionReducer.restoring,
  loading: state.sessionReducer.loading,
  user: state.sessionReducer.user,
  error: state.sessionReducer.error,
  logged: state.sessionReducer.logged
});

const mapDispatchToProps = {
  login: loginUser,
  loginDemoUser,
  fetchData: itemsFetchData,
  restore: restoreSession
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormComponent);
