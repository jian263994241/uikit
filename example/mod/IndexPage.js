import React, {Component} from 'react'

import {Page, PageContent, ListView, ContentBlock, ContentBlockTitle, Link} from 'kui'

const {List, ListItem, ListGroup} = ListView;

export default class IndexPage extends Component {

  onAccordionOpen = (index)=> ()=>{
    // console.log(index);
  }

  render() {
    const {
      history
    } = this.props;

    const style = {
      marginTop : 10
    };

    return (
      <Page title="组件库">
        <PageContent>
          <ContentBlockTitle style={{fontSize: '20px'}}>wonderjs</ContentBlockTitle>
          <ContentBlock>
            快钱包移动组件库 <br/>
            地址: <a href="https://jian263994241.gitbooks.io/wonderjs/content/">wonderjs</a> <br/>
            版本: 0.4.1
          </ContentBlock>
          <List>

            <ListGroup title="列表">
              <ListItem title="列表视图" link to="/ListView" component={Link}/>
              <ListItem title="媒体列表" link to="/MediaLists" component={Link}/>
              <ListItem title="手风琴列表" link to="/AccordionList" component={Link}/>
              <ListItem title="排序列表" link to="/SortableList" component={Link}/>
            </ListGroup>

            <ListGroup title="表单">
              <ListItem title="表单布局" link to="/FormElements" component={Link}/>
              <ListItem title="多选 & 单选" link to="/CheckboxesRadios" component={Link}/>
              <ListItem title="按钮" link to="/Buttons" component={Link}/>
            </ListGroup>

            <ListGroup title="基础组件">
              <ListItem title="九宫格" link to="/Grid" component={Link}/>
              <ListItem title="图片轮播" link to="/swipeable" component={Link}/>
              <ListItem title="图标" link to="/Icons" component={Link}/>
              <ListItem title="标签切换" link to="/Tab/Index" component={Link}/>
            </ListGroup>

            <ListGroup title="操作">
              <ListItem title="模态框 Modals" link to="/Modals" component={Link}/>
              <ListItem title="指示器" link to="/Preloader" component={Link}/>
              <ListItem title="下拉刷新" link to="/PullToRefresh" component={Link}/>
            </ListGroup>

            <ListGroup style={style}>
              <ListItem title="颜色" link to="/Colors" component={Link}/>
            </ListGroup>
          </List>

        </PageContent>
      </Page>
    );
  }
}
