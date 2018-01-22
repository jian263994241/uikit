import React, {Component} from 'react'

import {Page, PageContent, SubNavBar, Navbar, ListView, Buttons, Tabs, SwipeableViews} from 'kui'

const {List, ListItem, ListGroup, ListLabel} = ListView;
const {ButtonsSegmented, Button} = Buttons;


const styles = {
  slide: {
    padding: 15,
    minHeight: '100%',
    color: '#fff',
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
};

export default class TabPage extends Component {

  state = {
    index: 0,
  };

  handleChangeTabs = (value) => () => {
    this.setState({
      index: value,
    });
  };

  handleChangeIndex = (index) => {
    this.setState({
      index
    });
  };

  render() {

    const {
      index,
    } = this.state;

    return (
      <Page title="标签切换">
        <Navbar title="动画切换" backText/>
        <SubNavBar noBorder>
          <ButtonsSegmented activeIndex={index}>
            <Button onClick={this.handleChangeTabs(0)}>Tab 1</Button>
            <Button onClick={this.handleChangeTabs(1)}>Tab 2</Button>
            <Button onClick={this.handleChangeTabs(2)}>Tab 3</Button>
          </ButtonsSegmented>
        </SubNavBar>

        <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex} disabled style={{height:'100%'}} containerStyle={{height:'100%'}}>
          <PageContent withSubnavbar >
              Tab centent 1
          </PageContent>
          <PageContent withSubnavbar >
              Tab centent 2
          </PageContent>
          <PageContent withSubnavbar >
              Tab centent 3
          </PageContent>
        </SwipeableViews>


      </Page>
    );
  }
}
