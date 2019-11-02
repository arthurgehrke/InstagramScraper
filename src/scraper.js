import axios from "axios";  

async function getHTML(url){
    const res = await axios.get("https://www.instagram.com/arthurodbr/?hl=pt-br");
    console.log(res);
};

export { getHTML };