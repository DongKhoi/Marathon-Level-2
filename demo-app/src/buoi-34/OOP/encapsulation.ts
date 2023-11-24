class EncapsulatedAnimal {
    private sound: string;

    constructor(sound: string) {
        this.sound = sound;
    }

    makeSound() {
        console.log(this.sound);
    }
}

const encapsulatedCat = new EncapsulatedAnimal("Meow");
encapsulatedCat.makeSound(); // In ra "Meow"
// encapsulatedCat.sound; // Lỗi - không thể truy cập private property từ bên ngoài lớp
