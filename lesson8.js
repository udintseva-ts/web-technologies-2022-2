// Задание 1
const students = [
    {name: "Павел", age: 20},
    {name: "Иван", age: 20},
    {name: "Эдем", age: 20},
    {name: "Денис", age: 20},
    {name: "Виктория", age: 20},
    {age: 40}
]

const result = pickPropArray(students,"name");

console.log(result);

// [ 'Павел', 'Иван', 'Эдем', 'Денис', 'Виктория' ]

function pickPropArray(students, propertyName) {
    return students.filter(student => student[propertyName] != null).map(student => student[propertyName])
}

/*Задание 2*/
function createCounter()
{
    let count=0;
    return function ()
    {
        count++;
        console.log(count);
    }
}
const counter1 = createCounter()
counter1() // 1
counter1() // 2

const counter2 = createCounter()
counter2() // 1
counter2() // 2

/*Задание 3*/
function spinWords(str)
{
    let rts = str.split(" ");
    for(let i = 0; i < rts.length; i++)
    {
        if(rts[i].length >= 5)
        {
            rts[i] = rts[i].split("").reverse().join("");
        }
    }
    return rts.join(" ");
}

const result1 = spinWords( "Привет от Legacy" )
console.log(result1) // тевирП от ycageL

const result2 = spinWords( "This is a test" )
console.log(result2) // This is a test

/*Задание 4*/
function getElementsIndexes(nums, target) {
    for (let i = 0; i < nums.length; i++)
        for (let j = i; j < nums.length; j++)
            if (nums[i] + nums[j] === target)
                return [i, j];

    return [];
}

/*Задание 5*/
