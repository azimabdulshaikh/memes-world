import { Component } from 'react';
import { uploads } from '../../data';
import AddButton from '../../components/AddButton/AddButton';
import SwitchTab from '../../components/UI/SwitchTab/SwitchTab';
import Wrapper from '../../Hoc/Wrapper/Wrapper';
import Aux from '../../Hoc/MyAux/MyAux';
import List from '../../components/Uploads/Uploads';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import './Index.css'
class Upload extends Component {
    state = {
        data: [],
        activeIndex: 0,
        open:false
    }

    componentDidMount() {
        // console.log(this.props.match)
       let  id = this.state.activeIndex + 1
        this.props.fetchCategories(id)
        this.props.fetchPosts(id)
    }

    deleteButtonHandler(id){
        // console.log(this.props.match.id)
        this.handleClose = (id) => this.setState({ open: false })
        this.handleOpen = (id) => this.setState({ open: true })
      
    }


    toggleHandler = (id)=>{
        // console.log(id)
        this.props.toggleFavourite(id)
    }

    editButtonHandler(id){
        // console.log(id)
    }

    handleTabChange = (e, { activeIndex }) => {
        this.setState({ activeIndex: activeIndex });
        this.props.fetchPosts(activeIndex+1)
    }

    render() {

        return (
            <div>
                <Aux>
                    <Wrapper content="Uploads"/>
                    <SwitchTab
                            container="uploads"
                            categories={this.props.categories}
                            activeIndex={this.activeIndex}
                            handleTabChange={this.handleTabChange} />
                       {this.props.fetchPostsLoading ?
                       <div>Loading Content please wait...</div> :
                                <List 
                                    is_favorite={this.props.is_favorite}
                                    data={this.props.data}
                                    clickedLikeButton={this.toggleHandler}
                                    clickedEditButton={this.editButtonHandler}
                                    clickedDeleteButton={this.deleteButtonHandler}/>
                                
                    }
                        <AddButton className="addbutton"/>
                </Aux>
            </div>
        );

    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.category.categoriesList,
        data:state.home.data,
        fetchPostsLoading:state.home.fetchPostsLoading,
        // activeIndex:state.home.activeIndex
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCategories: () => dispatch(actions.fetchCategories()),
        fetchPosts: (id) => dispatch(actions.fetchPosts(id)),
        toggleFavourite: (id)=> dispatch(actions.toggleFavourite(id))
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Upload);