//const message = "hello";
//function saySomething(message: string = 'whats up'){
//	console.log(message);
//}
//saySomething();
var Greeter = (function () {
    function Greeter() {
    }
    Greeter.prototype.saySomething = function (message) {
        if (message === void 0) { message = "Cruel World"; }
        return message + ' something';
    };
    return Greeter;
}());
var greeter = new Greeter();
greeter.saySomething("12345432");
//# sourceMappingURL=magic.js.map