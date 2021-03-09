//1. Array operations
// Head
// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

const array1: string[] = ["hola", "adios", "hasta luego"];

const head = ([first]: string[]) => <string>first;
console.log(head(array1));

//Tail
//Implementa una función tail (inmutable), tal que, dado un array como entrada ///devuelta todos menos el primer elemento. Utiliza rest operator.

const array2: string[] = ["hola", "adios", "hasta luego"];
const tail = ([, ...words]: string[]) => <string[]>words;

console.log(tail(array2));

//Init
//Implementa una función init (inmutable), tal que, dado un array como entrada ///devuelva todos los elementos menos el último. Utiliza los métodos que ofrecArray.prototype.

const array3: number[] = [1, 2, 3, 4, 5];
const init = (array: number[]) => <number[]>array.splice(0, array.length - 1);

console.log(init(array3));

//Last
// Implementa una función last (inmutable), tal que, dado un array como entrada // devuelva el último elemento.

const array4: number[] = [1, 2, 3, 4, 5];
const last = (array: number[]) => <number>array.pop();

console.log(last(array4));

// 2. Concat
// Implementa una función concat (inmutable) tal que, dados 2 arrays como // ///// entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.

const a: number[] = [1, 2, 3, 4];
const b: number[] = [5, 6, 7, 8, 9];

const concat = (a: number[], b: number[]) => <number[]>[...a, ...b];

console.log(concat(a, b));

// Opcional
// Implementa una versión del ejercicio anterior donde se acepten múltiples //arrays de entrada (más de 2).

const c: number[] = [10, 11, 12];
const d: number[] = [13, 24];

const concatMultiple = (...args:any[]) =>
  args.reduce((arg, currentArg) => [...arg, ...currentArg]);

console.log(concatMultiple(a, b, c, d));

// 3. Clone Merge
// Clone
// Implementa una función clone que, a partir de un objeto de entrada source ///// devuelva un nuevo objeto con las propiedades de source:
interface Name {
  name: string;
  surname: string;
  country: string;
}

const names: Name = { name: "Maria", surname: "Ibañez", country: "SPA" };

function clone(source: Name): Name {
  return { ...source };
}

console.log(clone(names));

// Merge
// Implementa una función merge que, dados dos objetos de entrada source y //  /// target, devuelva un nuevo objeto con todas las propiedades de target y de ///// source, y en caso de propiedades con el mismo nombre, source sobreescribe a /// target.

// Por ejemplo, dados estos 2 objetos:

const e: Name = { name: "Maria", surname: "Ibañez", country: "SPA" };
const f = { name: "Luisa", age: 31, married: true };

// el resultado de mezclar a sobre b sería:

// merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
//TIP: Puedes usar la función "clone" del apartado A.

function merge(source: Name, target: any) {
  return { ...clone(target), ...clone(source) };
}

console.log(merge(e, f));

//  4. Read Books
//  Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro. Un libro es un objeto con title como string y isRead como booleano. En caso de no existir el libro devolver false TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.
interface bookTypes {
  title: string;
  isRead: boolean;
}

const books: bookTypes[] = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

function isBookRead(books: bookTypes[], titleToSearch: string): boolean {
  return books.some((book) =>
    book.title === titleToSearch ? book.isRead : false
  );
}

// console.log( books.some((book) => (book.title === "Harry Potter y la piedra filosofal") ? book.isRead : false))

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
// Opcional
// Utiliza Typescript para añadir los tipos adecuados.

// 5. Slot Machine
// El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda. Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.

// Cuando se llame al método play el número de monedas se debe incrementar de forma automática y debe generar tres booleanos aleatorios que representarán el estado de las 3 ruletas. El usuario habrá ganado en caso de que los tres booleanos sean true, y por tanto deberá mostrarse por consola el mensaje:

// "Congratulations!!!. You won <número de monedas> coins!!";
// y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina. En caso contrario deberá mostrar otro mensaje:

// "Good luck next time!!".
// Ejemplo de uso

class SlothMachine {
  private coinCounter: number = 0;

  private boolRandom() {
    return Math.random() < 0.5;
  }

  play() {
    this.coinCounter++;

    const roulette1: boolean = this.boolRandom();
    const roulette2: boolean = this.boolRandom();
    const roulette3: boolean = this.boolRandom();

    if (roulette1 && roulette2 && roulette3) {
      console.log(`Congratulations!!!. You won ${this.coinCounter} coins`);
      this.coinCounter = 0;
    } else {
      console.log("Good Luck next time!!");
    }
  }
}

const machine1 = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
