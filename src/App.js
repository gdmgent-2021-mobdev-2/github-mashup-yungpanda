import { useState } from 'react';
import Container from './Shared/Container';
import SearchForm from './Components/SearchForm';
import GithubDetail from './Components/Github/GithubDetail';

function App() {
    const [userName, setUserName] = useState('');

    return (
        <Container>
            <SearchForm
                query={userName}
                onSubmit={(query) => setUserName(query)}
            />
            <GithubDetail userName={userName} />
        </Container>
    );
}

export default App;
