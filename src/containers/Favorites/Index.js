import React, { Component } from "react";
import Wrapper from "../../Hoc/Wrapper/Wrapper";
import Aux from '../../Hoc/MyAux/MyAux';
import AddButton from '../../components/AddButton/AddButton';
import List from '../../components/Uploads/Uploads';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
class Index extends Component {
   state = {
      data: [],
      activeIndex: 0
  }

  componentDidMount() {
     
   this.props.fetchFavourite()
   // console.log(this.props.isLiked)
  }

  toggleHandler = (id)=>{
     console.log(id)
     this.props.toggleFavourite(id)
  }

   render() {
      // let id = {...this.props.data.map((a,index)=>a.id)}

      return (
         <div>
            <Aux>
               <Wrapper content="Favorite" />
               {this.props.fetchPostsLoading ?
                       <div>Loading Content please wait...</div> :
                       <List 
                            container="Favorite"
                            data={this.props.data}
                            clickedLikeButton={this.toggleHandler}/>
                       }
                        <AddButton className="addbutton"/>
            </Aux>
         </div>
      );
   }
}
const mapStateToProps = (state) => {
   return {
       data: state.favourite.favouriteList,
       fetchPostsLoading: state.favourite.fetchFavouriteListLoading,
       isLiked:state.favourite.is_favorite
       // activeIndex:state.home.activeIndex
   }
}

const mapDispatchToProps = dispatch => {
   return {
      fetchFavourite: () => dispatch(actions.fetchFavourite()),
      toggleFavourite: (id)=> dispatch(actions.toggleFavourite(id))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);

