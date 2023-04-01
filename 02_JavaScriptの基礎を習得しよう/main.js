'use strict';

// function getRectangle(height, width) {
//   return height * width;
// }
// console.log(getRectangle(3, 5));


// const getRectangle = function(height, width) {
//   return height * width;
// }
// console.log(getRectangle(3, 5));

// const getRectangle
//   = new Function('height', 'width', 'return height * width');
//   console.log(getRectangle(3, 5));

// const getRectangle = (height, width) => {
//  return height * width;
// };
// console.log(getRectangle(3, 5));

// const getMikan = (price, quantity) => {
// return price * quantity;
// };
// console.log(getMikan(100, 20));

// const displayMessage = function() {
//   console.log('Timeout!');
// }

// setTimeout(displayMessage, 3000);

// function greeting(name) {
//   console.log('Hello!' + name + '-san.');
// }

// function inputUserName(callback) {
//   let name = prompt('あなたのお名前を入力してください！');
//   callback(name);
// }

// inputUserName()

// let colors = ['Red', 'Green', 'Blue'];
// console.log(colors);
// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);
// console.log(colors[3]);

// let arr = [1, '2', 3, ['a', 'b', 'c']];
// console.log(arr);

// console.log(colors.length);

// console.log(colors[colors.length -1]);

// let emptyArr = [];
// console.log(emptyArr);

// let colors = ['Red', 'Green', 'Blue'];
// console.log(colors);

// colors.push('Black');
// console.log(colors);

// colors.unshift('white');
// console.log(colors);

// colors[1] = 'Aka';
// console.log(colors);

// colors.splice(2, 0, 'D');
// console.log(colors);

// let colors2 = ['midori', 'kuro'];
// let mergedColors = colors.concat(colors2);
// console.log(mergedColors);
// console.log(colors);
// console.log(colors2);

// colors.shift();
// console.log(colors);

// colors.pop();
// console.log(colors);

// let user = new Object();
// user.name = 'Takuto Higa';
// user.gender = 'men';
// user.birthyear = '2000';
// console.log(user);

// let keys = Object.keys(user);
// console.log(keys);

// user.hobby = 'Fishing';
// console.log(user);

// let keys = Object.keys(user);
// console.log(keys);

// user.hobby = 'Minicar';
// console.log(user);

// let user = {
// name: 'Takuto Higa',
// gender: 'men',
// birthYear: '2000',
// calcAge: function(thisYear) {
//     return thisYear - this.birthYear;
//   }
// }
// console.log(user.calcAge(2023))

// for(let a = 100; a <= 111; a++) {
//   console.log(a);
// }

// let arr = ['a', 'b', 'c'];
// for(let a = 0; a < 3; a++) {
//   console.log(arr[a]);
// }

// const scores = [
//   [100, 99, 98],
//   [90, 99, 98],
//   [80, 89, 88],
// ];

// console.log(scores);

// for(let i = 0; i < scores.length; i++)
//   for(let j = 0; j < scores[i].length; j++) {
//   console.log(scores[i][j]);
// }

// let i = 1;
// while(i <= 3) {
//   console.log(i);
//   i++
// }

// let j = 1;
// while(j <= 10) {
//   console.log(j)
//   if(j === 5) {
//     break;
//   }
//   j++
// }

// let j = 1;
// do {
//   console.log(j);
//   j++;
// }  while(j <= 3);

// let colors = ['Red', 'Green','Blue'];
// for(let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// colors.forEach(function(color) {
//   console.log(color);
// })

// const colors = ['Red','Green','Blue']
// for(const color of colors) {
//   console.log(color);
// }

// const str = 'JavaScript';
// for(const value of str) {
//   console.log(value);
// }

// const scores = [100, 90, 80, 70, 60];
// let total = 0;
// for(let i = 0; i < scores.length; i++) {
//   total = total + scores[i];
// }

// let ave = total / scores.length;

// console.log('合計値' + total);
// console.log('平均値' + ave);

// let btn = document.getElementById('triggerButton');
// btn.addEventListener('click', function(e){
  // alert('clicked!');
  // let headerTitle = document.getElementById('headerTitle');
  // console.log(headerTitle);
  // let headerTitle = document.getElementById('headerTitle');
  // headerTitle.textContent = 'タイトルが変更されました';
// let inputColorName = document.getElementById('inputColorName');
// let colorNameText = inputColorName.value;
// let inputName = inputColorName.getAttribute('name');
// let showText = document.getElementById('showText');
// showText.textContent = `name属性: ${inputName}, 入力されたテキスト: ${colorNameText}`;
// }, false);

