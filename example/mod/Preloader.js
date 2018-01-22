import React, {Component} from 'react'

import {Page, PageContent, Buttons, ContentBlock, ContentBlockTitle, SubNavBar, Navbar, Grid, Preloader} from 'kui'

const {Button} = Buttons;
const {Row,Col} = Grid;



export default class ModalsPage extends Component {

  state = {
    visibleType: null
  }

  showPreloader = (i)=>()=>{
    this.setState({
      visibleType: i
    });

    // setTimeout(()=>{
    //   this.setState({
    //     visibleType: null
    //   });
    // }, 1000);
  }


  render() {
    return (
      <Page>
        <Navbar title="指示器" backText/>
        <PageContent>
          <ContentBlock>
            <ContentBlockTitle>Preloader</ContentBlockTitle>
            <Row>
              <Col width="50">
                <Button onClick={this.showPreloader(1)}>默认</Button>
              </Col>
              <Col width="50">
                <Button onClick={this.showPreloader(3)}>logo</Button>
              </Col>
            </Row>
          </ContentBlock>
          <div style={{height: '1000px'}}></div>
          <Preloader visible={this.state.visibleType === 1}></Preloader>
          <Preloader visible={this.state.visibleType === 3} logoType="kq"></Preloader>
        </PageContent>

      </Page>
    );
  }
}
