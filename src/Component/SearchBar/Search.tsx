import { Form, FormGroup, Label } from 'reactstrap'
import './Search.scss'

interface ISearchBar {
    value?: string
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
}

function SearchBar({ value, onChange }: ISearchBar) {
    return (
        <Form className="m-0 form">
            <FormGroup className="search-wrapper">
                <input
                    id="searchbar"
                    className="form-control-plaintext search-bar"
                    type="search"
                    placeholder="Trashy blonde..."
                    onChange={onChange}
                    value={value}
                />
                <span className="btn btn-primary input-group-text">Search</span>
            </FormGroup>
        </Form>
    )
}

export default SearchBar
