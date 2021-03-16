import { Tab } from "semantic-ui-react";
import React, { Component } from "react";
import Approved from '../../Uploads/Approved';
import Rejected from '../../Uploads/Rejected';
import Pending from '../../Uploads/Pending';

class TabExampleActiveIndex extends Component {
    state = { activeIndex: 0 };
  
      
      handleTabChange = (e, { activeIndex }) =>this.setState({ activeIndex: activeIndex })
        // console.log(activeIndex);
    //this.setState({ activeIndex }
  
    render() {
      const { activeIndex } = this.state;
  
      const panes = [
        {
          menuItem: "Approved",
          render: () => (
            <Tab.Pane>
              <Approved/>
            </Tab.Pane>
          )
        },
        {
          menuItem: "Pending",
          render: () => (
            <Tab.Pane>
                
                <div>TAB 2</div>
            </Tab.Pane>
          )
        },
        {
          menuItem: "Rejected",
          render: () => (
            <Tab.Pane>
                <Rejected/>
            </Tab.Pane>
          )
        }
      ];
  
      return (
        <div>
          <Tab
            menu={{ secondary: true, pointing: true }}
            panes={panes}
            activeIndex={activeIndex}
            onTabChange={this.handleTabChange}
          />
        </div>
      );
    }
  }
  
  export default TabExampleActiveIndex;
  