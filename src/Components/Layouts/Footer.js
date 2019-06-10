import React from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import withWidth from '@material-ui/core/withWidth'
import { AppBar } from '@material-ui/core';

export default withWidth()(
  ({ muscles, category, onSelect, width }) => {
    const index = category
      ? muscles.findIndex(group => group === category) + 1
      : 0

    const onIndexSelect = (e, index) =>
      onSelect(index === 0 ? '' : muscles[index - 1])

    const scrollOnXS = width === 'xs' ? "scrollable" : "standard"

    return <AppBar position='static'>
      <Tabs
        value={index}
        onChange={onIndexSelect}
        indicatorColor="secondary"
        textColor="secondary"
        centered={width !== 'xs'}
        variant={scrollOnXS}
        scrollButtons="on"
      >
        <Tab label="All" />
        {muscles.map(group =>
          <Tab key={group} label={group} />
        )}
      </Tabs>
    </AppBar>
  }
)