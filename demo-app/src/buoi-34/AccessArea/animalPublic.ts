class Animal {
    public name: string;
    public height: number;
    //...

    constructor(name: string, height: number) {
        this.name = name;
        this.height = height;
    }

    makeSound() {
        console.log("Some generic sound");
    }

}

// const cat = new Animal("Cat", 50);
// console.log(cat); // OK

export default Animal;

