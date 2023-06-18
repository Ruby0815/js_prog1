//var name1 = "ruby";
var name1=window.prompt("Plz Enter your name:");
window.console.log(name1);

console.log("hi");
let today=new Date();
        document.write(today.getFullYear());
   let btn=document.querySelector('button');
   let p=document.querySelector('p')
btn.addEventListener('click',() =>
{
    p.innerHTML="hello in addevent listneer by innerhtml"
})