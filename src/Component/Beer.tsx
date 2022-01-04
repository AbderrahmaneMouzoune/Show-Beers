import { useState } from 'react'
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
    Col,
    CardFooter,
    Badge,
} from 'reactstrap'

interface IBeer {
    id: number
    name: string
    tagline: string
    description: string
    image: string
    FoodPairing?: string[]
}

function Beer({ name, description, tagline, image, FoodPairing }: IBeer) {

  const [displayDesc, setDisplayDesc] = useState(false);

  return (
      <Col sm={3} style={{ marginTop: '1rem' }}>
          <Card style={{ height: '350px', overflow: 'hidden' }}>
              <CardImg
                  top
                  width="100%"
                  height={'150px'}
                  src={image}
                  alt={name}
                  style={{ objectFit: 'contain' }}
              />
              <CardBody>
                  <CardTitle>{name}</CardTitle>
                  <CardSubtitle>{tagline}</CardSubtitle>
                  <Button className={'mt-2'}>See more</Button>
              </CardBody>
              <CardFooter>
                {FoodPairing?.map((pair, i) => {
                  return <Badge key={`badge-${i}`} className='m-1'>{pair}</Badge>
                })

                }
              </CardFooter>
          </Card>
      </Col>
  )
}

export default Beer
