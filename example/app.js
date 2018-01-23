import React, {Component} from 'react'
import {render} from 'react-dom'
import {Views, View, Pages, dom as $, Toolbar, ToolbarNavLink, Link} from 'kui'

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
import Tab from './mod/Tab'
import TabAnimation from './mod/TabAnimation'
import TabStatic from './mod/TabStatic'
import PullToRefresh from './mod/PullToRefresh'
import Modals from './mod/Modals'
import Preloader from './mod/Preloader'
import SortableList from './mod/SortableList'
import Colors from './mod/Colors'

window.onPageInit = (props)=>{
  console.log(props);
}
render((
  <Views
    onRouteChange={((location, action)=>console.log(location))}
    onRouteInit={((location, action)=>console.log(location))}
  >
    <View>
      <Pages
        routes={[
          {path: '/', component: IndexPage, extraData: {title: '首页'}},
          {path: '/Swipeable', component: Swipeable},
          {path: '/ListView', component: ListView},
          {path: '/MediaLists', component: MediaLists},
          {path: '/AccordionList', component: AccordionList},
          {path: '/VirtualList', component: VirtualList},
          {path: '/SortableList', component: SortableList},
          {path: '/Formelements', component: Formelements},
          {path: '/CheckboxesRadios', component: CheckboxesRadios},
          {path: '/Buttons', component: Buttons},
          {path: '/Grid', component: Grid},
          {path: '/Icons', component: Icons},
          {path: '/Tab/Index', component: Tab},
          {path: '/Tab/Animation', component: TabAnimation},
          {path: '/Tab/Static', component: TabStatic},
          {path: '/PullToRefresh', component: PullToRefresh},
          {path: '/Modals', component: Modals},
          {path: '/Preloader', component: Preloader},
          {path: '/Colors', component: Colors},
        ]}/>
      <Toolbar className="aaa">
        <ToolbarNavLink to="/" activeStyle={{color: '#eee'}}>Tab 1</ToolbarNavLink>
        <ToolbarNavLink to="/ListView"  activeStyle={{color: '#eee'}}>ListView</ToolbarNavLink>
        <ToolbarNavLink to="/MediaLists" activeStyle={{color: '#eee'}}>MediaLists</ToolbarNavLink>
      </Toolbar>
    </View>
  </Views>
), document.querySelector('.root'));
