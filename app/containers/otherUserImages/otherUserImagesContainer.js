import { connect } from 'react-redux';
import { showSingleImageFromOther, hideModal, deleteImage, itemsFetchData } from "../../actions/items/items"
import { submitImageToContest, selectContest} from "../../actions/vote/vote"
import { followUser, unFollowUser} from "../../actions/social/social"

import { otherUserImages } from "../../components/otherUserImages/otherUserImages"

const mapStateToProps = state => ({
    othersData: state.itemReducer.othersData,
    userID: state.itemReducer.userID,
    otherID: state.itemReducer.otherID,
    otherName: state.itemReducer.otherName, 
    followingBool: state.itemReducer.followingBool,
    otherFollowing: state.itemReducer.otherFollowing,
    otherFollowers: state.itemReducer.otherFollowers
})
 
const mapDispatchToProps = {
    showSingleImageFromOther,
    submitImageToContest,
    hideModal,
    selectContest,
    fetchData: itemsFetchData,  
    followUser,
    unFollowUser,

}

export default connect(mapStateToProps, mapDispatchToProps)(otherUserImages);
