import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
    Col,
} from 'reactstrap'

interface IBeer {
    id: number
    name: string
    tagline: string
    description: string
    image: string
}

function Beer({ name, description, tagline, image }: IBeer) {
    return (
        <Col sm={3} style={{ marginTop: '1rem' }}>
            <Card style={{ height: '330px', overflow: 'hidden' }}>
                <CardImg
                    top
                    width="100%"
                    height={'200px'}
                    src={image}
                    alt={name}
                    style={{ objectFit: 'contain' }}
                />
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardSubtitle>{tagline}</CardSubtitle>
                    <Button className={'mt-2'}>See more</Button>
                </CardBody>
            </Card>
        </Col>
    )
}

export default Beer
