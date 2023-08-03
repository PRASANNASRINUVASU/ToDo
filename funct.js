const inputBox=document.getElementById("inputbox");
const listContain=document.getElementById("list-contain");
function addTask(){
    if(inputBox.value ===''){
        alert("You must write something");
        saveData();
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContain.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span);
        saveData();
    }
    inputBox.value="";
    saveData();
}
listContain.addEventListener("click",function(e){
    console.log(e.target.tagName);
   if(e.target.tagName==="LI"){
    e.target.classList.toggle("check");
    saveData();
   }
   else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
   saveData(); }
},false);
function saveData(){
    localStorage.setItem("data",listContain.innerHTML); 
}
function showTask(){
    listContain.innerHTML=localStorage.getItem("data");
}
showTask();