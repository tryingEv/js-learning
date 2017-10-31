/*
*  闭包测试
*
*
*/

//private value
function Student(name, age, number)
{
    this.Name = function()
    {
        return name;
    };

    this.Age = function()
    {
        return age;
    };

    this.StudentNumber = function()
    {
        return number;
    };
}
var s = new Student("Jhon", 18, 12345678);
console.log("I'm a student, my name is " + s.Name() 
+ ", i'm " + s.Age() + " years old, my school number is " 
+ s.StudentNumber());