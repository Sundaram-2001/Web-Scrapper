const axios=require("axios");
const cheerio=require("cheerio");
// const pretty=require("pretty");
const fs=require("fs");


const url="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3";





// async function scrapeData(){
//     try{
//         const data=axios.get(url);
//         const $=cheerio.load(data);
//         const listItems=$(".plainlist ul li");
//         const countries=[];
//         listItems.each((idx,el)=>{
//             const country={name:"",iso3:""};
//             country.name=$(el).children("a").text();
//             country.iso3=$(el).children("span").text();
//             countries.push(country);
//         })
//         // console.log(countries);
//         console.dir(countries);
//         fs.writeFile("countries.json",JSON.stringify(countries,null,2),(err)=>{
//             if (err){
//                 console.error(err);
//                 return;
//             }
//             console.log("Successfully written data to file")
//         })
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// scrapeData();


async function scrapeData() {
    try {
      
        const { data } = await axios.get(url);
      
        const $ = cheerio.load(data);
      
        const listItems = $(".plainlist ul li");
      
        const countries = [];
      listItems.each((idx, el) => {
       
        const country = { name: "", iso3: "" };
        
        country.name = $(el).children("a").text();
        country.iso3 = $(el).children("span").text();
        
        countries.push(country);
        });
      
        console.dir(countries);
      // Write countries array in countries.json file
            fs.writeFile("countries.json", JSON.stringify(countries, null, 2), (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("Successfully written data to file");
        });
    } catch (err) {
        console.error(err);
    }
    }
  // Invoke the above function
    scrapeData();












