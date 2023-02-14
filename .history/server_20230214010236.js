const axios=require("axios");
const cheerio=require("cheerio");
// const pretty=require("pretty");
const fs=require("fs");


const url="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3";


// async function scrapeData(){
//     try{
//         const { data }=axios.get(url);          
//         const $=cheerio.load(data);
//         const listItems=$(".plainlist ul li");
//         const countries=[];
//         listItems.each(function(idx,el){
//             // const country={"name:","isp:"}
//             // const country={name:"",iso3:""};
//             listItems.each((idx,el)=>{
//                 const country={name:"",iso3:""};
//                 country.name=$(el).children("a").text();
//                 country.iso3=$(el).children("span").text();
//                 countries.push(country);
//             })
//             console.dir(countries);
//             fs.writeFile("coutries.json", JSON.stringify(countries, null, 2), (err) => {
//                 if (err) {
//                     console.error(err);
//                     return;
//                 }
//                 console.log("Successfully written data to file");
//                 });
//         })
//     } catch (err) {
//         console.error(err);
//       }
//     }
//     // Invoke the above function
//     scrapeData();


async function scrapeData(){
    try{
        const data=axios.get(url);
        const $=cheerio.load(data);
        const listItems=$(".plainlist ul li");
        cont countries=[];
        listItems.each((idx,el){
            const country={name:"",iso3:""};
            country.name=$(el).children("a").text();
            coountry.iso3=$(el).children("span").text();
            countries.push(country);``
        })
    }
}














