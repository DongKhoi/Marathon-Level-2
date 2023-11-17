class AnimalExtends {
    protected sound: string;

    constructor(sound: string) {
        this.sound = sound;
    }
}

class Cat extends AnimalExtends {
    makeSound() {
        console.log(this.sound); // OK
    }
}

const cat3 = new Cat("Meow");
// console.log(cat.sound); // Lỗi - không thể truy cập protected property từ bên ngoài lớp và lớp con
