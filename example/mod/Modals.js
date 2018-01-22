import React, {Component} from 'react'

import {Page, PageContent, Buttons, ContentBlock, ContentBlockTitle, SubNavBar, Navbar, Toolbar, Grid, Popover, Popup, Modal, PickerModal, ActionsModal, View, Pages, Link} from 'kui'

const {Button} = Buttons;
const {Row,Col} = Grid;


const {ActionLabel, ActionButton, ActionGroup} = ActionsModal;

export default class ModalsPage extends Component {

  state = {
    popupOpened: false,
    pickerModalOpened: false,
    actionsOpened: false
  }

  popup = ()=>{
    this.setState({popupOpened:true});
    this.props.history.push('/Modals/pop1')
  }

  closePopup = ()=>{
    this.setState({popupOpened:false})
    this.props.history.goBack('/Modals');
  }

  pickerModal = ()=>{
    this.setState({
      pickerModalOpened: true
    });
  }

  showActions = ()=>{
    this.setState({actionsOpened:true});
  }

  render() {

    const pop1 = ()=>{
      return (
        <Page>
          <Navbar title="弹窗1" backText="模态框" onBack={this.closePopup}/>
          <PageContent>
            <ContentBlock>
              POPUP1 ...
              <Link to="/Modals/pop2">pop2</Link>
            </ContentBlock>
          </PageContent>
        </Page>
      );
    }

    const pop2 = ()=>{
      return (
        <Page>
          <Navbar title="弹窗2" backText="弹窗1"/>
          <PageContent>
            <ContentBlock>
              POPUP2 ...
              <Link to="/Modals/pop3">pop3</Link>
            </ContentBlock>
          </PageContent>
        </Page>
      );
    }

    const pop3 = ()=>{
      return (
        <Page>
          <Navbar title="弹窗3" backText="弹窗2"/>
          <PageContent>
            <ContentBlock>
              POPUP3 ...
            </ContentBlock>
          </PageContent>
        </Page>
      );
    }

    return (
      <Page title="模态框">
        <Navbar title="模态框" backText/>
        <PageContent>
          <ContentBlock>
            <Row>
              <Col width="33">
                <Button onClick={()=>Modal.alert({text: 'Hello Word!', onOk:()=>{console.log('alert')}, okText: '好的'}) }>Alert</Button>
              </Col>
              <Col width="33">
                <Button onClick={()=>Modal.confirm({text: 'Confirm',onOk: ()=>console.log('Confirm: 确定'), onCancel:()=>console.log('Confirm: 取消')})}>Confirm</Button>
              </Col>
              <Col width="33">
                <Button onClick={()=>Modal.prompt({text:'Prompt', onOk:(val)=>console.log('Prompt: 确定', val),onCancel: ()=>console.log('Prompt: 取消')})}>Prompt</Button>
              </Col>

            </Row>
            <br/>
            <Row>

              <Col width="33">
                <Button onClick={()=>{Modal.toast('Toast1');}}>Toast</Button>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col width="50">
                <Button onClick={this.popup}>Popup</Button>
              </Col>
              <Col width="50">
                <Button onClick={this.pickerModal}>Picker</Button>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col width="50">
                <Button onClick={this.showActions}>Action Sheet</Button>
              </Col>
            </Row>
          </ContentBlock>

        </PageContent>

        <ActionsModal visible={this.state.actionsOpened} onCancel={()=>{this.setState({actionsOpened: false})}}>
          <ActionGroup>
            <ActionLabel>这是一个标题，可以为一行或者两行。</ActionLabel>
            <ActionButton>示例菜单</ActionButton>
            <ActionButton>示例菜单</ActionButton>
          </ActionGroup>
          <ActionGroup>
            <ActionButton color="red" onClick={()=>{this.setState({actionsOpened: false})}}>取消</ActionButton>
          </ActionGroup>
        </ActionsModal>

        <PickerModal
          visible={this.state.pickerModalOpened}
          onCancel={()=>{this.setState({pickerModalOpened: false})}}
        >
          <ContentBlock>
            <p>About Popover created dynamically.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac diam ac quam euismod porta vel a nunc. Quisque sodales scelerisque est, at porta justo cursus ac.</p>
          </ContentBlock>
        </PickerModal>

        {/*popup*/}
        <Popup visible={this.state.popupOpened}>
          <View>
            <Pages
              routes={[
                {path:'/Modals/pop1', component: pop1},
                {path:'/Modals/pop2', component: pop2},
                {path:'/Modals/pop3', component: pop3}
              ]}
            />
          </View>
        </Popup>

      </Page>
    );
  }
}
