import { connect } from 'react-redux';
import { showSingleImageFromOther, hideModal, deleteImage, itemsFetchData } from "../../actions/items/items"
import { submitImageToContest, selectContest} from "../../actions/vote/vote"
import { followUser, unFollowUser} from "../../actions/social/social"

import { OtherUserImages } from "../../components/OtherUserImages/OtherUserImages"

const mapStateToProps = state => ({
    othersData: state.itemReducer.othersData,
    following: state.itemReducer.following,
    userID: state.itemReducer.userID,
    otherID: state.itemReducer.otherID,
    otherName: state.itemReducer.otherName, 
    following: state.itemReducer.following
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

export default connect(mapStateToProps, mapDispatchToProps)(OtherUserImages);
