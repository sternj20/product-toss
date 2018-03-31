import { connect } from 'react-redux';
import { showSingleImage, hideModal, deleteImage, itemsFetchData } from "../../actions/items/items"
import { submitImageToContest, selectContest} from "../../actions/vote/vote"
import { followUser} from "../../actions/social/social"

import { OtherUserImages } from "../../components/OtherUserImages/OtherUserImages"

const mapStateToProps = state => ({
    user: state.sessionReducer.user,
    userUploads: state.itemReducer.userUploads,
    contest: state.itemReducer.activeContest,
    imageToSubmit: state.itemReducer.imageToSubmit,
    singleImage: state.itemReducer.singleImage,
    modalVisible: state.itemReducer.modalVisible,
    loading: state.sessionReducer.loading,
    othersData: state.itemReducer.othersData,
    otherID: state.itemReducer.otherID

})
 
const mapDispatchToProps = {
    showSingleImage,
    submitImageToContest,
    hideModal,
    selectContest,
    fetchData: itemsFetchData,

}

export default connect(mapStateToProps, mapDispatchToProps)(OtherUserImages);
