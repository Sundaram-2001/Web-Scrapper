const axios=require("axios");
const cheerio=require("cheerio");
const pretty=require("pretty");

const markup = `
<ul class="cars">
  <li class="cars_mercedes"> E63-AMG </li>
  <li class="fruits__apple"> m5 cOMPETITION </li>
</ul>
`;


const $=cheerio.load(markup);
console.log(pretty($.html()));

const 