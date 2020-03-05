# Functional Programming
> Functional programming adalah paradigma pemrograman yang berkutat pada komputasi yang terjadi di dalam fungsi matematis dan menghindari terjadinya perubahan data.Yang dimaksud dengan fungsi matematis sendiri adalah sebuah hubungan antara input yang akan mengembalikan output. Contoh paling sederhana adalah sebuah fungsi kuadrat, misalnya f(x) = x * x. contohnya f(5) = 25.[ sumber](https://medium.com/@adhywiranata/mengenal-paradigma-functional-programming-di-javascript-59d5eea7e2ac)


### FFP
1. Hindari penggunaan variable let dan var (mutable variable)
2. Hindari perubahan pada sebuah array, object, map maupun set, lebih baik membuat baru.
3. Hindari melakukan loop pada function, contoh: total harus pakai reduce() pada sebuah Array.

### Pure function
Sebuah function yang bersifat pure tanpa mengubah value dari variabel.
```sh
function sum(a,b){return a + b};
//not like this
const a = 10
function multiply(b){return a * b};
//not like this
let b = 9
function divide(a){
    b = b % 2 == 0 ? b : b + 1
    return b/2
}
```
##### Callback & High Order Functions
Sebuah function yang meminta parameter sebuah function dan menjalan function tersebut.
- A higher-order function is a function that takes another function(s) as an argument(s) and/or returns a function to its callers.
- A callback function is a function that is passed to another function with the expectation that the other function will call it.
```sh
function hallo(a, b) {
    return b() + 'a'
}
function salam(){
    return 'Selamat Pagi'
}
console.log(hallo('Name',salam));
```

### Recursive Functions
Sebuah function yang memanggil dirinya sendiri.
```sh
function rekursif(a){
    if(a < 10){
        return rekursif(a += 1)
    }
    else{
        return 'Sudah mencapai sepuluh'
    }
}
rekursif(1);
```
##### Methods Array
Method pada array seperti filter, map, reduce, sort, forEach dll. sudah menerapkan callback. Beberapa method array mengermbalikan nilai array baru.

# Unit Testing
Unit testing merupakan proses pengujian pada komponen yang terkecil dari suatu sistem, biasanya berupa function.
Tujuannya untuk memastikan bahwa setiap function berjalan sebagaimana mestinya dengan membandingkan ekspektasi dengan realita.

Tools untuk melakukan testing di JavaScript ada:
- Jest
- Mocha/Chai
- Jasmine
- Ava
- Tape


### TTD
TDD (Test Driven Development) merupakan sebuah metodologi pengembangan sistem dengan mengedepankan testing untuk memastikan bahwa sistem berjalan dengan semestinya.

#### Process
Beberapa proses yang dilakukan selama pengembangan sistem dengan TDD:
- Skenario testing pada setiap komponen.
- Development skenario komponen sampai lulus testing.
- Menyusun semua komponen yang sudah testing.
- Menggabungkan semua testing hingga sistem selesai. 

#### BDD
BDD (Behavior Driven Test) merupakan kebalikan dari BDD. Metodologi BDD lebih mengedepankan behavior dari suatu sistem dimana hanya berfokus terhadap harapan dari client bahwa sistem berjalan sesuai harapan dari client. 

#### Process
Beberapa proses yang dilakukan dalam metodologi BDD:
- Skenario testing pada setiap behavior.
- Memastikan sudah lulus pada behavior test.
- Deployment.

### Jest
Sebuah framework testing pada JavaScript yang mengedepankan kesederhanaan.
Installation
```sh
npm i --save-dev jest
```

#### Implementation
```sh
// file src.
function sum(a, b) {
  return a + b;
}
module.exports = sum;

// file test
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

```