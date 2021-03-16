import { React, Component } from 'react';
import NewMeme from '../../components/NewMeme/NewMeme';
import Wrapper from "../../Hoc/Wrapper/Wrapper";
import {uploads} from '../../data';

class MemeBuilder extends Component {
    state = {
        file: 'null',
        category:'',
        data:null 
    }


    imageSelectHandler(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
            
        })
    }
    categorySelectHandler=(e,{value})=>this.setState({category:value})
    
    

    render() {
        console.log('data',uploads)
        const options = [
            {
              key: 'Student',
              text: 'Student',
              value: 'Student',
            },
            {
              key: 'Trending',
              text: 'Trending',
              value: 'Trending',
            },
            {
              key: 'Funny',
              text: 'Funny',
              value: 'Funny',
            }]
        return (
            <div>
                <Wrapper content="Home">
                    Hey there
                </Wrapper>
                <NewMeme
                    changedImage={(event) => this.imageSelectHandler(event)}
                    imgSrc={this.state.file}
                    options={options}
                    value={this.state.category}
                    changedInput={this.categorySelectHandler}
                />
            </div>
        )
    }

}

export default MemeBuilder