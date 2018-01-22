import React, {Component} from 'react'

import {Page, PageContent, SubNavBar, Navbar, ListView, Link} from 'kui'

const {List, ListItem, ListGroup, ListLabel} = ListView;


export default class TabPage extends Component {
  render() {
    return (
      <Page title="标签切换">
        <Navbar title="标签切换" backText/>
        <PageContent>
          <List>
            <ListItem title="经典切换" link to="/Tab/Static" component={Link}/>
            <ListItem title="动画切换" link to="/Tab/Animation" component={Link}/>
          </List>
        </PageContent>
      </Page>
    );
  }
}
