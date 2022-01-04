import { Container, Row } from 'reactstrap'
import { ApiBeer } from '../../Api'
import Beer from '../../Component/Beer/Beer'

interface IBeers {
    beers: ApiBeer[]
    search: string
}

function Beers({ beers, search }: IBeers) {
    return (
        <Container fluid>
            <Row>
                {!!search && (
                    <h6 className="mb-2">
                        Search result for &quot;{search}&quot;{' '}
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
                                key={`beer-${id}`}
                                id={id}
                                name={name}
                                tagline={tagline}
                                description={description}
                                image={image_url}
                                foodPairing={food_pairing}
                            />
                        )
                    }
                )}
            </Row>
        </Container>
    )
}

export default Beers
