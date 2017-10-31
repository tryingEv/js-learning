// // var a = 2;
// function foo()
// {
//     console.log("foo----> " + this.a);
// } 

// // var a = 2;
// // foo();

// var obj =
// {
//     foo: foo,
//     a: 0
// };

// var obj1 =
// {
//     o: obj,
//     a: 1
// };
// obj1.o.foo();

// function doFoo(fun)
// {
//     var a = 5;
//     fun();
// }
// doFoo(obj.foo);

function foo()
{
    console.log("-----> a= " + a);
}
foo();
var a = 5;


