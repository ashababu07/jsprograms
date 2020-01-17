// var output = (function(x)
// {
// delete x;
// console.log(x)
// return x;
// }
// )(0);
// console.log(output);


var X = { Foo : 1};
var output = (function()
{
delete X.foo;
return X.foo;
}
)();
console.log(output);

