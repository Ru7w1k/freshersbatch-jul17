
// class Person
function Person(firstName) {
    this.firstName = firstName;
};

Person.prototype.walk = function() {
    console.log("I'm Walking!");
};

Person.prototype.sayHello = function() {
    console.log("Hello, I'm " + this.firstName);
};

// class Student : Person
function Student(firstName, subject) {
    // call base class constructor
    Person.call(this, firstName);

    this.subject = subject;
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.sayHello = function() {
    console.log("Hello, I'm " + this.firstName + " and I'm studying " + this.subject);
};

Student.prototype.goodBye = function() {
    console.log("Goodbye!");
};


// main function
function load() {

    var person1 = new Person("Person");
    var student1 = new Student("Student", "Physics");

    person1.walk();
    person1.sayHello();
    
    student1.sayHello();
    student1.walk();
    student1.goodBye();

    Object.defineProperty(student1, "newKey", {
        get: function() {
            return this.subject;
        },
        set: function(value) {
            this.subject = value;
        },
        enumerable: true,
        configurable: true
    });

    console.log("NewKey : " + student1.newKey);
    student1.newKey = "TestKey";
    console.log(" Subject :" + student1.subject);
    console.log(" NewKey :" + student1.newKey);
};

(function() {
    console.log('IIFE');
}());