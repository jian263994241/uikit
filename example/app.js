
import React, {Component} from 'react'
import {render} from 'react-dom'
import {App, View, Pages, dom as $} from 'kui'

import IndexPage from './mod/IndexPage'
import ListView from './mod/ListView'
import MediaLists from './mod/MediaLists'
import Swipeable from './mod/Swipeable'
import AccordionList from './mod/AccordionList'
import VirtualList from './mod/VirtualList'
import Formelements from './mod/Formelements'
import CheckboxesRadios from './mod/CheckboxesRadios'
import Buttons from './mod/Buttons'
import Grid from './mod/Grid'
import Icons from './mod/Icons'
// import LazyLoad from './mod/LazyLoad'
import Tab from './mod/Tab'
import TabAnimation from './mod/TabAnimation'
import TabStatic from './mod/TabStatic'
import PullToRefresh from './mod/PullToRefresh'
import Modals from './mod/Modals'
import Preloader from './mod/Preloader'
import Keyboard from './mod/Keyboard'
import SortableList from './mod/SortableList'
import Colors from './mod/Colors'

render((
  <App>
    <View type="hash">
      <Pages exact path="/" component={IndexPage}/>
      <Pages path="/swipeable" component={Swipeable}/>
      <Pages path="/ListView" component={ListView}/>
      <Pages path="/MediaLists" component={MediaLists}/>
      <Pages path="/AccordionList" component={AccordionList}/>
      <Pages path="/VirtualList" component={VirtualList}/>
      <Pages path="/SortableList" component={SortableList}/>
      <Pages path="/Formelements" component={Formelements}/>
      <Pages path="/CheckboxesRadios" component={CheckboxesRadios}/>
      <Pages path="/Buttons" component={Buttons}/>
      <Pages path="/Grid" component={Grid}/>
      <Pages path="/Icons" component={Icons}/>
      {/* <Pages path="/LazyLoad" component={LazyLoad}/> */}
      <Pages path="/Tab/Index" component={Tab}/>
      <Pages path="/Tab/Animation" component={TabAnimation}/>
      <Pages path="/Tab/Static" component={TabStatic}/>
      <Pages path="/PullToRefresh" component={PullToRefresh}/>
      <Pages path="/Modals" component={Modals}/>
      <Pages path="/Preloader" component={Preloader}/>
      <Pages path="/Keyboard" component={Keyboard}/>
      <Pages path="/Colors" component={Colors}/>
    </View>
  </App>
), document.querySelector('.root'));
