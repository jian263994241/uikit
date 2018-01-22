import React, {Component} from 'react'

import {Page, PageContent, ListView, ContentBlock, ContentBlockTitle, SubNavBar, Navbar, Toolbar , Form, Picker} from 'kui'

const {List, ListItem, ListGroup, ListLabel} = ListView;

const {FormLabel, FormInput} = Form;



const Icon = ()=>{
  return (
    <img src="https://www.99bill.com/mobsup/static/bank/bank-icon/images/bank_bcom.png" width="29" height="29" alt=""/>
  );
}

export default class FormElements extends Component {

  state = {
    pickerOpened: {
      a: false,
      b: false,
      c: false
    },
    pickerData: []
  }


  data = {
    demo1 : [
      {
        values: ['Apple', 'Orange', 'Bananna','Bananna','Bananna','Bananna','Bananna','Bananna','Bananna','Bananna','Bananna',]
      }
    ],
    demo2: [
      {
        values: ['Apple', 'Orange', 'Bananna','Bananna','Bananna','Bananna','Bananna','Bananna','Bananna','Bananna','Bananna',],
      },
      {
        values: ['Apple', 'Orange', 'Bananna','Bananna','Bananna','Bananna','Bananna','Bananna','Bananna','Bananna','Bananna',]
      }
    ],
    demo3: [
      {
        displayValues: ['Apple', 'Orange', 'Bananna'],
        values: [1, 2, 3],
        align:'left'
      },
      {
        values: ['Apple', 'Orange', 'Bananna','Bananna','Bananna','Bananna','Bananna','Bananna','Bananna','Bananna','Bananna',],
        align:'center'
      },
      {
        values: ['Apple', 'Orange', 'Bananna','Bananna','Bananna','Bananna','Bananna','Bananna','Bananna','Bananna','Bananna',]
      }
    ]
  }

  openPicker = (name)=> (e)=>{
    e.preventDefault();
    const {pickerOpened} = this.state;
    for (const key in pickerOpened ){
      if(key === name){
        pickerOpened[key] = true;
      }else{
        pickerOpened[key] = false;
      }
    }
    this.setState({pickerOpened});
  }

  closePicker = ()=>{
    this.setState({
      pickerOpened: {
        a: false,
        b: false,
        c: false
      }
    });
  }

  render() {
    return (
      <Page title="picker">
        <Navbar title="picker" backText/>
        <PageContent>
          <ContentBlockTitle>类型</ContentBlockTitle>
          <List>
            <ListItem>
              <FormInput type="text" placeholder="一列" readOnly onClick={this.openPicker('a')}/>
            </ListItem>
            <ListItem>
              <FormInput type="text" placeholder="两列" readOnly onClick={this.openPicker('b')}/>
            </ListItem>
            <ListItem>
              <FormInput type="text" placeholder="三列" readOnly onClick={this.openPicker('c')}/>
            </ListItem>
          </List>
        </PageContent>

        <Picker
          visible={this.state.pickerOpened.b}
          onChange={data=>console.log(data)}
          onCancel={this.closePicker}
          cols={this.data.demo2}
        />

      </Page>
    );
  }
}

// <Picker
//   visible={this.state.pickerOpened.a}
//   onCancel={this.closePicker}
//   cols={this.data.demo1}
// />

// <Picker
//   visible={this.state.pickerOpened.b}
//   onSelected={data=>console.log(data)}
//   onCancel={this.closePicker}
//   cols={this.data.demo2}
// />
// <Picker
//   visible={this.state.pickerOpened.c}
//   onCancel={this.closePicker}
//   cols={this.data.demo3}
// />
