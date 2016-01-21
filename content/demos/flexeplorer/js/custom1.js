/**
 * Created by tab on 1/20/16.
 */
"use strict";
//获取输入的值,变量为对应的属性名
var flexGrow, flexShrink, flexBasis, direction, justifyCon;
flexGrow = document.getElementById('flex-grow');
flexBasis = document.getElementById('flex-basic');
flexShrink = document.getElementById('flex-shrink');
direction = document.getElementById('flex-direction-control');
justifyCon = document.getElementById('justify-content-control');
var flexW = document.getElementById('flex-wrap-control');

var sheet = document.styleSheets[4];     //get the stylesheet
var rule = sheet.cssRules[0];

/* 时间绑定,先实践evnet handler,兼容性好,但每个事件只能绑定一个事件函数(任务)
需求:获取用户输入内容,值传递给style中对应的属性.
 */
 function fdirection(e) {
     if(!e) {
         e = window.event; //ie 5-8 event object
     }
     var target = e.target || e.srcElement;  //ie fallback
     var value = target.value;
     rule.style.flexDirection = value;
 }
function fjusitfyCon(e) {
     var target = e.target;
     var value = target.value;
     rule.style.justifyContent = value;
 }
function inputStyle(e) {
     var target = e.target;
     var value = target.value;
     rule.style.flexWrap= value;
 }

direction.onchange= fdirection;
justifyCon.onchange= fjusitfyCon;
flexW.onchange = inputStyle;

//get random strings








