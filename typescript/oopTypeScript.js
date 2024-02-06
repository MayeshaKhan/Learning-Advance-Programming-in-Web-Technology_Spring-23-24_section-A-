var Employee = /** @class */ (function () {
    function Employee(id, name) {
        this.id = id;
        this.name = name;
    }
    Employee.prototype.display = function () {
        console.log("ID = ".concat(this.id, ", Name = ").concat(this.name));
    };
    return Employee;
}());
var emp = new Employee(1, "Steve");
emp.display();
//access modifier
var Employee1 = /** @class */ (function () {
    function Employee1(id, name, age, isOkay) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.isOkay = isOkay;
    }
    Employee1.prototype.display = function () {
        console.log("ID = ".concat(this.id, ", Name = ").concat(this.name, ", age= ").concat(this.age, ",IsOkay= ").concat(this.isOkay));
    };
    return Employee1;
}());
var emp1 = new Employee1(1, "Steve", 23, true);
emp1.display();
//generics
function displayGenerics(id, name) {
    console.log("Id= ".concat(id, ", Name = ").concat(name));
}
var Employee2 = /** @class */ (function () {
    function Employee2(id, name) {
        this.id = id;
        this.name = name;
    }
    Employee2.prototype.display = function () {
        console.log("Id= ".concat(this.id, ", Name= ").concat(this.name));
    };
    return Employee2;
}());
var emp2 = new Employee2(1, "Steve");
emp2.display();
