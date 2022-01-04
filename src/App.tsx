import { useState } from 'react'
import {
    Col,
    Container,
    Pagination,
    PaginationItem,
    PaginationLink,
    Row,
} from 'reactstrap'
import Beers from './Layout/Beers'

function App() {
    const [page, setPage] = useState(1)

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Pagination className="container-fluid">
                        <PaginationItem>
                            <PaginationLink
                                previous
                                onClick={() =>
                                    setPage((prev) =>
                                        prev - 1 === 0 ? 1 : prev - 1
                                    )
                                }
                            />
                        </PaginationItem>
                        {Array(10)
                            .fill(null)
                            .map((_, i) => {
                                if (i == 0) return

                                return (
                                    <PaginationItem active={page == i}>
                                        <PaginationLink
                                            onClick={() => setPage(i)}
                                        >
                                            {i}
                                        </PaginationLink>
                                    </PaginationItem>
                                )
                            })}
                        <PaginationItem>
                            <PaginationLink
                                next
                                onClick={() =>
                                    setPage((prev) =>
                                        prev + 1 === 9 ? 9 : prev + 1
                                    )
                                }
                            />
                        </PaginationItem>
                    </Pagination>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Beers page={page} />
                </Col>
            </Row>
        </Container>
    )
}

export default App
