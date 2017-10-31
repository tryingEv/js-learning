console.log("hello world!");

// var num = 1;
// function testScrope()
// {
//     console.log("---------- num1 = " + num);
//     var num = 10;
//     console.log("--------------num2 " + num);
// }
// testScrope();
// console.log("------------- num3 " + num);

// if(num == 1){
//     var num = 5;
//     console.log("------ num4  " + num);
// }
// console.log("------ num5 " + num);


// let num1 = 5;
// if(num1 == 5)
// {
//     let num1 = 10;
// }
// console.log("------ num1 " + num1);

function MyError(msg)
{
    this.name = "my error!";
    this.message = msg;
}

class MyError1
{
    MyError1(msg)
    {
        this.name = " my error 1";
        this.message = msg;
    }
}

let num2 = 1;
function testScrope()
{
    var error = new MyError1("print num 1 error");
    try
    {
        console.log("---------- num1 = " + num2);
    }catch(error)
    {
        console.log("---------- print num1 error!!!!");
    }
    
    let num2 = 10;
    console.log("--------------num2 " + num2);
}
testScrope();
console.log("--------------num3 " + num2);

console.log("--------------name " + name);
var name = "shit";

let name1 = "jhon";
{
    let name1 = "hello";
}

console.log("--------------name1 " + name1);
