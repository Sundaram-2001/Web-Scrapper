const axios=require("axios");
const cheerio=require("cheerio");
const pretty=require("pretty");

const markup = `
<ul class="cars">
  <li class="cars_mercedes"> E63-AMG </li>
  <li class="cars_BMW"> M5 Competition</li>
</ul>
`;

//
const $=cheerio.load()

const BMW=$(".cars_mercedes");
console.log(BMW.html());


const ul=$("ul");
ul.append("<li>Audi</li>");
ul.prepend("<li>Maserati</li>");
// console.log(ul.html());
console.log(pretty($.html()));