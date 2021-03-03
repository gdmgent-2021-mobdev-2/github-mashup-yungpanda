import useGithubData from '../../../hooks/useGithubData';
import Spinner from '../../../Shared/Spinner';
import Alert from '../../../Shared/Alert';
import Follower from './Follower';


const GithubFollowers = ({ userName }) => {
    const { data, error, isLoading } = useGithubData(userName, '/followers');

    let content;

    if (isLoading) {
        content = <Spinner/>;
    } else if (error) {
        content = <Alert color="danger">{error}</Alert>;
    } else {
        content = (
            <div className="row">
                {data.map((follower) => (
                    <Follower key={follower.id} follower={follower} />
                ))}
            </div>
        )
    }

    return (
        <div>
            <h3 className="h3">Followers</h3>
            {content}
        </div>
    );

};

export default GithubFollowers;
