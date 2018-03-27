import { connect } from 'react-redux';
import { showSingleImage, hideModal, deleteImage } from "../../actions/items/items"
import { submitImageToContest, selectContest} from "../../actions/vote/vote"
import { userImages } from "../../components/userImages/userImages"

const mapStateToProps = state => ({
    user: state.sessionReducer.user,
    userUploads: state.itemReducer.userUploads,
    contest: state.itemReducer.activeContest,
    imageToSubmit: state.itemReducer.imageToSubmit,
    singleImage: state.itemReducer.singleImage,
    modalVisible: state.itemReducer.modalVisible
})

const mapDispatchToProps = {
    showSingleImage,
    submitImageToContest,
    hideModal,
    selectContest
}

export default connect(mapStateToProps, mapDispatchToProps)(userImages);
