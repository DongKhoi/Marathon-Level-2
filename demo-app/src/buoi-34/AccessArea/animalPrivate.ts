class AnimalPrivate {
    private sound: string;

    constructor(sound: string) {
        this.sound = sound;
    }

    makeSound() {
        console.log(this.sound); // OK
    }
}

const cat2 = new AnimalPrivate("Meow");
//console.log(cat2.sound); // Lỗi - không thể truy cập private property từ bên ngoài lớp
