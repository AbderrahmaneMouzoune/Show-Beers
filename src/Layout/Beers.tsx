import axios from 'axios'
import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Beer from '../Component/Beer'

interface IBeers {
    page: number
}

function Beers({ page }: IBeers) {
    const [beers, setBeers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true);

        axios
            .get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=5`)
            .then(function (response) {
                setBeers(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
            .then(function () {
                setIsLoading(false)
            })
    }, [page])

    return (
        <Container fluid>
            <Row>
                {isLoading ?
                    (
                        <p>Loading...</p>
                    )
                    :
                    (
                        beers.map(({ id, name, tagline, description, image_url, food_pairing }) => {
                            return (
                                <Beer
                                    id={id}
                                    name={name}
                                    tagline={tagline}
                                    description={description}
                                    image={image_url}
                                    FoodPairing={food_pairing}
                                />
                            )
                        })
                    )
                }
            </Row>
        </Container>
    )
}

export default Beers
