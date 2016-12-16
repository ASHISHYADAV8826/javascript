var num=1234;
var st="abcd"
console.log(typeof num);


var mystring = "Hello, World!";
var x = mystring.length;
mystring[0] = 'L';
mystring[0]
console.log(typeof 'x');

var s = new String("foo");
console.log(typeof s);

var s1 = "2 + 2"; // Creates a string literal value 
var s2 = new String("2 + 2"); //Creates a String object 
console.log(eval(s1));//Returns the number 4 
console.log(eval(s2));


var str = "HELLO WORLD";
	var res = str.charAt(8)
	console.log(res);


var str="how are you";
	var res=str.charCodeAt(3)
	console.log(res);


var str="how are you";
	var res=str.codePointAt(6)
	console.log(res)


var str = "Hello world, welcome to the universe.";
    var n = str.indexOf("H");
    console.log(n);


 var str = "Hello planet earth, you are a great planet.";
    var n = str.lastIndexOf("r");
    console.log(n)


 var hege = ["Cecilie", "Lone"];
var stale = ["Emil", "Tobias", "Linus"];
var children = hege.concat(stale); 
console.log(children)



 var res = String.fromCharCode(66)	
 console.log(res)


  var res = String.fromCodePoint(72)	
 console.log(res)



  var str = "How are you doing today?";
    var res = str.split("you");
    console.log(res)


  var str = "Hello world!"; 
    var res = str.slice(1, 4);
    console.log(res)


  var str = "Hello world!"; 
    var res = str.substring(6,9);
    console.log(res)


var str = "Hello world!"; 
    var res = str.substr(3,9);
    console.log(res)



var str = "The rain in SPAIN stays mainly in the plain";
var res = str.match(/ai/gi); 
console.log(res)


var str = "Visit Microsoft!";
var res = str.replace("Microsoft", "World");
console.log(res)



	var str = "Visit kashmir";
var n = str.search("kashmir");
console.log(n)


var str = "Hello EVERYONE!";
var res = str.toLowerCase();
console.log(res)




var str = "not everyone!";
var res = str.toUpperCase();
console.log(res)


var str = "Hello world!";
var res=str.repeat(2);
console.log(res)
