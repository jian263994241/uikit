import React, {Component} from 'react'

import {Page, PageContent, ListView, ContentBlock, ContentBlockTitle, SubNavBar, Navbar , Form} from 'kui'

const {List, ListItem, ListGroup, ListLabel} = ListView;

const {FormLabel, FormInput, FormTimerButton} = Form;

const Icon = ()=>{
  return (
    <img src="https://www.99bill.com/mobsup/static/bank/bank-icon/images/bank_bcom.png" width="29" height="29" alt=""/>
  );
}

export default class FormElements extends Component {

  sms = (next)=>{
    next()
  }

  render() {
    return (
      <Page title="表单">
        <Navbar title="表单" backText/>
        <PageContent>
          <ContentBlockTitle>Full Layout</ContentBlockTitle>
          <List>
            <ListItem media={<Icon/>}>
              <FormLabel>Name</FormLabel>
              <FormInput type="text" placeholder="Name"/>
            </ListItem>
            <ListItem media={<Icon/>}>
              <FormLabel>E-mail</FormLabel>
              <FormInput type="email" placeholder="E-mail"/>
            </ListItem>
            <ListItem media={<Icon/>}>
              <FormLabel>URL</FormLabel>
              <FormInput type="url" placeholder="URL"/>
            </ListItem>
            <ListItem media={<Icon/>}>
              <FormLabel>Password</FormLabel>
              <FormInput type="password" placeholder="Password"/>
            </ListItem>
            <ListItem media={<Icon/>}>
              <FormLabel>Phone</FormLabel>
              <FormInput type="tel" placeholder="Phone"/>
              <FormTimerButton onStart={this.sms}></FormTimerButton>
            </ListItem>
            <ListItem media={<Icon/>}>
              <FormLabel>Gender</FormLabel>
              <FormInput type="select">
                <option defaultValue="male">Male</option>
                <option value="female">Female</option>
              </FormInput>
            </ListItem>
            <ListItem media={<Icon/>}>
              <FormLabel>Birth date</FormLabel>
              <FormInput type="date" placeholder="Birth day" defaultValue="2014-04-30"/>
            </ListItem>
            <ListItem media={<Icon/>}>
              <FormLabel>Date time</FormLabel>
              <FormInput type="datetime-local" placeholder="Birth day"/>
            </ListItem>
            <ListItem media={<Icon/>} after={<FormInput type="switch" defaultChecked={true}/>}>
              <FormLabel>Switch</FormLabel>

            </ListItem>
            <ListItem media={<Icon/>}>
              <FormLabel>Slider</FormLabel>
              <FormInput type="range"  min="0" max="100" step="1" defaultValue="90"/>
            </ListItem>
            <ListItem media={<Icon/>}>
              <FormLabel>Textarea</FormLabel>
              <FormInput type="textarea"/>
            </ListItem>
          </List>

          <ContentBlockTitle>Icons and inputs</ContentBlockTitle>
          <List>
            <ListItem media={<Icon/>}>
              <FormInput type="text" placeholder="Name"/>
            </ListItem>
            <ListItem media={<Icon/>}>
              <FormInput type="password" placeholder="Password"/>
            </ListItem>
            <ListItem media={<Icon/>}>
              <FormInput type="date" placeholder="Birth day" defaultValue="2014-04-30"/>
            </ListItem>
            <ListItem media={<Icon/>}>
              <FormInput type="switch" defaultChecked={true}/>
            </ListItem>
          </List>

          <ContentBlockTitle>Just inputs</ContentBlockTitle>
          <List>
            <ListItem>
              <FormInput type="text" placeholder="Name"/>
            </ListItem>
            <ListItem>
              <FormInput type="password" placeholder="Password"/>
            </ListItem>
            <ListItem>
              <FormInput type="date" placeholder="Birth day" defaultValue="2014-04-30"/>
            </ListItem>
            <ListItem>
              <FormInput type="switch" defaultChecked={true}/>
            </ListItem>
          </List>

          <ContentBlockTitle>Inset, just inputs</ContentBlockTitle>
          <List inset>
            <ListItem>
              <FormInput type="text" placeholder="Name"/>
            </ListItem>
            <ListItem>
              <FormInput type="password" placeholder="Password"/>
            </ListItem>
            <ListItem>
              <FormInput type="date" placeholder="Birth day" defaultValue="2014-04-30"/>
            </ListItem>
            <ListItem>
              <FormInput type="switch" defaultChecked={true}/>
            </ListItem>
          </List>
        </PageContent>
      </Page>
    );
  }
}
