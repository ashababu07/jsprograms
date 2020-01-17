var x1;
var z1 = [100, 2000, 4000];
console.log(z1);
//creating function
function add() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var i = args_1[_a];
        sum += i;
        //var result=sum+i
    }
    console.log("result", sum);
}
add(10, 20, 30, 40);
