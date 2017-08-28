/*
    *Number.isFinite()：检查一个数是否有限，非数值一律返回false
    *Number.isNaN()：判断是否是NaN，只有对于NaN才返回true，非NaN一律返回false。
    -----只对数值有效
*/
Number.isFinite(15); // true
Number.isFinite(Infinity); // false
Number.isFinite(-Infinity); // false
Number.isNaN(NaN) // true
Number.isNaN(15) // false