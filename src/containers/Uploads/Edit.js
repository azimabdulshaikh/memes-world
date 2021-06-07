import { React, Component } from 'react';
import Form from '../../components/UI/Form/Form';
import image from '../../assets/upload.png';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import {generateGuid} from '../../helpers'
class New extends Component {
    state = {
        previewImage: image,
        file:undefined,
        category: '',
        data: null
    }


    imageSelectHandler(event) {
        this.setState({
            previewImage:URL.createObjectURL(event.target.files[0]),
            file:event.target.files[0]
        })
    }

    categorySelectHandler = (e) => {this.setState({ category: e.value },()=>console.log(e.value))}


    componentDidMount() {
        console.log(this.props.match.params.id)
        this.props.fetchCategories()
    }

    
      fileUploadHandler = ()=> {
        
        const image = this.state.previewImage
        const category_id = this.state.category
        console.log(category_id)
        const id = generateGuid()

        const body = {
        'browser_id': id,
            
            'meme':{
                'category_id': category_id,
                'image': image
            }
        };

          this.props.uploadPost(body)
    }

        render() {
            let options = this.props.categories.map((a) => {

                return { key: a.id, value: a.id, text: a.name }

            })

            return (
                <div>
                    <Form
                        changedImage={(event) => this.imageSelectHandler(event)}
                        imgSrc={this.state.previewImage}
                        options={options}
                        changedCategory={this.categorySelectHandler}
                        submit={this.fileUploadHandler}
                    />
                </div>
            )

        }
    }

    const mapStateToProps = (state) => {
        return {
            categories: state.category.categoriesList,
            // previewImage:state.upload.previewImage,
            // file:state.upload.file
        }
    }

    const mapDispatchToProps = dispatch => {
        return {
            fetchCategories: () => dispatch(actions.fetchCategories()),
            uploadPost: (data) => dispatch(actions.uploadPost(data))
        }
    }



    export default connect(mapStateToProps, mapDispatchToProps)(New);

