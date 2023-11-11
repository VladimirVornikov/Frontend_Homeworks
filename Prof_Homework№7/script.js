/* Напишите класс NumberArray, который будет содержать сво-во array. В качестве значения св-ва необходимо 
сформировать массив с числовыми типами.К этому классу напишите список методов: 
1. getLastElem(). Метод должен всегда возвращать последний элемент массива
2. getAbs(). Метод должен возвращать абсолютное значение разницы первого и последнего элемента 
3. getSum(). Метод должен возвращать сумму всех элементов сво-ва array
4. setArray(n). Метод должен переопределить сво-во array на новый массив, где каждый элемент будет
умножен на аргумент n.
5. createObject(). Метод должен вернуть объект c количеством сво-йств равному количеству элементов массива 
сво-ва array. В качестве ключа сформируйте значение elem{n} 
 */



class NumberArray{
    constructor(...values) {
        this.array = []
        for (let value of values) {
            this.array.push(value)
        }
    }

    getLastElem() {
        return this.array[this.array.length - 1];
    }

    getAbs() {
        return Math.abs(this.array[0] - this.array[this.array.length - 1]);
    }
    getSum() {
        return this.array.reduce((accum, value) => {
            return accum + value;
        }, 0)
    }

    setArray(n) {
        return this.array.map( elem => elem * n);
    }

    createObject() {
        const newObj = {};
        for (let i = 0; i < this.array.length - 1; i++) {
            newObj[`elem${i+1}`] =  this.array[i]
        }
        return newObj;
    }

}

const newArray = new NumberArray(1,2,3,4,5)

console.log(newArray.getLastElem());
console.log(newArray.getAbs());
console.log(newArray.getSum());
console.log(newArray.setArray(2));
console.log(newArray.createObject());

