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

/// repalce string expression regular
// var welTech = "This is a product of Google, a year later, Facebook also buy Instagram";
// document.getElementById('welTech').innerHTML = welTech;


function changeText() {
    var str = document.getElementById('welTech').innerHTML;
    //var txt = str.replace('GOOGLE','Facebook'); // will have error
   
    var txt = str.replace('/Google/i','Facebook');
    console.log(txt);
    str.innerHTML = txt;
}

// convert string
var normalText = "hello, i am Tu";
var text2 = normalText.toUpperCase();
console.log(text2);

// concat: nối chuỗi
var txt1 = "TU";
var txt2 = "NGUYEN";
var fullname = txt1.concat(" ", txt2);
console.log(fullname);

// lấy từ đầu tiên trong chuỗi (vd: url) (trả về dạng unicode)
var txt="m300";
var getFirst = txt.charCodeAt(0);
console.log(getFirst);

// string - we can get first element easy
var stringFull = "Minh Tu";
var firstChar = stringFull[0];
console.log(firstChar);

// convert string to an array
var stringList = "A, B, C, D, E";
var arr = stringList.split(",");
console.log(arr);

// convert to string 
x = 100;
var y = x.toString();
console.log(y);