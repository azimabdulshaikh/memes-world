import {Link} from 'react-router-dom'
import {Button,Icon} from 'semantic-ui-react';
const button = (props) => (
    <div>
        <Button as ={Link} to="/add" circular >
            <Icon name="add"/>
        </Button>
    </div>

)
export default button;