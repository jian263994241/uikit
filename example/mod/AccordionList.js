import React, {Component} from 'react'

import {Page, PageContent, ListView, ContentBlock, SubNavBar, Navbar, ContentBlockTitle} from 'kui'

const {List, ListItem, ListGroup, ListLabel} = ListView;


const Icon = ()=>{
  return (
    <img src="https://www.99bill.com/mobsup/static/bank/bank-icon/images/bank_bcom.png" width="29" height="29" alt=""/>
  );
}

export default class AccordionListPage extends Component {
  render() {
    return (
      <Page title="Accordion List">
        <Navbar title="手风琴" backText/>
        <PageContent>
          <ContentBlockTitle>列表</ContentBlockTitle>
          <List accordion>
            <ListItem title="文字">
              <ContentBlock>
                <p>Accordion Item 1 Content</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu felis volutpat, rutrum ex quis, lobortis ex. Curabitur quis mattis lorem. Nullam magna lacus, interdum vel maximus nec, vestibulum non quam. Phasellus ornare efficitur porttitor. Quisque neque diam, imperdiet in fermentum nec, congue vitae ante. Nullam imperdiet maximus commodo. Morbi pharetra id purus ac ultrices. Duis non posuere libero.</p>
              </ContentBlock>
            </ListItem>
            <ListItem title="嵌套列表">
              <List>
                <ListItem title="Ivan Petrov" after="CEO" media={<Icon/>}/>
                <ListItem title="John Doe"  media={<Icon/>}/>
                <ListItem title="Jenna Smith" media={<Icon/>}/>
              </List>
            </ListItem>
            <ListItem title="文字2">
              <ContentBlock>
                <p>Accordion Item 3 Content</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu felis volutpat, rutrum ex quis, lobortis ex. Curabitur quis mattis lorem. Nullam magna lacus, interdum vel maximus nec, vestibulum non quam. Phasellus ornare efficitur porttitor. Quisque neque diam, imperdiet in fermentum nec, congue vitae ante. Nullam imperdiet maximus commodo. Morbi pharetra id purus ac ultrices. Duis non posuere libero.</p>
              </ContentBlock>
            </ListItem>
          </List>

          <ContentBlockTitle>嵌入式</ContentBlockTitle>
          <List accordion inset>
            <ListItem title="文字">
              <ContentBlock>
                <p>Accordion Item 1 Content</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu felis volutpat, rutrum ex quis, lobortis ex. Curabitur quis mattis lorem. Nullam magna lacus, interdum vel maximus nec, vestibulum non quam. Phasellus ornare efficitur porttitor. Quisque neque diam, imperdiet in fermentum nec, congue vitae ante. Nullam imperdiet maximus commodo. Morbi pharetra id purus ac ultrices. Duis non posuere libero.</p>
              </ContentBlock>
            </ListItem>
            <ListItem title="文字">
              <ContentBlock>
                <p>Accordion Item 1 Content</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu felis volutpat, rutrum ex quis, lobortis ex. Curabitur quis mattis lorem. Nullam magna lacus, interdum vel maximus nec, vestibulum non quam. Phasellus ornare efficitur porttitor. Quisque neque diam, imperdiet in fermentum nec, congue vitae ante. Nullam imperdiet maximus commodo. Morbi pharetra id purus ac ultrices. Duis non posuere libero.</p>
              </ContentBlock>
            </ListItem>
          </List>

        </PageContent>
      </Page>
    );
  }
}
