import React, {Component} from 'react'

import {Page, PageContent, ContentBlock, ContentBlockTitle, SubNavBar, Navbar, Grid, Icon} from 'kui'

const {Row, Col} = Grid;

export default class GridPage extends Component {

  render() {
    return (
      <Page title="图标">
        <Navbar title="图标" backText/>
        <PageContent id="ratchicons">

          <ContentBlockTitle>All ICONS</ContentBlockTitle>
          <ContentBlock>

            <Icon type="back"/>
            <Icon type="bars"/>
            <Icon type="caret"/>
            <Icon type="check"/>
            <Icon type="close"/>
            <Icon type="code"/>
            <Icon type="compose"/>
            <Icon type="download"/>
            <Icon type="edit"/>
            <Icon type="forward"/>

            <Icon type="gear"/>
            <Icon type="home"/>
            <Icon type="info"/>
            <Icon type="list"/>
            <Icon type="more-vertical"/>
            <Icon type="more"/>
            <Icon type="pages"/>
            <Icon type="pause"/>
            <Icon type="person"/>
            <Icon type="play"/>

            <Icon type="plus"/>
            <Icon type="refresh"/>
            <Icon type="search"/>
            <Icon type="share"/>
            <Icon type="sound"/>
            <Icon type="sound2"/>
            <Icon type="sound3"/>
            <Icon type="sound4"/>
            <Icon type="star-filled"/>
            <Icon type="star"/>

            <Icon type="stop"/>
            <Icon type="trash"/>
            <Icon type="up-nav"/>
            <Icon type="up"/>
            <Icon type="right-nav"/>
            <Icon type="right"/>
            <Icon type="down-nav"/>
            <Icon type="down"/>
            <Icon type="left-nav"/>
            <Icon type="left"/>


          </ContentBlock>
        </PageContent>
      </Page>
    );
  }
}
