//1. Array operations
// Head
// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
      to[j] = from[i];
    return to;
  };
var array1 = ["hola", "adios", "hasta luego"];
var head = function (_a) {
  var first = _a[0];
  return first;
};
console.log(head(array1));
//Tail
//Implementa una función tail (inmutable), tal que, dado un array como entrada ///devuelta todos menos el primer elemento. Utiliza rest operator.
var array2 = ["hola", "adios", "hasta luego"];
var tail = function (_a) {
  var words = _a.slice(1);
  return words;
};
console.log(tail(array2));
//Init
//Implementa una función init (inmutable), tal que, dado un array como entrada ///devuelva todos los elementos menos el último. Utiliza los métodos que ofrecArray.prototype.
var array3 = [1, 2, 3, 4, 5];
var init = function (array) {
  return array.splice(0, array.length - 1);
};
console.log(init(array3));
//Last
// Implementa una función last (inmutable), tal que, dado un array como entrada // devuelva el último elemento.
var array4 = [1, 2, 3, 4, 5];
var last = function (array) {
  return array.pop();
};
console.log(last(array4));
// 2. Concat
// Implementa una función concat (inmutable) tal que, dados 2 arrays como // ///// entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.
var a = [1, 2, 3, 4];
var b = [5, 6, 7, 8, 9];
var concat = function (a, b) {
  return __spreadArray(__spreadArray([], a), b);
};
console.log(concat(a, b));
// Opcional
// Implementa una versión del ejercicio anterior donde se acepten múltiples //arrays de entrada (más de 2).
var c = [10, 11, 12];
var d = [13, 24];
var concatMultiple = function () {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return args.reduce(function (arg, currentArg) {
    return __spreadArray(__spreadArray([], arg), currentArg);
  });
};
console.log(concatMultiple(a, b, c, d));
var names = { name: "Maria", surname: "Ibañez", country: "SPA" };
function clone(source) {
  return __assign({}, source);
}
console.log(clone(names));
// Merge
// Implementa una función merge que, dados dos objetos de entrada source y //  /// target, devuelva un nuevo objeto con todas las propiedades de target y de ///// source, y en caso de propiedades con el mismo nombre, source sobreescribe a /// target.
// Por ejemplo, dados estos 2 objetos:
var e = { name: "Maria", surname: "Ibañez", country: "SPA" };
var f = { name: "Luisa", age: 31, married: true };
// el resultado de mezclar a sobre b sería:
// merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
//TIP: Puedes usar la función "clone" del apartado A.
function merge(source, target) {
  return __assign(__assign({}, clone(target)), clone(source));
}
console.log(merge(e, f));
var books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

const isBookRead = (books, titleToSearch) => books.some((book) => book.title === titleToSearch && book.isRead);

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
var SlothMachine = /** @class */ (function () {
  function SlothMachine() {
    this.coinCounter = 0;
  }
  SlothMachine.prototype.boolRandom = function () {
    return Math.random() < 0.5;
  };
  SlothMachine.prototype.play = function () {
    this.coinCounter++;
    var roulette1 = this.boolRandom();
    var roulette2 = this.boolRandom();
    var roulette3 = this.boolRandom();
    if (roulette1 && roulette2 && roulette3) {
      console.log("Congratulations!!!. You won " + this.coinCounter + " coins");
      this.coinCounter = 0;
    } else {
      console.log("Good Luck next time!!");
    }
  };
  return SlothMachine;
})();
var machine1 = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
