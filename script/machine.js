function showonly(id){
const addmoney = document.getElementById("addmoneyy");
const cashout = document.getElementById("cashout"); 
const history = document.getElementById("history");
//hiding all the section 
addmoney.classList.add("hidden");
cashout.classList.add("hidden");
history.classList.add("hidden");

//id wala element take show korbo 
const selectedsection = document.getElementById(id);
selectedsection.classList.remove("hidden");

}