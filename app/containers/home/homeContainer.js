import { connect } from 'react-redux';
import { Home } from '../../components/home/home';
import { itemsFetchData, upload, toggleCollapse, showSingleImageFromOther } from '../../actions/items/items';
import { seeFriendsData } from "../../actions/social/social"

const mapStateToProps = state => ({
	routes: state.routes,
	user: state.sessionReducer.user,
	recentUpload: state.itemReducer.recentUpload,
	hasErrored: state.itemsHasErrored,
  	loading: state.sessionReducer.loading,
    followingImages: state.itemReducer.followingImages,
    userID: state.itemReducer.userID,
    isCollapsed: state.itemReducer.isCollapsed
    
});

const mapDispatchToProps =  {
  fetchData: itemsFetchData,
  upload,
  showSingleImageFromOther, 
  seeFriendsData,
  toggleCollapse
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);