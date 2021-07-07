import React from 'react'
import { Tab } from 'semantic-ui-react';
import './SwitchTab.css';
const switchTab = (props) => {
  let options = props.categories.map((a) => {
    return { key: a.id, value: a, menuItem: a.name }
  })
  let uploadOptions = [{ menuItem: "Approved" }, { menuItem: "Pending" }, { menuItem: "Rejected" }]
  return (
    props.container ?
      <Tab
        className="tabs"
        menu={{ inverted: true, secondary: true, pointing: true }}
        panes={uploadOptions}
        activeIndex={props.activeIndex}
        onTabChange={props.handleTabChange}
      />
      : <div>
        <Tab
          className="tabs"
          menu={{ inverted: true, secondary: true, pointing: true }}
          panes={options}
          activeIndex={props.activeIndex}
          onTabChange={props.handleTabChange}
        />
      </div>
  )
}

export default switchTab

