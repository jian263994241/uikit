import React, {Component} from 'react'

import {Page, PageContent, ListView, ContentBlock, ContentBlockTitle, SubNavBar, Navbar, Form} from 'kui'

const {List, ListItem, ListGroup, ListLabel} = ListView;

const {FormLabel, FormInput} = Form;


const Icon = ()=>{
  return (
    <img src="https://www.99bill.com/mobsup/static/bank/bank-icon/images/bank_bcom.png" width="29" height="29" alt=""/>
  );
}

export default class CheckboxsRadios extends Component {

  render() {
    return (
      <Page title="Checkboxs & Radios">
        <Navbar title="多选 & 单选" backText/>
        <PageContent>
          <ContentBlockTitle>Checkbox group</ContentBlockTitle>
          <List>
            <ListItem checkbox name="demo-checkbox" title="checkbox 1"/>
            <ListItem checkbox name="demo-checkbox" title="checkbox 2"/>
            <ListItem checkbox name="demo-checkbox" title="default checked 3" defaultChecked/>
          </List>
          <List mediaList>
            <ListItem checkbox name="demo-checkbox2" title="Radio 1" after="12312" subtitle="副标题" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."/>
            <ListItem checkbox name="demo-checkbox2" title="Radio 2"/>
            <ListItem checkbox name="demo-checkbox2" title="default Radio 3"/>
          </List>

          <ContentBlockTitle>Radio buttons group</ContentBlockTitle>
          <List>
            <ListItem radio name="demo-radio" title="Radio 1"/>
            <ListItem radio name="demo-radio" title="Radio 2" after="item after"/>
            <ListItem radio name="demo-radio" title="default Radio 3" defaultChecked/>
          </List>

          <List mediaList>
            <ListItem radio name="demo-radio2" media={<Icon></Icon>} title="Radio 1" subtitle="副标题" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."/>
            <ListItem radio name="demo-radio2" media={<Icon></Icon>} title="Radio 2"/>
            <ListItem radio name="demo-radio2" media={<Icon></Icon>} title="default Radio 3" defaultChecked/>
          </List>
        </PageContent>
      </Page>
    );
  }
}
