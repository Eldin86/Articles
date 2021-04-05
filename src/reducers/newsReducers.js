import {
    ARTICLES_LIST_REQUEST,
    ARTICLES_LIST_SUCCESS,
    ARTICLES_LIST_FAIL,
    ARTICLES_LOAD_MORE,
    RESULT_FILTER_REQUEST,
    RESULT_FILTER_SUCCESS,
    RESULT_FILTER_FAIL
} from '../constants/newsConstants'


export const newsListReducer = (state = { articles: [], pageSize: 20, isFilter: false }, action) => {
    switch (action.type) {
        case ARTICLES_LIST_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case ARTICLES_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                articles: action.payload,
                isFilter: false,
            }

        case ARTICLES_LIST_FAIL:
            return {
                loading: false,
                articles: [],
                error: action.payload
            }

        case ARTICLES_LOAD_MORE:
            return {
                ...state,
                pageSize: state.pageSize + 20
            }

        case RESULT_FILTER_REQUEST:
            return {
                ...state,
                loading: true,
                pageSize: 0,
                isFilter: true,
                error: null
            }
        case RESULT_FILTER_SUCCESS:
            return {
                ...state,
                loading: false,
                articles: action.payload,
                pageSize: state.pageSize + 20,
                isFilter: true
            }
        case RESULT_FILTER_FAIL:
            return {
                loading: false,
                articles: [],
                error: action.payload
            }
        default:
            return state
    }
}