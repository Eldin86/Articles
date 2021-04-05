import React from 'react'
import { Container, Row, Button, Col, CardDeck } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { loadMore } from '../actions/newsActions'
import Loader from '../components/Loader'
import Search from '../components/Search'
import CardItem from '../components/CardItem'
import Error from '../components/Error'

const NewsList = () => {
    const dispatch = useDispatch()

    const newsList = useSelector(state => state.newsList)
    const { loading, error, articles, pageSize, isFilter } = newsList

    const loadMoreHandler = () => {
        dispatch(loadMore())
    }
    return (
        <Container>
            <Row>
                <Search isFilter={isFilter} error={error} />
            </Row>
            <Row>
                {loading && <Loader />}
                {!loading && error && <Error error={error}/>}
                {
                    !loading && articles && <CardDeck>
                        {
                            articles.slice(0, pageSize).map((article, i) => {
                                return (
                                    //Indexes are not ideal as key
                                    <CardItem key={i} article={article} />
                                )
                            })
                        }

                    </CardDeck>
                }
            </Row>
            <Row>
                <Col className="text-center">
                    {!loading && pageSize < articles.length && !error && <Button onClick={loadMoreHandler}>Load More</Button>}
                </Col>
            </Row>
        </Container>
    )
}

export default NewsList
