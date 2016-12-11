//const message = "hello";
//function saySomething(message: string = 'whats up'){
//	console.log(message);
//}
//saySomething();

class Greeter{
	saySomething(message: string = "Cruel World"){
	  return message + ' something';
	}
}
var greeter = new Greeter();
greeter.saySomething("12345432");