import React, {Component} from 'react'

import {Page, PageContent, Buttons, ContentBlock, ContentBlockTitle, SubNavBar, Navbar, Grid} from 'kui'

const {Button} = Buttons;
const {Row,Col} = Grid;

export default class ColorsPage extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {

    return (
      <Page title="主题&颜色">
        <Navbar title="主题&颜色" backText/>
        <PageContent>
          <ContentBlock>

            <p className="color-red">
              红色:  .color-red , .theme-red
            </p>

            <p className="color-yellow">
              黄色:  .color-yellow , .theme-yellow
            </p>

            <p className="color-blue">
              蓝色:  .color-blue , .theme-blue
            </p>

          </ContentBlock>

        </PageContent>
      </Page>
    );
  }
}
