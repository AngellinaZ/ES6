//确定一个字符串是否包含在另一个字符串中
/*
    indexOf(): 返回某个指定的字符串值在字符串中首次出现的位置, 否则返回-1。
    includes()：返回布尔值，表示是否找到了参数字符串。
    startsWith()：返回布尔值，表示参数字符串是否在源字符串的头部。
    endsWith()：返回布尔值，表示参数字符串是否在源字符串的尾部。
*/
var s = 'Hello world!';

s.indexOf('world', 3) // 6 从第3个字符找起
s.startsWith('world', 6) // true 从第6个字符找起
s.endsWith('Hello', 5) // true  在前5个字符内找
s.includes('Hello', 6) // false 从第6个字符找起


/*repeat(): 返回一个新字符串，表示将原字符串重复n次。n > 0 ，取整，字符串转换成数字，NaN等同0*/

/*padStart()用于头部补全，padEnd()用于尾部补全。 第一个参数用来指定字符串的最小长度，第二个参数是用来补全的字符串。*/
 
/*模板字符串*/ 
    //用反引号（`）标识: 普通字符串，多行字符串，在字符串中嵌入变量。
    let [name, time] = ["Bob", "today"];
    console.log(`Hello ${name}, 
        how are you ${time}?`);
    //Hello Bob, 
    //    how are you today?

    //用反斜杠转义 \`
    var greeting = `\`Yo\` world!`; //"`YO`,world!"

    // 所有模板字符串的空格和换行, 都是被保留的
    // 大括号{}内部可以放入任意的js表达式，运算， 引用对象属性，调用函数
    function fn() {
        return "Hello world";
    } 
    `foo ${fn()} bar`

    //如果需要引用模板字符串本身，在需要时执行 
    // 写法一
    let str = 'return ' + '`Hello ${name}!`';
    let func = new Function('name', str); //new Function(): 第一个参数；第二个函数体，类型为String 
    func('Jack') // "Hello Jack!"

    // 写法二
    let str = '(name) => `Hello ${name}!`';
    let func = eval.call(null, str);
    func('Jack') // "Hello Jack!"

/*模板编译*/

/*标签模板*/
//标签模板其实不是模板，而是函数调用的一种特殊形式。“标签”指的就是函数，紧跟在后面的模板字符串就是它的参数。
var total = 30;
var msg = passthru`The total is ${total} (${total*1.05} with tax)`;

function passthru(literals) {
console.log(literals)
console.log(arguments)
  var result = '';
  var i = 0;
console.log(literals.length);
console.log(arguments.length);
    
  while (i < literals.length) {
    result += literals[i++];
    console.log(result);
    if (i < arguments.length) {
      result += arguments[i];
        console.log('a   '+result);
    }
  }

  return result;
}

msg 

/*String.raw(): 模板字符串的处理函数，返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串，对应于替换变量后的模板字符串。*/
String.raw({ raw: 'test' }, 0, 1, 2);
// 't0e1s2t'

// 等同于
String.raw({ raw: ['t','e','s','t'] }, 0, 1, 2);  ?????????
