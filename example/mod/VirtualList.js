import React, {Component} from 'react'

import {Page, PageContent, ListView, ContentBlock, ContentBlockTitle, SubNavBar, Navbar} from 'kui'

const {List, ListItem, ListGroup, ListLabel} = ListView;

const Icon = ()=>{
  return (
    <img src="https://www.99bill.com/mobsup/static/bank/bank-icon/images/bank_bcom.png" width="29" height="29" alt=""/>
  );
}

let Items = [];

for(var i = 0; i<1000 ; i++){
  Items.push({title: 'Ivan Petrov '+ i})
}

export default class VirtualList extends Component {

  render() {
    return (
      <Page title="虚拟列表">
        <Navbar title="虚拟列表" backText/>
        <PageContent>
          <ContentBlockTitle>Virtual Items</ContentBlockTitle>
          <List virtualItems={Items} />
        </PageContent>
      </Page>
    );
  }
}
