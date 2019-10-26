import { connect } from 'react-redux';
import Game from '../components/Game';

const mapStateToProps = state => ({
  username: state.user.data.username
});

export default connect(mapStateToProps)(Game);
