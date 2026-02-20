function showonly(id){
const addmoney = document.getElementById("addmoneyy");
const cashout = document.getElementById("cashout"); 
const history = document.getElementById("history");
const transfermoney = document.getElementById("transfer-money");
const bonus = document.getElementById("bonus");
const paybill = document.getElementById("pay-bill");
//hiding all the section 
addmoney.classList.add("hidden");
cashout.classList.add("hidden");
history.classList.add("hidden");
transfermoney.classList.add("hidden");
paybill.classList.add("hidden");
bonus.classList.add("hidden");

//id wala element take show korbo 
const selectedsection = document.getElementById(id);
selectedsection.classList.remove("hidden");

}