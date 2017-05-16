import React, {Component} from 'react'

import {Page, PageContent, ContentBlock, Bars, Grid, Icon} from 'kui'

const {Title: ContentBlockTitle} = ContentBlock;

const {SubNavBar, Navbar} = Bars;


export default class PullToRefresh extends Component {

  handleRefresh(done) {
    setTimeout(done, 2000);
  }

  render() {
    return (
      <Page title="下拉刷新">
        <Navbar title="下拉刷新" back/>
        <PageContent pullToRefresh onRefresh={this.handleRefresh}>
          <ContentBlock>
            <p>Just pull page down to let the magic happen.<br/>Note that pull-to-refresh feature is optimised for touch and native scrolling so it may not work on desktop browser.</p>
            <p>Just pull page down to let the magic happen.<br/>Note that pull-to-refresh feature is optimised for touch and native scrolling so it may not work on desktop browser.</p>
            <p>Just pull page down to let the magic happen.<br/>Note that pull-to-refresh feature is optimised for touch and native scrolling so it may not work on desktop browser.</p>
            <p>Just pull page down to let the magic happen.<br/>Note that pull-to-refresh feature is optimised for touch and native scrolling so it may not work on desktop browser.</p>
            <p>Just pull page down to let the magic happen.<br/>Note that pull-to-refresh feature is optimised for touch and native scrolling so it may not work on desktop browser.</p>
            <p>Just pull page down to let the magic happen.<br/>Note that pull-to-refresh feature is optimised for touch and native scrolling so it may not work on desktop browser.</p>
            <p>Just pull page down to let the magic happen.<br/>Note that pull-to-refresh feature is optimised for touch and native scrolling so it may not work on desktop browser.</p>
          </ContentBlock>
        </PageContent>
      </Page>
    );
  }
}
