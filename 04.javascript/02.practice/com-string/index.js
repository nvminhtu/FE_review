var strDemo = "TAO QUYET TAM";
var dodai = strDemo.length;
console.log(dodai);

var strPost = "Lay vi tri";
var pos = strPost.lastIndexOf('vi');
console.log(pos);

var fruits = "Apple, Orange, Lemon";
var getFruit = fruits.slice(6,12); // slice from where to where

/// 
console.log(getFruit);

/// 
var removeFirst = fruits.slice(8);
console.log(removeFirst);

/// counting from the end ( if we use minus sign)
var removeEnd = fruits.slice(-5);
console.log(removeEnd);

/// or use substr - can use length for slicing
var removeEndEle = fruits.substr(1,4); // from, length to get
console.log(removeEndEle);