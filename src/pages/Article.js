import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Placeholder from '../assets/placeholder.jpg'

import './Article.css';

const NewsList = (state) => {
    const date = new Date(state.location.state.article.publishedAt).toString()
    const formatedDate = new Date(date).toLocaleString('en-US', { hour12: true })

    return (
        <Container>
            <Row>
                <Col cm={12}><Link className="article-back-btn" to="/"><i className="fas fa-arrow-left mr-2"></i>Go Back</Link></Col>
                <Card className="my-4 card-item">
                    {state.location.state.article.title && <Card.Header as="h2"> {state.location.state.article.title} </Card.Header>}
                    <Card.Img variant="top" src={state.location.state.article.urlToImage || Placeholder} />
                    <Card.Body>
                        <Card.Text>
                            {state.location.state.article.source.name && <small>Source: {state.location.state.article.source.name}</small>}
                        </Card.Text>
                        {state.location.state.article.description && <Card.Header as="h5">{state.location.state.article.description}</Card.Header>}
                        {state.location.state.article.content && <Card.Text>{state.location.state.article.content}</Card.Text>}
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-between">
                        {formatedDate && <small className="text-muted">Published at: {formatedDate}</small>}
                        {state.location.state.article.author && <small className="text-muted">Author: {state.location.state.article.author}</small>}
                    </Card.Footer>
                </Card>
                <Col cm={12}><Link className="article-back-btn" to="/"><i className="fas fa-arrow-left mr-2"></i>Go Back</Link></Col>
            </Row>

        </Container>
    )
}

export default NewsList
