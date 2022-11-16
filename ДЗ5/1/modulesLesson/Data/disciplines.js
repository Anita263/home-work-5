// В disciplines.js создайте и экспортируйте массив объектов вида:
// {
//   discipline: ‘Язык JavaScript’,
//   	  teacher: ‘Халид’
// 	}
// В массиве должно быть минимум 4 таких объекта.
// Импортируйте эти массивы в index.js и там выведите их в консоль.

let myArray = [ 
{
discipline: 'Язык JavaScript',
teacher: 'Халид',
},
{ 
pupils: ['Лена', 'Азат', 'Ксения', 'Павел', 'Анна'],
traningOfDay: ['Monday', 'Wednessday', 'Friday'],
},
{
studyingTime: '18.00 - 20.30',
break: '10 minutes',
},
{
startMonth: 'Jule',
finidhMonth: 'December',
}
];
console.log(myArray);
module.export = myArray;