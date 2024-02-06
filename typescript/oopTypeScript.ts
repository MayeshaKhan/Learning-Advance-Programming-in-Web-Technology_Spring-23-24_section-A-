class Employee{

    id: number;
    name: string;

    constructor(id: number, name: string)
    {
        this.id= id;
        this.name= name;

    }
    display():void{
        console.log(`ID = ${this.id}, Name = ${this.name}`)
    }

}

let emp = new Employee(1,"Steve")
emp.display();

//access modifier
class Employee1{
    private id: number;
    private name: string;
    protected age: number;
    public isOkay: boolean;

    constructor(id: number, name: string, age: number, isOkay: boolean)
    {
        this.id= id;
        this.name= name; 
        this.age = age;
        this.isOkay= isOkay;
    }
    display():void{
        console.log(`ID = ${this.id}, Name = ${this.name}, age= ${this.age},IsOkay= ${this.isOkay}`);
    }

}
let emp1 = new Employee1(1,"Steve",23, true)
emp1.display();

//generics
function displayGenerics<T>(id: T, name: T): void{
    console.log(`Id= ${id}, Name = ${name}`)
}

//Interfaces
interface IEmployee{
    id: number;
    name: string;
    display():void;
}
class Employee2 implements IEmployee{
    id: number;
    name: string;
    constructor(id:number, name: string)
    {
        this.id=id;
        this.name=name;
    }
    display(): void{
        console.log(`Id= ${this.id}, Name= ${this.name}`)

    }
}
let emp2 = new Employee2(1,"Steve")
emp2.display();



