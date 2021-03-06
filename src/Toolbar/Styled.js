import React, {Component} from 'react';
import styled from 'styled-components';


export const StyleToolbar = styled.div `
  font-size: 16px;
  color: #000;
  background-color: #fff;
  height: 44px;
  text-align: center;
  padding: 14px;
  line-height: 1;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  position: relative;

  span, a{
    vertical-align: middle;
  }

  a{
    color: #298BEB;
  }

  &::after{
    content: '';
    clear: both;
    display: block;
    height: 0;
    overflow: hidden;
  }
  .center{
    position: absolute;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0 -10px;
    text-align: center;
    white-space: nowrap;
    box-sizing: border-box;
    z-index: 1;
    box-sizing: border-box;
  }
  .left {
    float: left;
    position: relative;
    z-index: 2;
  }
  .right{
    float: right;
    position: relative;
    z-index: 2;
  }
`;
