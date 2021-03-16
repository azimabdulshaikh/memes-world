import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/AddButton/AddButton';
import Style from './Index.module.css';
class Home extends Component{
    state={

    }
    render(){
        return(
            <div>
                MemeWorld
            <Link to="/addmeme">
                    <Button className={Style.Button}/>
            </Link>
            </div>
        )
    }
}
export default Home; 