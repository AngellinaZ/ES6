# ES6
* 参考[SimplyWenjing/ES6](https://github.com/SimplyWenjing/ES6)思维导图整理
* babel转码

## let
![let](https://github.com/AngellinaZ/ES6/blob/master/Mind-mapping/let.png)

## const
![const](https://github.com/AngellinaZ/ES6/blob/master/Mind-mapping/const.png)

## destructuring
* 规则：解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。
![变量的解构赋值](https://github.com/AngellinaZ/ES6/blob/master/Mind-mapping/destructuring.png)

## 字符串的扩展
![字符串的扩展](https://github.com/AngellinaZ/ES6/blob/master/Mind-mapping/String.png)

## 数值的扩展
![数值的扩展](https://github.com/AngellinaZ/ES6/blob/master/Mind-mapping/Number.png)

## 数组的扩展
![数组的扩展](https://github.com/AngellinaZ/ES6/blob/master/Mind-mapping/Array.png)

## 对象的扩展
![对象的扩展](https://github.com/AngellinaZ/ES6/blob/master/Mind-mapping/Object.png)

## Promise
```js
const promise = new Promise ((resolve, rereject) => {
  if (/* 异步操作成功 */){
    return resolve(value);
  } else {
    return reject(error);
  }
})

promise.then((value) => {
  // success
}, (error) => {
  // failure
});
```
![对象的扩展](https://github.com/AngellinaZ/ES6/blob/master/Mind-mapping/Promise.png)


## 扩展运算符 和 rest参数

### 扩展运算符
> 扩展运算符可以看做是 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。
```js
console.log(...'22') //2 2
console.log([...'22']) //[2,2]
```

### rest参数： ...变量
> 用于获取函数多余的变量，可不使用arguments对象

rest参数和arguments对象的区别 
 1. rest参数只包含那些没有对应形参的实参；而 arguments 对象包含了传给函数的所有实参。
 2. arguments 对象不是一个真实的数组；而rest参数是真实的 Array 实例，也就是说你能够在它上面直接使用所有的数组方法。
 3. arguments 对象对象还有一些附加的属性 (比如callee属性)。

 ```js
 //arguments对象
 function sortNum(){
 	return Array.prototype.slice.call(arguments).sort()
 }

 //rest参数
 const sortNum = (...nums) => nums.sort()
 ```
 注意：
 1. rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。
 ```js
 function f(a, ...b, c) { ... } // 报错
 ```
 2. 函数的length属性，不包括 rest 参数。
```js
(function(a) {}).length // 1
(function(...a) {}).length // 0
(function(a, ...b) {}).length // 1
```

## 模板字符串
**基础用法**
```js
let message = `hello message`;
console.log(message);  //hello message

// 可用\ 转义
let message1 = `hello \` messsage`;
console.log(message1); //hello ` messsage

//在模板字符串中，空格、缩进、换行都会被保留, 可用trim()函数取消换行
let message2 = `
	<ul>
		<li>1</li>
		<li>2</li>
	</ul>
`.trim();
console.log(message2); 
/*
	<ul>
		<li>1</li>
		<li>2</li>
	</ul>
*/
```

**嵌入变量**
```js
let name = '哈哈';
let age = 18;
let message = `${name} is ${age} years old`;

//支持嵌套
let  arr = [{value: 1}, {value: 2}];
let message1 = `
  <ul>
    ${arr.map(item => {
        return `
          <li>${item.value}</li>
        `
    })}
  </ul>
`
console.log(message1);
/*
  <ul>
    <li>1</li>
    ,
    <li>2</li>
  </ul
*/
//map() 返回一个数组 [<li>1</li>, <li>2</li>]， 为了防止逗号的产生，可先用join() 将数组拼接为字符串
//当大括号中的值不是字符串时，会将其转为字符串，比如一个数组 [1, 2, 3] 就会被转为 1,2,3 ， 逗号就是这么出现的

```

**标签模板**
模板字符串可以紧跟在一个函数名后面，该函数将被调用来处理这个模板字符串
```js
let x = 'Hi', y = 'Anegllina';
var res = fun`${x}, I am ${y}`;
console.log(res)

function fun(literals, v1, v2) {
  console.log(literals); //["", ", I am ", ""]
  console.log(v1); //Hi -- ${x}
  console.log(v2); //Angellina  -- ${y}
  
  let result = literals.reduce((prev, next, i) => {
	    let value = values[i - 1];
	    return prev + value + next;
	});

	return result;
}
```


























