import axios from 'axios'

import {
    ARTICLES_LIST_REQUEST,
    ARTICLES_LIST_SUCCESS,
    ARTICLES_LIST_FAIL,
    ARTICLES_LOAD_MORE,
    RESULT_FILTER_REQUEST,
    RESULT_FILTER_SUCCESS,
    RESULT_FILTER_FAIL
} from '../constants/newsConstants'

export const listNews = () => async (dispatch) => {
    try {
        dispatch({
            type: ARTICLES_LIST_REQUEST
        })

        const { data } = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=100&apiKey=916887ffa95b429f87140ed3b7cf985c`)

        dispatch({
            type: ARTICLES_LIST_SUCCESS,
            payload: data.articles
        })
    } catch (error) {
        dispatch({
            type: ARTICLES_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const loadMore = () => async (dispatch) => {
    dispatch({
        type: ARTICLES_LOAD_MORE
    })
}

export const filterResult = (keyword, filter) => async (dispatch) => {
    try {
        dispatch({
            type: RESULT_FILTER_REQUEST
        })

        const { data } = await axios.get(`https://newsapi.org/v2/everything?q=${keyword}&sortBy=${filter}&pageSize=100&apiKey=916887ffa95b429f87140ed3b7cf985c`)
        dispatch({
            type: RESULT_FILTER_SUCCESS,
            payload: data.articles
        })
    } catch (error) {
        dispatch({
            type: RESULT_FILTER_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}