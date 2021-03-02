import { React ,Component } from 'react';
import Button from '../../components/AddButton/AddButton'
class AddButton extends Component{
    state={
        selectImage:null
    }
    fileSelectedHandler = event =>{
        this.setState({
            selectImage:event.target.files[0]
        })
    }


    render (){
        return(
            <div>
                <Button changed={this.fileSelectedHandler}/>
            </div>
        )
    }
}
export default AddButton;