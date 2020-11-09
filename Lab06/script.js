
String.prototype.filter = function(word) {
    return this.split(" ").filter(w => w !== word).join(" ");
}


Array.prototype.bubbleSort = function() {
    var swapp;
    var n = this.length-1;
    var x=this;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] > x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
    return x;
}

var Person = function() {};
Person.prototype.initialize = function(name, age) {    
	this.name = name;    
	this.age = age; 
}

Person.prototype.describe = function() {    
	return this.name + ", " + this.age + " years old."; 
}

var Student = function() {}; 
Student.prototype = new Person();
Student.prototype.learn = function(subject) {    
	console.log(this.name + " just learned " + subject); 
}

var me = new Student();
me.initialize("John", 25); 
me.learn("Inheritance");

var Teacher = function() {};
Teacher.prototype = new Person();
Teacher.prototype.teach  = function (subject){
	return this.name + " is now teaching " + subject;
}

var teacher = new Teacher();
teacher.initialize("George");
let subject = "WAP"; 

console.log("This house is nice!" === "This house is not nice!".filter("not") ? "String filter : TEST SUCCEED" : "String filter : TEST FAILED");
console.log([6,4,0, 3,-2,1].bubbleSort(), "Bubble Sort : TEST SUCCEED");
console.log("George is now teaching " + subject === teacher.teach(subject) ? "Teacher class : TEST SUCCEED" : "Teacher class : TEST FAILED");