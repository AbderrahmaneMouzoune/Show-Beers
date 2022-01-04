import axios from 'axios'
import { useEffect, useState } from 'react'
import { Container, Row } from 'reactstrap'
import { formatSearchForHuman } from '../../App'
import Beer from '../../Component/Beer/Beer'

interface IBeers {
    beers: any[]
    search: string
}

function Beers({ beers, search }: IBeers) {
    return (
        <Container fluid>
            <Row>
                {!!search && (
                    <h6 className="mb-2">
                        Search result for "{search}"{' '}
                        {`(${beers.length} results)`}
                    </h6>
                )}
                {beers.map(
                    ({
                        id,
                        name,
                        tagline,
                        description,
                        image_url,
                        food_pairing,
                    }) => {
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
                    }
                )}
            </Row>
        </Container>
    )
}

export default Beers
