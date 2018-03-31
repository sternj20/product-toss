import { connect } from 'react-redux';
import { Home } from '../../components/home/home';
import { itemsFetchData, upload, showSingleImageFromOther } from '../../actions/items/items';
import { logoutUser } from '../../actions/session/actions';

const mapStateToProps = state => ({
	routes: state.routes,
	user: state.sessionReducer.user,
	recentUpload: state.itemReducer.recentUpload,
	hasErrored: state.itemsHasErrored,
  	loading: state.sessionReducer.loading,
    followingImages: state.itemReducer.followingImages
});

const mapDispatchToProps =  {
  logout: logoutUser,
  fetchData: itemsFetchData,
  upload,
  showSingleImageFromOther
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);