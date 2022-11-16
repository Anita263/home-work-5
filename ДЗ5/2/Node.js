// Создайте новый Node.js проект. Укажите, что тип модулей будет ECMAScript ("type": "module" в package.json).
// Импортируйте модуль os.
// Следуя документации выведите в консоль следующую информацию:
// путь к текущей рабочей папке (homedir)
// название текущего хоста (hostname)
// версию ОС
// тип ОС


import os from 'os';
console.log(os.homedir());
console.log(os.hostname());
console.log(os.version());
console.log(os.type());





