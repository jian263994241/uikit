import React, {Component} from 'react';

export default function Loader({width='35', color='#6c6c6c',...rest}){
  const lineId = 'line_' + Date.now();
  const useTag = `
    <defs>
      <line id='${lineId}' x1='60' x2='60' y1='7' y2='27' stroke='${color}' stroke-width='11' stroke-linecap='round'/>
    </defs>
    <g>
      <use xlink:href='#${lineId}' opacity='.27'/>
      <use xlink:href='#${lineId}' opacity='.27' transform='rotate(30 60,60)'/>
      <use xlink:href='#${lineId}' opacity='.27' transform='rotate(60 60,60)'/>
      <use xlink:href='#${lineId}' opacity='.27' transform='rotate(90 60,60)'/>
      <use xlink:href='#${lineId}' opacity='.27' transform='rotate(120 60,60)'/>
      <use xlink:href='#${lineId}' opacity='.27' transform='rotate(150 60,60)'/>
      <use xlink:href='#${lineId}' opacity='.37' transform='rotate(180 60,60)'/>
      <use xlink:href='#${lineId}' opacity='.46' transform='rotate(210 60,60)'/>
      <use xlink:href='#${lineId}' opacity='.56' transform='rotate(240 60,60)'/>
      <use xlink:href='#${lineId}' opacity='.66' transform='rotate(270 60,60)'/>
      <use xlink:href='#${lineId}' opacity='.75' transform='rotate(300 60,60)'/>
      <use xlink:href='#${lineId}' opacity='.85' transform='rotate(330 60,60)'/>
    </g>
  `

  return (
    <svg
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      dangerouslySetInnerHTML={{__html: useTag}}
    />
  )
}