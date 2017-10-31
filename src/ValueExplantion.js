//变量的解构
var [a, b, c] = [,2,3];
console.log("----- [a, b, c] ", a, b, c);

//解构出错
class MyError
{
    constructor(msg)
    {
        this.message = msg;
        this.name = "Explaintion Error!"
    }
}

var error = new MyError("Explaintion Error!");
try {
    let [x1, [x2, x3]] = [1, 2];
} catch (error) {
    let [x1, [x2, x3]] = [1, [3, 2]];
}

console.log("----- [x1, [x2, x3]] = [1, 2] ", x1, x2, x3);