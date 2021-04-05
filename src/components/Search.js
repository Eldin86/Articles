import React, { useState, useEffect } from 'react'
import { FormControl, Form, InputGroup, Col, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { filterResult, listNews } from '../actions/newsActions'

import './Search.css'


const Search = ({ isFilter, error }) => {
    const [keyword, setKeyword] = useState('')
    const [filter, setFilter] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        let dispatchAction
        if (keyword.trim()) {
            //Trigger action every 800ms
            dispatchAction = setTimeout(() => {
                dispatch(filterResult(keyword, filter))
            }, 800);
        } else {
            dispatch(listNews())
        }
        return () => clearTimeout(dispatchAction)
    }, [keyword, filter, dispatch])

    const getTopHeadlinesHandler = () => {
        dispatch(listNews())
        setKeyword('')
    }

    return (
        <>
            <InputGroup className="top-searchbar mx-2 mx-md-0">
                <FormControl
                    placeholder="Search..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                />
                {keyword && (
                    <Form.Group>
                        <Form.Control as="select" className="p-0" value={filter} onChange={(e) => setFilter(e.target.value)}>
                            <option value="">Filter By</option>
                            <option value="Popularity">Popularity</option>
                            <option value="Relevance">Relevance</option>
                            <option value="Published date">Published date</option>
                        </Form.Control>
                    </Form.Group>
                )}
            </InputGroup>
            <Col sm={12}>
                {/* Toggling endpoint top-headlines or everything depend if we searach or not */}
                {isFilter && keyword ? <h2 className="my-4">Everything</h2> : <h2 className="my-4">Top Headlines</h2>}
                {/* Back button to top-headlines news*/}
                {isFilter && <Button className="my-3" onClick={getTopHeadlinesHandler}><i className="fas fa-arrow-left mr-2"></i>Go Back</Button>}
                {/* If error while searching, show button (everything endopoing) to display top-headlines news*/}
                {error && <Button className="my-3" onClick={getTopHeadlinesHandler}><i className="fas fa-arrow-left mr-2"></i>Go Back</Button>}
            </Col>
        </>
    )
}

export default Search
