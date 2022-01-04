import './PaginationComponent.scss'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

interface IPagination {
    pages: number
    actual: number
    goToPage(page: number): void
}

function PaginationComponent({ pages, actual, goToPage }: IPagination) {
    return (
        <Pagination className="container-fluid">
            <PaginationItem>
                <PaginationLink
                    previous
                    onClick={() => goToPage(actual - 1)}
                    disabled={actual - 1 === 0}
                >
                    Previous
                </PaginationLink>
            </PaginationItem>
            {Array(pages)
                .fill(null)
                .map((_, i) => {
                    if (i == 0) return

                    return (
                        <PaginationItem active={actual == i}>
                            <PaginationLink onClick={() => goToPage(i)}>
                                {i}
                            </PaginationLink>
                        </PaginationItem>
                    )
                })}
            <PaginationItem>
                <PaginationLink
                    next
                    onClick={() => goToPage(actual + 1)}
                    disabled={actual === pages - 1}
                >
                    Next
                </PaginationLink>
            </PaginationItem>
        </Pagination>
    )
}

export default PaginationComponent
