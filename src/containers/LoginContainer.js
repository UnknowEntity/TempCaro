import { connect } from 'react-redux';
import { getUser, getToken } from '../actions';
import Login from '../components/Login';

const mapDispatchToProps = dispatch => ({
  handleSubmit: data => {
    console.log(data);
    return fetch(`/user/login`, {
      method: 'post',
      body: {
        email: data.email,
        password: data.password
      },
      redirect: 'follow'
    })
      .then(
        response => response.json(),
        // eslint-disable-next-line no-console
        error => console.log('An error occurred.', error)
      )
      .then(res => {
        dispatch(getUser(res.user));
        dispatch(getToken(res.token));
      });
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
