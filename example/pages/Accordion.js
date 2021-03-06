import React, {Component} from 'react';
import {Page, PageContent, Link} from '~/src/Core';
import {Accordion, AccordionItem, AccordionToggle, AccordionContent} from '~/src/Accordion';

export default class AccordionDemo extends Component {

  render (){

    return (
      <Page>
        <PageContent>
          <Accordion>
            <AccordionItem
              activeClass="active1"
              className="item1"
              onAccordionOpen={()=>console.log('Accordion active1')}
              onAccordionClose={()=>console.log('Accordion close1')}
            >
              <AccordionToggle>
                Item 1
              </AccordionToggle>
              <AccordionContent>
                Item Content1
              </AccordionContent>
            </AccordionItem>
            <AccordionItem>
              <AccordionToggle>
                Item 2
              </AccordionToggle>
              <AccordionContent>
                Item Content2
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </PageContent>
      </Page>
    )
  }
}
