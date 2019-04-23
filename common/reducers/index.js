import { combineReducers } from 'redux';
import UserReducer from '../../profile/UserReducer';
import AuthenticationReducer from "../../login/AuthenticationReducer";
import RegistrationReducer from "../../login/RegistrationReducer";
import UserJobsReducer from "../../dashboard/UserJobsReducer";
import FormReducer from "./FormReducer";
import JobBoardReducer from "../../joblisting/JobBoardReducer";
import SitterSearchReducer from "../../searchsitter/SitterSearchReducer";
import UserReviewsReducer from "../../profile/UserReviewsReducer";
import ViewExternalUserReducer from "../../profile/ViewExternalUserReducer";
import toasts from "./toasts";

export default combineReducers({
    Auth: AuthenticationReducer,
    Register: RegistrationReducer,
    User: UserReducer,
    Jobs: UserJobsReducer,
    Form: FormReducer,
    SitterList: SitterSearchReducer,
    JobBoard: JobBoardReducer,
    Reviews: UserReviewsReducer,
    ExternalUser: ViewExternalUserReducer,
    toasts,
});