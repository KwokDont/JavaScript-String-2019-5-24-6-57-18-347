// 阅读以上推荐链接，了解所有的JavaScript字符串方法。


// 完成下面程序，将`name`变量中的字母全部转为为大写，输出：`'HELLO'`。
var name = 'hello';
// TODO write your code here...
console.log(name.toUpperCase());


// 完成下面程序，将sentence变量中的所有单词首字母变为大写，输出：'Good Afternoon, Mr Mike.'。
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
function upperFirstChar(str){
	str = str.split(" ");
	for(var i = 0 ; i < str.length ; i++){
		var firstChar = str[i].substring(0,1);
		var temp = firstChar.toUpperCase();
		str[i] = str[i].replace(firstChar,temp);
	}
	str = str.join(" ");
	return str;
}
upperFirstChar(sentence);


// 完成下面程序，将money变量中的金额提取出来，输出：20。
var money = '￥20';
//TODO write your code here...
console.log(money.match(/[\d]+|[\D]+/g)[1]);