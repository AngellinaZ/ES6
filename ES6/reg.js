/*RegExp 构造函数*/
    //es5
    var regx = new RegExp('xvs', i);  //(字符串, 修饰符)
    var regx1 = new RegExp(/xvs/i)    //(正则表达式)
    //--->等价于 var regex = /xyz/i;

    var flsag = new RegExp(/abc/ig, 'i').flags; //返回 "i"

/*字符串的正则方法*/
    //字符串对象共有4个方法，可以使用正则表达式：match()、replace()、search()、split()。

/*u 修饰符*/
    //Unicode模式，用来正确处理大于 \uFFFF 的Unicode字符，表示会正确处理四个字节的UTF-16编码
    //\uD83D\uDC2A是一个四个字节的 UTF-16 编码，代表一个字符
    /^\uD83D/u.test('\uD83D\uDC2A') // false  ES6识别其为一个字符
    /^\uD83D/.test('\uD83D\uDC2A') // true   ES5 不支持四个字节的 UTF-16 编码，会将其识别为两个字符，导致第二行代码结果为true。

/*y 修饰符 --- '粘连'*/

 
/*sticky 属性*/
    //与y修饰符相匹配，ES6 的正则对象多了sticky属性，表示是否设置了y修饰符。
    var r = /hello\d/y;
    r.sticky // true

/*flags 属性: 返回正则表达式的修饰符。*/
    // ES5 的 source 属性, 返回正则表达式的正文
    /abc/ig.source  // "abc"
    
    // ES6 的 flags 属性, 返回正则表达式的修饰符
    /abc/ig.flags   // 'gi'
    