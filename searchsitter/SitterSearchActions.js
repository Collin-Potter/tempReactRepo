// import { SEARCH_CHANGED } from '../common/constants/FormInputConstants';
import { searchService } from './SearchSitterService';
import { serviceConstants } from '../common/constants/ServiceConstants';

export const searchChanged = ({type, value}, user) => {
    console.log("search changed", type, value)
    if (value === "")
        return fetchAllSitters(user)
    else
        return fetchSittersBySearch(user, value)

};

export const userActions = {
    fetchAllSitters,
    fetchSittersBySearch,
};

function fetchAllSitters(user) {
    return (dispatch) => {
        return searchService.fetchAll(user)
            .then( response => {
                    let sittersList = response.data;
                    dispatch(success(sittersList));
                },
                error => {
                    dispatch(failure(error.toString()));
                    //dispatch(alertActions.error(error.toString()));
                })
    };
    function success(sittersList) { return { type: serviceConstants.FETCH_SITTERS_BYSTRING_SUCCESS, sittersList } }
    function failure(error) { return { type: serviceConstants.FETCH_SITTERS_BYSTRING_FAILURE, error } }
}

function fetchSittersBySearch(user, query) {
    return (dispatch) => {
            return searchService.fetchBySearch(user, query)
            .then( response => {
                    let sittersList = response.data;
                    dispatch(success(sittersList));
                },
                error => {
                    dispatch(failure(error.toString()));
                    //dispatch(alertActions.error(error.toString()));
                })
    };
    function success(sittersList) { return { type: serviceConstants.FETCH_SITTERS_BYSTRING_SUCCESS, sittersList } }
    function failure(error) { return { type: serviceConstants.FETCH_SITTERS_BYSTRING_FAILURE, error } }
}