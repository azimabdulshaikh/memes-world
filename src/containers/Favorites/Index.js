import React, { Component } from "react";
import Wrapper from "../../Hoc/Wrapper/Wrapper";
import { favorite } from '../../data';
import AddButton from '../../components/AddButton/AddButton';
import SwitchTab from '../../components/UI/SwitchTab/SwitchTab';
import Aux from '../../Hoc/MyAux/MyAux';
import List from '../../components/Uploads/Uploads';
class Index extends Component {
   state = {
      data: [],
      activeIndex: 0
  }

  componentDidMount() {
      const updatedData = favorite.map(list => {
          return {
              ...list
          }
      });
      this.setState({ data: updatedData });
  }

  handleTabChange = (e, { activeIndex }) => this.setState({ activeIndex: activeIndex });
   render() {
      return (
         <div>
            <Aux>
               <Wrapper content="Favorite" />
               <SwitchTab
                  activeIndex={this.activeIndex}
                  handleTabChange={this.handleTabChange} />
               <List data={this.state.data} />
               <AddButton className="addbutton" />
            </Aux>
         </div>
      );
   }
}
export default Index;
