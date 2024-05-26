import './src/css/style.css'



const dynamicContent =(id, text) =>{
    document.getElementById(id).innerHTML=text
}
dynamicContent('copy', `&copy; ${new Date().getFullYear()} Loopstudios. All Rights Reserved`);

dynamicContent('credit', `Developed by Md Rakibul Hasan.`);