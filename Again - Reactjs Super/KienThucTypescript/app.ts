/**
 * Basic Type
 */

// string
let car = "Toyota";
let bike: string;
bike = "Winner";
// bike = 150 Loi ngay

// number
let num: number = 10;

// boolean
let isLoading: boolean = false;

// undefined
// let body = undefined

// null
let footer: null;

// any
// let person: any
// person = 10
// person = 'Something'
// person = false

/**
 * Object
 */

// let house = {}
// house.address = 'Da Nang'

let house: {
  address: string;
  color?: string;
} = {
  address: "",
};
house.address = "Da Nang";

/**
 * Array
 */

let products: any[] = [];
products.push(1);
products.push("VietNam");

// string[]
let names = ["Alex", "Ben"];
let addresses: string[] = [];
addresses.push("Da Nang");

// number[]
let numbers: number[] = [];
numbers = [1, 2, 3];

// object array
let people: {
  name: string;
  age: number;
}[] = [];
people.push({
  name: "Ducky",
  age: 27,
});

/**
 * Function
 */

const sum = (num1: number, num2: number): number => {
  return num1 + num2;
};

sum(1, 2);

const sub: (num1: number, num2: number) => number = (
  num1: number,
  num2: number
) => num1 - num2;

const handle = () => {
  console.log(123);
};

/**
 * Union
 */

let price: string | number | boolean;
price = "10";
price = 20;
price = false;

let body: { name: string | number } | { firstName: string } = {
  name: 100,
};

/**
 * Enum
 */

enum Sizes {
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
}

let size = Sizes.S;

/**
 * Interface
 */

// interface State {
//   name: string
//   isLoading: boolean
// }

// interface State {
//   age: number
// }

// let state: State = {
//   name: 'Dang',
//   isLoading: false,
//   age: 100
// }

// interface Name  {
//   name: string
// }

// interface Age {
//   age: number
// }

// interface Person = Name | Age

/**
 * Type
 */

// type State = {
//   name: string
//   isLoading: boolean
// }

// let state: State = {
//   name: 'Dang',
//   isLoading: false
// }

// type Name = {
//   name: string
// }

// type Age = {
//   age: number
// }

// type Person = Name | Age

// Mình thích dùng type hơn

const handleClick = <Type>(value: Type) => value;

let value = 100;
handleClick<string>("100");

/**
 * Class
 */

class Person1 {
  private name: string;
  age: number;
  readonly money: number = 40;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  /**
   * - Thuộc tính money được khai báo là readonly, nên thuộc tính đó chỉ được đọc thôi.
   * - Ở đây chúng ta sẽ gán thuộc tính money vào biến value và đọc nó => việc đó là đúng ✅
   * - Còn chúng ta gán thuộc tính money vào 1 số hay 1 chuỗi (vd: this.money = 100) thì nó bị lỗi liền ❌
   */
  handle() {
    let value = this.money;
  }
}

const alex = new Person1("Alex", 27);

/**
 * - Bởi vị thuộc tính name là private, nên thuộc tính đó chỉ được khai báo trong class Person1 thôi.
 * - Ở đây chúng ta gọi thuộc tính money bên ngoài class Person1, nên nó bị lỗi không thể run dòng code đó được.
 */
// alex.money = 200; // error ❌

class Person2 {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
  }
}

class Person_1 {
  constructor(public name: string, public age: number) {}
}
