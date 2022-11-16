// Практика с DOM. Сверстайте макет выше используя только DOM методы.
// Вам понадобится:
// document.createElement(‘{tagName}’);
// node.innerHTML = ‘{html-код}’;
// node.style.{anyStyle}
// node.setAttribute(атрибут, значение атрибута);
// Также надо будет задать атрибуты href ссылкам.

// Черная обводка - это не часть макета. Ее делать не нужно.
// Обратите внимание:
// блоки выравнены по центру
// ссылки находятся в один ряд
// все ссылки должны вести на соответствующие сайты
// каждая ссылка должна открываться в отдельной вкладке
// {/* <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum adipisci id odio explicabo, quam debitis corporis iusto aliquid veniam vitae! Tempora, architecto quo. Labore odio consequatur modi? Odio, esse laudantium.</h1>
// <a href="altshu/link.html" target ="_blank">Altshu</a>
// <a href="google/link.html" target ="_blank">Google</a>
// <a href="instagram/link.html" target ="_blank">Instagram</a> */}
let p = document.createElement('p');  
  p.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum adipisci id odio explicabo, quam debitis corporis iusto aliquid veniam vitae! Tempora, architecto quo. Labore odio consequatur modi? Odio, esse laudantium.";
  
  let body = document.body;
  document.body.append(p);
 
  p.style = `
  width: 400px;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid red;
  border-radius: 10px;
  margin: auto;
  `;
  let linkContainer = document.createElement('div');
   document.body.append(linkContainer);
 
  let a = document.createElement('a');
  a.href = 'https://altshu.com/';
  a.setAttribute('target', '_blank');
  a.innerText = 'altshu';
 linkContainer.append(a);


 
  let b = document.createElement('a');
  b.href = 'https://google.com/';
  b.setAttribute('target', '_blank');
  b.innerText = 'google';
 linkContainer.append(b);

    let c = document.createElement('a');
  c.href = 'https://instagram.com/';
  c.setAttribute('target', '_blank');
  c.innerText = 'instagram';
linkContainer.append(c);
 
linkContainer.style = `
  width: 400px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  `;



// let body = document.body;
// let h1 = document.createElement('h');
// h.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum adipisci id odio explicabo, quam debitis corporis iusto aliquid veniam vitae! Tempora, architecto quo. Labore odio consequatur modi? Odio, esse laudantium.';

// // console.log(text);
// node.innerHTML = ‘{html-код}’;
// node.style.{anyStyle}
// node.setAttribute(атрибут, значение атрибута);