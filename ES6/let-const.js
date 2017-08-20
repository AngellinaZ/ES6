/*2.
    *变量的赋值解构
*/
/*(1).数组的赋值解构*/


/*(2).对象的赋值解构*/
    //内部机制：先找到同名属性，然后赋值给对应的变量
    //foo 是匹配的模式，baz 才是变量
    let {foo: fo, bar: baz} = {foo: 'aaa', bar: 'bbb'};

    //嵌套解构
    let obj = {
        p: [
            'hello',
            {y: 'xasdf'}
        ]
    };
    let { p: [x, {y}] } = obj; //p 是模式
    //let {p, p:[x, {y}] } = obj; //第一个p是变量 = ["hello", {y: "xasdf"}];

    var {x: y = 3} = {x: 5}; //y = 5;

    //如果解构失败，变量的值等于undefined
    let {foo} = {bar: 'baz'};
    foo; //undefined;

    //如果解构模式是嵌套的对象，而且子对象所在的父属性不存在，将报错
    let {foo: {bar}} = {baz: 'baz'}; //因为foo等于undefined，再取子属性就会报错

    //将一个已经声明的变量用于解构赋值
    let c;
    ({c} = {c: 1});

    //由于数组本质是特殊的对象，因此可以对数组进行对象属性的解构
    let arr = [1, 2, 3];
    let {0: first, [arr.length - 1]: last} = arr;
    first;//1
    last;//3


/*(3).字符串的解构赋值 ----> 字符串被转换成了一个类似数组的对象 */
    const [a, b, c, d, e] = 'hello';
    a // "h"

    //类似数组的对象都有一个length属性
    let {length : len} = "heasdfasdf";
    len; // 10


/*(4).数值和布尔值的解构赋值 ----> 数值和布尔值，则会先转为对象*/
    let {toString: s} = 123;
    s === Number.prototype.toString //true;
    let {toString: s} = true;
    s === Number.prototype.toString //true;

//只要等号右边的值不是对象或数组，就先将其转为对象。由于undefined和null无法转为对象，所以报错


/*(5).函数参数的解构赋值*/
    function add([x, y]) {
        return x + y;
    }
    add([1,2]); //3

    [[1, 2], [3, 4]].map((a, b) => a + b); // [3, 7 ]

    //为变量x和y指定默认值
    function move ({x = 0, y = 0} = {}) {
        return [x, y];
    }
    move({x: 3, y: 8}); // [3, 8]
    move({x: 3}); // [3, 0]
    move({}); // [0, 0]
    move(); // [0, 0]

    //为参数指定默认值
    function move({x, y} = {x: 0, y: 0}) {
        return [x, y];
    }
    move({x: 3, y: 8}); // [3, 8]
    move({x: 3}); // [3, undefined]
    move({}); // [undefined, undefined]
    move(); // [0, 0]

//不能使用圆括号
    //1.变量申明语句
    //2.函数参数
    //3.赋值语句的模式

//赋值语句的非模式部分，可以使用圆括号。


/*(6).用途*/
//1.交换变量的值
    let x = 1;
    let y = 2;
    [x, y] = [y, x];

//2.从函数返回多个值
    //返回一个数组
    function example() {
        return [1, 2, 3];
    }
    let [a, b, c] = example();
     
    //返回一个对象
    function example2() {
        return {
            foo: 1,
            bar: 2
        }
    }
    let {foo, bar} = example2();

//3.函数参数的定义 : 方便将一组参数与变量名对应起来
    // 参数是一组有次序的值
    function f([x, y, z]) {...}
    f([1, 2, 3]);

    // 参数是一组无次序的值
    function f({x, y, z}) {...}
    f({z: 2, x: 3, y: 4});

//4.提取JSON数据
    let jsonData = {
        id: 42,
        status: 'ok',
        data: [561, 233]
    };
    let {id, status, data: number} = jsonData;
    console.log(id, status, number); // 42, 'ok', [561, 233]

    //5.函数参数的默认值
    jQuery.ajax = function (url, {
      async = true,
      beforeSend = function () {},
      cache = true,
      complete = function () {},
      crossDomain = false,
      global = true,
      // ... more config
    }) {
      // ... do stuff
    };

//6.遍历Map结构  
    var map = new Map();
    map.set('first', 'hello');
    map.set('second', 'world');

    for (let [key, value] of map) {
        console.log(key + "is" + value);
    }
    // first is hello
    // second is world

    //如果只想获取键名，或者只想获取键值，可以写成下面这样。
    // 获取键名
    for (let [key] of map) {
      // ...
    }
    // 获取键值
    for (let [,value] of map) {
      // ...
    }

//7.输入模块的指定方法
    //加载模块时，往往需要指定输入哪些方法。解构赋值使得输入语句非常清晰。
    const { SourceMapConsumer, SourceNode } = require("source-map");