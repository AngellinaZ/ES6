## let
![let](https://github.com/AngellinaZ/ES6/blob/master/Mind-mapping/let.png)

面试常见题，循环打印出 0 1 2
```js
for (var i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i)
    }, 100)
}
//3 3 3
```

方法1：立刻执行函数
```js
for (var i = 0; i < 3; i++) {
    setTimeout(function showNum(j) {
      console.log(j)
    }(i),100)
}
```
方法2： let 
```js
for (let i = 0; i < 3; i++) {
   setTimeout(function () {
        console.log(i)
    }, 100)
}
```


## const
![const](https://github.com/AngellinaZ/ES6/blob/master/Mind-mapping/const.png)

## destructuring
规则：只要等号右边的值不是对象或数组，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。
![变量的解构赋值](https://github.com/AngellinaZ/ES6/blob/master/Mind-mapping/destructuring.png)

## 字符串的扩展
![字符串的扩展](https://github.com/AngellinaZ/ES6/blob/master/Mind-mapping/String.png)

## 数值的扩展
![数值的扩展](https://github.com/AngellinaZ/ES6/blob/master/Mind-mapping/Number.png)

## 数组的扩展
![数组的扩展](https://github.com/AngellinaZ/ES6/blob/master/Mind-mapping/Array.png)

**扩展运算符**
> 扩展运算符可以看做是 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。
```js
console.log(...'22') //单个字符 2 2
console.log([...'22']) //数组 [2,2]
```

**rest参数： ...变量**
> 用于获取函数多余的变量，可不使用 arguments 对象

rest 参数和 arguments 对象的区别 
 1. rest 参数只包含那些没有对应形参的实参；而 arguments 对象包含了传给函数的所有实参。
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

## 对象的扩展
![对象的扩展](https://github.com/AngellinaZ/ES6/blob/master/Mind-mapping/Object.png)

## Set和Map
![Set和Map](https://github.com/AngellinaZ/ES6/blob/master/Mind-mapping/Set-Map.svg)

Set本身是一个构造函数，它类似于数组，但是成员值都是唯一的
```js
//去重
const set = new Set([1, 2, 3, 4, 4]);
[...set] //1, 2, 3, 4
```

## Promise
![Promise](https://github.com/AngellinaZ/ES6/blob/master/Mind-mapping/Promise.svg)
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

***
## Iterator 与 for of
[讶羽：迭代器与for of](https://github.com/mqyqingfeng/Blog/issues/90)

**Iterator（遍历器）的概念**

Iterator 返回一个包含 next() 方法的对象，调用next()，得到一个描述对象{value: '值', done: 是否结束 false/true}

ES2015模拟：
```js
function makeIterator(arr) {
	var i = 0;
	return {
		next: function() {
		  return i < arr.length ?
			{value: arr[i++], done: false} :
			{value: undefined, done: true};
    	}
	}
}
var it = makeIterator(['a', 'b']);

console.log(it.next()); // { value: "a", done: false }
console.log(it.next()); // { value: "b", done: false }
console.log(it.next()); // { value: undefined, done: true }
```

**for of**

遍历迭代器对象的方式，任何数据结构只要部署了 Iterator 接口，就可以完成遍历操作

ES6 规定，默认的 Iterator 接口部署在数据结构的 Symbol.iterator 属性，或者说，一个数据结构只要具有 Symbol.iterator 属性，就可以认为是"可遍历的"（iterable）。

```js
var obj = {
	value: 1
};

/*
* 报错： obj is not iterable
for(let v of obj) {
	console.log(v)
}*/

obj[Symbol.iterator] = function () {
	return makeIterator(['a', 'b']); //返回一个遍历器对象, 该对象有next()方法，调用方法返回当前成员信息
}

for(let v of obj) {
	console.log(v)
}

//a
//b
```

默认可遍历对象：
* 数组
* Set
* Map
* 类数组对象，如 arguments 对象、DOM NodeList 对象
* Generator 对象
* 字符串

```js
//数组
let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();

for(let i of iter) {
  console.log(i)
}
```

***
## 模板字符串
**1.基础用法**
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

**2.嵌入变量**
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
//map() 返回一个数组 [<li>1</li>, <li>2</li>]， 为了防止逗号的产生，可先用join('') 将数组拼接为字符串
//当大括号中的值不是字符串时，会将其转为字符串，比如一个数组 [1, 2, 3] 就会被转为 1,2,3 ， 逗号就是这么出现的

```

**3.标签模板**

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

***
## 箭头函数

[参考：讶羽](https://github.com/mqyqingfeng/Blog/issues/85)

### 基本
```js
let fun = value => value;

//等价于
let fun = function (value) {
	return value
};

//多个参数
let fun = (value, num) => value * num;

//返回对象
let fun = (value, num) => ({total: value * num});

//变量解构
let fun = ({value, num}) => ({total: value * num});
let result = fun({
	value: 10,
	num: 10
})
console.log(result); //{total: 100}
```

### 区别

**1. 没有this**

箭头函数没有this， 所以需要通过作用域链来确定this的值， this绑定的就是最近一层的非箭头函数的this值

**2.没有 arguments**

箭头函数没有自己的 arguments 对象，但可以访问外围函数的 arguments 对象
```js
function fun() {
	return () => arguments[0]
};
let res = fun(1);
console.log(res); //1
```

可以通过命名参数或者 rest 参数的形式访问参数:
```js
let fun = (...arg) => arg
```

**3. 不能通过 new 关键字调用**

JavaScript函数内部有两个内部方法： [[call]] 和 [[Construct]]

通过 new 调用函数时，执行 [[Construct]] 方法，创建一个实例对象， 再执行函数体，将 this 绑定到实例上。

当直接调用时， 执行[[call]]方法，直接执行函数体。

箭头函数并没有 [[Construct]] 方法，不能被用作构造函数，如果通过 new 的方式调用，会报错。

```
var Foo = () => {};
var foo = new Foo(); // TypeError: Foo is not a constructor
```

**4. 没有 new.target**

因为不能通过 new 调用，也就没有 new.target的值  (阮一峰： new.target)[http://es6.ruanyifeng.com/#docs/class#new-target-%E5%B1%9E%E6%80%A7]

**5. 没有原型**

由于不能使用 new 调用箭头函数，所以也没有构建原型的需求，于是箭头函数也不存在 prototype 这个属性。

```js
var Foo = () => {};
console.log(Foo.prototype); // undefined
```

**6. 没有 super**

### 总结

关于箭头函数，引用 MDN 的介绍就是：
> An arrow function expression has a shorter syntax than a function expression and does not have its own this, arguments, super, or new.target. These function expressions are best suited for non-method functions, and they cannot be used as constructors.

什么是 non-method functions? 非方法函数?

什么是方法，当 一个函数作为一个对象的属性值 时，称之为方法函数。
```js
//动态上下文时不使用箭头函数, this指向定义时所在的对象(父作用域), 而不是使用时的对象
var obj = {
  i: 10,
  b: () => console.log(this.i, this),
  c: function() {
    console.log( this.i, this)
  }
}
obj.b();
// undefined Window
obj.c();
// 10, Object {...}
```

***
## async await 异步
async函数返回一个promise对象, 通过调用then(), 获取返回值
```js
async function eg() {
  return 'this is an egg';
}
console.log(eg()); // Promise {<resolved>: "this is an egg"}
eg().then(res => {
  console.log(res); // this is an egg
})

async getFaceResult () {
    try {
        let location = await this.getLocation(this.phoneNum);  //等拿到location后在执行下一步
        if (location.data.success) {
            let province = location.data.obj.province;
            let city = location.data.obj.city;
            let result = await this.getFaceList(province, city);
            if (result.data.success) {
                this.faceList = result.data.obj;
            }
        }
    } catch(err) {
        console.log(err);
    }
}
```

***
showNum(j) {
    return function () {
        console.log(j)
    }
}
