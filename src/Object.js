/*
*  Create Object
*
*
*/

//Factory type 工厂模式，函数返回一个对象
function CreateStudent(name, age, schoolNumber)
{
    var student = {"name" : name, "age" : age, "schoolNumber" : schoolNumber};
    student.SayHello = function()
    {
        console.log("hello, name = " + student.name  + 
        ", age = " + student.age + ", school number = " + student.schoolNumber);
    }

    return student;
}
var s = CreateStudent("Jhon", 18, 3576);
s.SayHello();



//Constructor type 构造函数模式
function Worker(name, company, job)
{
    this.name = name;
    this.company = company;
    this.job = job;
    this.Introduce = function()
    {
        console.log("hello, name = " + this.name  + 
        ", company = " + this.company + ", job = " + this.job);
    }
}
var w = new Worker("xia", "Locoy Joy Company", "Coder");    
w.name = "Jodon";
w.Introduce();
//设置name为只读属性
Object.defineProperty(w, "name", 
{
    writable:false,
    value : "Fuck you"
});
w.name = "f";
w.Introduce();



//原型模式
function Person()
{
}
var p = new Person();
console.log("p name " + p.name);

//重新定义原型对象，此后创建的对象都讲具有原型对象的属性
Person.prototype = 
{
    Constructor : Person,
    name : "personName",
    age : 5,
    Introduce : function()
    {
        console.log("I'm a Person Obj, name = " + Person.prototype.name  + 
        ", age = " + Person.prototype.age);
    }
};

//对象自身没有name属性，因此name为原型对象中的属性
var p1 = new Person();
var p2 = new Person();
console.log("p1 ----- name " + p1.name);
console.log("p2 ----- name " + p2.name);

//修改Person中的原型对象name属性，则所p1, p2中原型对象中的name属性都为p1
p1.__proto__.name = "p1";
// console.log("-------- __protp__ == Person.protoType " + (p1.__proto__ == p2.__proto__) + "  ,  " + 
// Person.prototype == p1.__proto__);
// Person.prototype.name = "p1";

console.log("-------- p1.__proto == p2.__proto " + (p1.__proto__ == p2.__proto__));
console.log("------- Person.prototype == p1.__proto__  " + (Person.prototype == p1.__proto__));
console.log("p1 ----- name " + p1.name);
console.log("p2 ----- name " + p2.name);

//向p2对象添加name属性，此时会覆盖掉原型对象中的name属性
p2.name = "p2 name";

//组合模式
function People(name, age)
{
    this.name = name;
    this.age = age;
}
People.prototype = {
    Introduce : function()
    {
        console.log("------- name " + this.name + " age = " + this.age);
    }
};

var pe = new People("yeha", 18);
pe.Introduce();


function fabonacciNumber(index)
{
    if(index == 1 || index == 2)
    {
        return 1;
    }
    if(index > 2)
    {
        return fabonacciNumber(index -1) + fabonacciNumber(index -2);
    }
}
console.log(fabonacciNumber(1));//1, 1, 2, 3, 5, 8



