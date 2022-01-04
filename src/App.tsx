import axios from 'axios'
import { useEffect, useState } from 'react'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'
import PaginationComponent from './Component/Pagination/PaginationComponent'
import SearchBar from './Component/SearchBar/Search'
import Beers from './Layout/Beers/Beers'

function App() {
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('')
    const [beers, setBeers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    // Handle when we change page
    useEffect(() => {
        setIsLoading(true)
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

    useEffect(() => {
        if (!search.match(/_+/gm)) return

        setIsLoading(true)

        axios
            .get(
                `https://api.punkapi.com/v2/beers?beer_name=${search}&per_page=80`
            )
            .then(function (response) {
                setBeers(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
            .then(function () {
                setIsLoading(false)
            })
    }, [search])

    return (
        <Container fluid className="mt-2">
            <Row>
                <Col sm={12}>
                    <h1 className="text-center m-4 text-primary">
                        {' '}
                        <span className="text-secondary">B</span>row
                        <span className="text-secondary">B</span>rew
                    </h1>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col sm={11}>
                    <Card>
                        <CardHeader>
                            <SearchBar
                                value={formatSearchForHuman(search)}
                                onChange={(e) =>
                                    setSearch(
                                        formatSearchForApi(
                                            e.currentTarget.value
                                        )
                                    )
                                }
                            />
                        </CardHeader>

                        <CardBody>
                            {/* Filters */}
                            <div className="text-center"></div>

                            <div className="tab-content">
                                <Row>
                                    <Col sm={12}>
                                        <Beers
                                            beers={beers}
                                            search={formatSearchForHuman(
                                                search
                                            )}
                                        />
                                    </Col>
                                    <Col sm={12} className="mt-3">
                                        <PaginationComponent
                                            pages={16}
                                            actual={page}
                                            goToPage={setPage}
                                        />
                                    </Col>
                                </Row>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )

    function updateSearch() {}
}

export function formatSearchForApi(word: string): string {
    return word.replace(' ', '_')
}

export function formatSearchForHuman(word: string): string {
    return word.replace('_', ' ')
}

export default App
