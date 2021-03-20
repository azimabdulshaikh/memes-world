import React from 'react'
import { Tab } from 'semantic-ui-react';
import './SwitchTab.css';
const switchTab = (props) => {
  const uploads = [
    {
      menuItem: "Approved",
      render: () => (
        <div>
          {/* <List
            data={props.data} /> */}
            </div>
      )
    },
    {
      menuItem: "Pending",
      render: () => (
        <div>
          
          {/* <List
          data={props.data} /> */}
          </div>
      )
    },
    {
      menuItem: "Rejected",
      render: () => (
        <div>
          
          {/* <List
            data={props.data} /> */}
        </div>
      )

    }
  ];
  const home = [
    {
      menuItem: "Trending",
      render: () => (
        <div>
          {/* <List
            data={props.data} /> */}
            </div>
      )
    },
    {
      menuItem: "Funny",
      render: () => (
        <div>
          
          {/* <List
          data={props.data} /> */}
          </div>
      )
    },
    {
      menuItem: "Student",
      render: () => (
        <div>
          
          {/* <List
            data={props.data} /> */}
        </div>
      )

    }
  ];
  const tabs =
      props.content === "Home"  ? home
      : props.content === "Uploads" ? uploads
      :props.content ===""
  return (
    <div>
        <Tab
          className="tabs"
          menu={{ inverted:true,secondary: true, pointing: true }}
          panes={tabs}
          activeIndex={props.activeIndex}
          onTabChange={props.handleTabChange}
          // style={{backgroundColor:'#C0CCDA'}}
        />
    </div>
  )
}

export default switchTab
