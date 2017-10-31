// var person = {
//     name: "Nicholas",
//     age: 29,
//     job: "Software Engineer",
//     sayName: function(){
//         alert(this.name);
// } 
// };

// //factory model
// function createPerson(name, age, job)
// {
//     var p = 
//     {
//         name: name,
//         age: age,
//         job: job
//     };
//     return p;
// }

// var p1 = createPerson("liu", 27, "coder");
// console.log(p1);

//constructor
function Person(name, age, job)
{
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function()
    {
        console.log("my name is " + this.name);
    };
}
var p2 = new Person("na", 25, "teacher");
var p3 = new Person("p3", 25, "chairman");
// p2.sayName();
// console.log(p2);

function sayName(p)
{
    console.log(typeof(p));
    if(typeof(p) == "object")
    {
        console.log("sayName Out side " + p.name);
    }    
}
sayName(p3);


Person.prototype.introduceMyself = function()
{
    console.log("my name is " + this.name + " I'm " + this.age + " years old");
}
p2.introduceMyself();
p3.introduceMyself();

Person.prototype.habit = "run";
// console.log("------ p2 habit " + p2.habit);
// console.log("------ p3 habit " + p3.habit)
p2.habit = "reading";
console.log("------ p2 habit " + p2.habit);
console.log("------ p3 habit " + p3.habit);
console.log("------ p2 habit " + p2.__proto__.habit);
console.log("------ p3 habit " + p3.__proto__.habit);
console.log("p2 == p3 " + p2.__proto__ == p3.__proto__);

// console.log("------> p2 = " + p2 + ",  " + p2.sayName());

