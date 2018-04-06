import { connect } from 'react-redux';
import { Home } from '../../components/home/home';
import { itemsFetchData, upload, showSingleImageFromOther } from '../../actions/items/items';

const mapStateToProps = state => ({
	routes: state.routes,
	user: state.sessionReducer.user,
	recentUpload: state.itemReducer.recentUpload,
	hasErrored: state.itemsHasErrored,
  	loading: state.sessionReducer.loading,
    followingImages: state.itemReducer.followingImages,
    userID: state.itemReducer.userID,
    
});

const mapDispatchToProps =  {
  fetchData: itemsFetchData,
  upload,
  showSingleImageFromOther
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);