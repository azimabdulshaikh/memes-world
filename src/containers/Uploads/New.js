import { Component } from 'react';
import Wrapper from "../../Hoc/Wrapper/Wrapper";
import {Card} from '../../data'

class New extends Component {
    state = {
        file: 'null',
        category:'',
        
    }

    


    imageSelectHandler(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
            
        })
    }
    categorySelectHandler=(e,{value})=>this.setState({category:value})

    render() {
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
export default New;