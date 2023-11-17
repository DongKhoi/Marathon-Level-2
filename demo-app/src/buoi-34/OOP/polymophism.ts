// Lớp cha Shape
class Shape {
    constructor(public name: string) {}

    calculateArea(): number {
        return 0;
    }
}

// Lớp con Circle kế thừa từ lớp cha Shape
class Circle extends Shape {
    constructor(public radius: number) {
        super('Circle');
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

// Lớp con Rectangle kế thừa từ lớp cha Shape
class Rectangle extends Shape {
    constructor(public width: number, public height: number) {
        super('Rectangle');
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}

// Hàm sử dụng tính đa hình
function printArea(shape: Shape): void {
    console.log(`Area of ${shape.name}: ${shape.calculateArea()}`);
}

// Tạo đối tượng Circle và Rectangle
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

// Gọi hàm sử dụng tính đa hình
printArea(circle);      // In ra diện tích của hình tròn
printArea(rectangle);   // In ra diện tích của hình chữ nhật
