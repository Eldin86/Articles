import React from 'react'
import { Card } from 'react-bootstrap'
import Placeholder from '../assets/placeholder.jpg'
import { Link } from 'react-router-dom'

import './CardItem.css'

const CardItem = ({ article }) => {
    return (
        <>
            <Card style={{ minWidth: "18rem", marginBottom: "2rem", boxShadow: "0 4px 2px 0px grey" }}>
                <div className="img-overlay">
                    <Card.Img src={article.urlToImage || Placeholder} />
                    {article.title && <Card.Title>{article.title}</Card.Title>}
                </div>
                <Card.Body>

                    { article.description && <Card.Header className="mb-2">{article.description}</Card.Header>}
                    <Link to={{
                        pathname: '/article',
                        state: { article }
                    }}>READ FULL ARTICLE</Link>
                </Card.Body>
            </Card>
        </>
    )
}

export default CardItem
