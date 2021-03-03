import Card from '../../../Shared/Card';
import CardImage from '../../../Shared/CardImage';

const Follower = ({ follower }) => {
    return (
        <li className="col-sm-4">
            <Card image={
                <CardImage src={follower.avatar_url} alt={follower.login}/>
            }>
                <h4 className="h4">{follower.login}</h4>
            </Card>
        </li>
    );
};

export default Follower;
