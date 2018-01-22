import React, {Component} from 'react'

import {Page, PageContent, Buttons, ContentBlock, ContentBlockTitle, SubNavBar, Navbar, Grid} from 'kui'

const {Button} = Buttons;
const {Row,Col} = Grid;

export default class ButtonsPage extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {

    return (
      <Page title="按钮">
        <Navbar title="按钮" backText/>
        <PageContent>
          <ContentBlock>
            <Button fill>按钮</Button>
            <br/>
            <Button disabled fill>不可点击</Button>
            <br/>
            <Row>
              <Col width="auto">
                <Button big>相对次要按钮</Button>
              </Col>
              <Col width="auto">
                <Button big fill>相对重要按钮</Button>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col width="auto">
                <Button big disabled>相对次要按钮</Button>
              </Col>
              <Col width="auto">
                <Button big fill disabled>相对重要按钮</Button>
              </Col>
            </Row>
          </ContentBlock>

          <ContentBlock inner noHairlines>
            <Button big fill>置底按钮</Button>
          </ContentBlock>

          <ContentBlock inner noHairlines>
            <Row>
              <Col width="auto">
                <Button big>相对次要按钮</Button>
              </Col>
              <Col width="auto">
                <Button big fill>相对重要按钮</Button>
              </Col>
            </Row>
          </ContentBlock>

          <ContentBlock inner noHairlines>
            <Row>
              <Col width="auto">
                <Button big disabled>相对次要按钮</Button>
              </Col>
              <Col width="auto">
                <Button big fill disabled>相对重要按钮</Button>
              </Col>
            </Row>
          </ContentBlock>

        </PageContent>
      </Page>
    );
  }
}
