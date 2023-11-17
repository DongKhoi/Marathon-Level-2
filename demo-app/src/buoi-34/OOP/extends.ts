import Animal from "../AccessArea/animalPublic";

class Dog extends Animal {
    // Có thể thêm thuộc tính hoặc phương thức mới
    bark() {
        console.log("Woof! Woof!");
    }
}
export default Dog;

const dog = new Dog("Dog", 20);
dog.makeSound(); // In ra "Some generic sound"
dog.bark(); // In ra "Woof! Woof!"



