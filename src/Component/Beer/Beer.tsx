import { useState } from 'react'
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Col,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
} from 'reactstrap'

interface IBeer {
    id: number
    name: string
    tagline: string
    description: string
    image: string | null
    foodPairing?: string[]
}

function Beer({ name, description, tagline, image, foodPairing }: IBeer) {
    const [displayDesc, setDisplayDesc] = useState(false)

    const closePopin = () => setDisplayDesc(false)

    return (
        <Col sm={6} className="mt-2">
            <Card className="card-inline" onClick={() => setDisplayDesc(true)}>
                <CardImg
                    top
                    width="100px"
                    height={'150px'}
                    src={
                        image ||
                        'https://www.nigiloc.com/images/image-not-found.png'
                    }
                    alt={name}
                    style={{ objectFit: 'contain' }}
                />
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardSubtitle>{tagline}</CardSubtitle>

                    <div className="card-tags-wrapper">
                        {foodPairing?.map((pair, i) => {
                            return (
                                <small className="card-tags" key={`pair-${i}`}>
                                    {pair}
                                </small>
                            )
                        })}
                    </div>
                </CardBody>
            </Card>

            <Modal isOpen={displayDesc} toggle={closePopin}>
                <ModalHeader>{name}</ModalHeader>
                <ModalBody>
                    {description}

                    <br /> <br />
                    Ingredients : {}
                </ModalBody>
                <ModalFooter className='justify-content-between'>
                    <div className="card-tags-wrapper">
                        {foodPairing?.map((pair, i) => {
                            return (
                                <small className="card-tags" key={`pair-${i}`}>
                                    {pair}
                                </small>
                            )
                        })}
                    </div>
                    <br />

                    <Button onClick={closePopin}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </Col>
    )
}

export default Beer
