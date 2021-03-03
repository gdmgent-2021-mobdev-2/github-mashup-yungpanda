import { useState } from 'react';
import Button from '../Shared/Button';
import Input from '../Shared/Input';

const SearchForm = ({ query = '', onSubmit }) => {
    const [search, setSearch] = useState(query);

    const handleInput = (e) => {
        setSearch(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(search);
    };

    const handleReset = () => {
        setSearch('');
        // submit empty value.
        // We can't use handleSubmit, because `search` has not been changed yet
        onSubmit('');
    };

    return (
        <section className="mt-4">
            <h1 className="h1">Zoeken op Github</h1>
            <form className="form-inline" onSubmit={handleSubmit}>
                <Input type="search" name="search" value={search} onChange={handleInput}/>
                <Button type="submit">Zoek</Button>
                <Button color="danger" onClick={handleReset}>Reset</Button>
            </form>
        </section>
    );
};

export default SearchForm;
