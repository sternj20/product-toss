import { connect } from 'react-redux';
import { showSingleImageFromOther, hideModal, deleteImage, itemsFetchData } from "../../actions/items/items"
import { submitImageToContest, selectContest} from "../../actions/vote/vote"
import { followUser, unFollowUser} from "../../actions/social/social"

import { otherUserImages } from "../../components/otherUserImages/otherUserImages"

const mapStateToProps = state => ({
    userID: state.itemReducer.userID,
    othersData: state.socialReducer.othersData,
    otherID: state.socialReducer.otherID,
    otherName: state.socialReducer.otherName, 
    followingBool: state.socialReducer.followingBool,
    otherFollowing: state.socialReducer.otherFollowing,
    otherFollowers: state.socialReducer.otherFollowers
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
