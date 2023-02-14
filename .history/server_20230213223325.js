const axios=require("axios");
const cheerio=require("cheerio");
const pretty=require("pretty");

const markup = `
<ul class="cars">
  <li class="cars_mercedes"> Mango </li>
  <li class="fruits__apple"> Apple </li>
</ul>
`;


const $=cheerio.load(markup);
console.log(pretty($.html()));

const 