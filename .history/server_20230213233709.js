const axios=require("axios");
const cheerio=require("cheerio");
const pretty=require("pretty");

const markup = `
<ul class="cars">
  <li class="cars_mercedes"> E63-AMG </li>
  <li class="cars_BMW"> M5 Competition</li>
</ul>
`;


 const $=cheerio.load(markup);
// console.log(pretty($.html()));

// const BMW=$(".cars_mercedes");
// console.log(BMW.html());


const ul=