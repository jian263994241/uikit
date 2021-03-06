import React, {Component} from 'react';
import {Page, PageContent, Link} from '~/src/Core';
import styled from 'styled-components';
import {GridRow, GridCol} from '~/src/Grid';

const Row = styled(GridRow) `
  margin-bottom: 10px;
`
const Col = styled(GridCol) `
  border: 1px solid black;
`
;

export default class ButtonsDemo extends Component {

  render (){

    return (
      <Page>
        <PageContent>
          <div>
            <Row gutter={15}>
              <Col width={50}>col-50</Col>
              <Col width={50}>col-50</Col>
            </Row>

            <Row gutter={15}>
              <Col width={25}>col-25</Col>
              <Col width={25}>col-25</Col>
              <Col width={25}>col-25</Col>
              <Col width={25}>col-25</Col>
            </Row>

            <Row>
              <Col width={33}>col-33</Col>
              <Col width={33}>col-33</Col>
              <Col width={33}>col-33</Col>
            </Row>

            <Row>
              <Col width={20}>col-20</Col>
              <Col width={20}>col-20</Col>
              <Col width={20}>col-20</Col>
              <Col width={20}>col-20</Col>
              <Col width={20}>col-20</Col>
            </Row>

            <Row>
              <Col width={33}>col-33</Col>
              <Col width={66}>col-66</Col>
            </Row>

            <Row>
              <Col width={25}>col-25</Col>
              <Col width={25}>col-25</Col>
              <Col width={50}>col-50</Col>
            </Row>

            <Row>
              <Col width={75}>col-75</Col>
              <Col width={25}>col-25</Col>
            </Row>

            <Row>
              <Col width={80}>col-80</Col>
              <Col width={20}>col-20</Col>
            </Row>
          </div>

        </PageContent>
      </Page>
    )
  }
}
