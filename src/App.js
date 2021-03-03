import { useState } from 'react';
import Container from './Components/Shared/Container';
import SearchForm from './Components/Pages/SearchForm';
import GithubDetail from './Components/Pages/Github/GithubDetail';

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
