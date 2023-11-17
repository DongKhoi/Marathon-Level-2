// Định nghĩa interface cho hình học
interface Shape2 {
    calculateArea(): number;
  }
  
  // Định nghĩa các lớp cụ thể triển khai interface Shape
  class Circle2 implements Shape2 {
    constructor(private radius: number) {}
  
    calculateArea(): number {
      return Math.PI * this.radius ** 2;
    }
  }
  
  class Rectangle2 implements Shape2 {
    constructor(private width: number, private height: number) {}
  
    calculateArea(): number {
      return this.width * this.height;
    }
  }
  
  // Hàm sử dụng tính đa hình thông qua interface
  function printArea2(shape: Shape2): void {
    console.log("Area:", shape.calculateArea());
  }
  
  // Tạo các đối tượng của các lớp cụ thể
  const circle2 = new Circle2(5);
  const rectangle2 = new Rectangle2(4, 6);
  
  // Sử dụng hàm với các đối tượng khác nhau
  printArea2(circle);     // In ra: Area: 78.53981633974483
  printArea2(rectangle);  // In ra: Area: 24
  