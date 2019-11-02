import {getHTML} from "./scraper";

async function go(){
    console.log(await getHTML("https://www.instagram.com/arthurodbr/?hl=pt-br"));
}

go();
