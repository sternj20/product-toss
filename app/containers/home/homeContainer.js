import { connect } from 'react-redux';
import { Home } from '../../components/home/home';
import { itemsFetchData, upload } from '../../actions/items/items';
import { logoutUser } from '../../actions/session/actions';

const mapStateToProps = state => ({
	routes: state.routes,
	user: state.sessionReducer.user,
	items: state.itemReducer.items,
	recentUpload: state.itemReducer.recentUpload,
	hasErrored: state.itemsHasErrored,
	isLoading: state.itemsIsLoading
});

const mapDispatchToProps =  {
  logout: logoutUser,
  fetchData: itemsFetchData,
  upload
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);