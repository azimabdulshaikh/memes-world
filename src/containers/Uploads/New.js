import { React, Component } from 'react';
import Form from '../../components/UI/Form/Form';
import image from '../../assets/upload.png';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

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
    categorySelectHandler = (e) => this.setState({ category:e.target.value })

    componentDidMount() {
        console.log(this.props.fetchCategories())
    }



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
                    changedCategory={this.categorySelectHandler}
                />
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.category.categoriesList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCategories: () => dispatch(actions.fetchCategories())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(New);

