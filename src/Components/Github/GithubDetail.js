import useGithubData from '../../hooks/useGithubData';
import Spinner from '../../Shared/Spinner';
import Alert from '../../Shared/Alert';
import GithubFollowers from './Followers/GithubFollowers';
import Card from '../../Shared/Card';

const GithubDetail = ({ userName }) => {
    const { data, error, isLoading } = useGithubData(userName);

    if (!userName || userName === '') {
        return null;
    }

    if (isLoading) {
        return <Spinner />;
    }

    if (error) {
        return <Alert color="danger">{error}</Alert>
    }

    return (
        <Card title={data.name ? data.name : `${data.id}`}
              className="mt-4">
            {data.email && <p>{data.email}</p>}
            <GithubFollowers userName={userName}/>
        </Card>
    );
};

export default GithubDetail;