// let btn = document.getElementById('triggerButton');
// btn.addEventListener('click', function(e){
//   // IDによるノードの取得
//   let inputColorName = document.getElementById('inputColorName');
//   // 取得したinput要素の入力値を取得
//     document.getElementById("result").value = 1;
//     // 取得したinput要素のname属性値を取得
//   let inputName = inputColorName.getAttribute('name');
//   // idがshowTextのp要素を取得
//   let showText = document.getElementById('showText');
//   // 出力
//   showText.textContent = `name属性: ${inputName}, 入力されたテキスト: ${colorNameText}`;
// }, false);
// let setRedClassButton = document.getElementById('setRedClassButton');
// setRedClassButton.addEventListener('click', function(e){
//   let showText = document.getElementById('showText');
//   showText.setAttribute('class', 'red');
// }, false);

// let setBlueClassButton = document.getElementById('setBlueClassButton');
// setBlueClassButton.addEventListener('click', function(e){
//   let showText = document.getElementById('showText');
//   showText.setAttribute('class', 'blue');
// }, false);

// let removeClassButton = document.getElementById('removeClassButton');
// removeClassButton.addEventListener('click', function(e){
//   let showText = document.getElementById('showText');
//   showText.removeAttribute('class');
// }, false);

// let addButton = document.getElementById('addButton');
// addButton.addEventListener('click', function(e){
//  let elements = document.getElementsByTagName('p');
//  console.log(elements);
//  for(let i = 0; i < elements.length; i++) {
//   console.log(elements[i].textContent);
//  }
// let elements = document.getElementsByName('inputText');
// console.log(elements);
// console.log(elements[0].value);
// let elements = document.getElementsByClassName('foo');
// console.log(elements);
// for(let i = 0; i < elements.length; i++) {
//   console.log(elements[i].textContent);
// }
// let elements = document.querySelectorAll('.foo');
// console.log(elements);
// // console.log(element.textContent);
// for(let i = 0; i <elements.length; i++) {
//   console.log(elements[i].textContent);
// }
// let inputLanguage = document.getElementById('inputLanguage');
// let language = inputLanguage.value;
// if(language === ''){
//   alert('未入力だぜっ！');
//   return;
// }
// let listItem = document.createElement('li');
// listItem.textContent = language;
// let languageList = document.getElementById('languageList');
// languageList.appendChild(listItem);
// inputLanguage.value = '';
// },false);

// let removeButton = document.getElementById('removeButton');
// removeButton.addEventListener('click', function(e){
//   let languageList = document.getElementById('languageList');
//   languageList.removeChild(languageList.lastElementChild);
// },false);

// window.console.log('Hello');

// window.alert('Are you OK?');

// window.confirm('Are you ok?');

// window.open('https//www.google.co.jp');

// window.close();

// let btn = document.getElementById('triggerButton');
// btn.addEventListener('click', function(e){
//   window.scroll(110,3000);
// }, false);

// const yardButton = document.getElementById('yardButton');
// yardButton.addEventListener('click', function(e){
// console.log('yard!!!')
// }, false);

// const yardButton = document.getElementById('yardButton');
// yardButton.addEventListener('click', (e) => {
// console.log('yard!!!')
// }, false);

// const sayYardButton = document.getElementById('sayYardButton');
// function sayYardEventHandler(e) {
//   console.log('yard!!!');
// }
// sayYardButton.addEventListener('click', sayYardEventHandler, false);

// const removeEventHandlerButton = document.getElementById('removeEventHandlerButton');
// function removeEventHandler(e) {
//   console.log('remove');
//   sayYardButton.removeEventListener('click', sayYardEventHandler, false);
// }
// removeEventHandlerButton.addEventListener('click', removeEventHandler, false);

// function handleChange() {
//   const checkAll = document.getElementById('checkAll');
//   const checkBoxes = document.getElementsByName('hobby');
//   for(let i = 0; i < checkBoxes.length ; i++){
//     checkBoxes[i].checked = checkAll.checked;
//   }
// }

// const ca = document.getElementById('checkAll');
// ca.addEventListener('change', handleChange, false);
// document.addEventListener('DOMContentLoaded', function() {
//   alert('DOMContentLoaded!');
// }, false);

// window.onload = function() {
//   const nowLoading = document.getElementById('nowLoading');
// nowLoading.style.display = 'none';
// }

let num = 0;

function countUp() {
  num++;
  const counter = document.getElementById('counter');
  counter.textCounter = num;
}

const countUpBtn = document.getElementById('countUpButton');
countUpBtn.addEventListener('click', countUp,false);

// const addButton = document.getElementById('addButton');
// addButton.addEventListener('click', (e) => {
// for(let i = 0; i++){
//   addButton[i]
// }
// }, false);