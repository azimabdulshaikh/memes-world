import { React, Component } from 'react';
import Form from '../../components/UI/Form/Form';
import image from '../../assets/upload.png'
class New extends Component {
    state = {
        file: image,
        category: '',
        data: null
    }


    imageSelectHandler(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])

        })
    }
    categorySelectHandler = (e, {value}) => this.setState({ category:value })



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
                <Form
                    changedImage={(event) => this.imageSelectHandler(event)}
                    imgSrc={this.state.file}
                    options={options}
                    value={this.state.category}
                    changedInput={this.categorySelectHandler}
                    reference={input=>this.file = input}
                    clicked
                />
            </div>
        )

    }
}
export default New;

