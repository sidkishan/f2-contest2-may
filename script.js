var users = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];
var userCont = document.getElementById("user-container");
function showUsers() {
  users.sort((a, b) => a.id - b.id);
  for (let ele of users) {
    if (!document.getElementById(`user${ele.id}`)) {
      let userdiv = document.createElement("div");
      userdiv.id = "user" + ele.id;
      userdiv.className = "eachuser";
      let spanId = document.createElement("span");
      let spanName = document.createElement("span");
      let spanAge = document.createElement("span");
      let spanProfession = document.createElement("span");
      spanId.innerText = `${ele.id}. `;
      spanName.innerText = `Name: ${ele.name}`;
      spanProfession.innerText = `Profession: ${ele.profession}`;
      spanAge.innerText = `Age: ${ele.age}`;
      userdiv.append(spanId, spanName, spanProfession, spanAge);
      userCont.append(userdiv);
    }
  }
}
showUsers();
let sel = document.getElementById("profession");
function createOptions() {
  let professionList = {};
  for (let ele of users) {
    var prof = ele.profession;
    professionList[prof] = 0;
  }
  for (const key in professionList) {
    let option = document.createElement("option");
    option.innerText = key;
    sel.append(option);
  }
}
createOptions();
function filterUsers() {
  showUsers();
  let opt = document.getElementById("profession").value;
  //for (let key in professionList) {
  if (opt === "Profession") {
    window.alert("please select any profession before clicking filter");
    return;
  }
  //userCont.remove(document.querySelectorAll(".eachuser"));
  //console.log(opt);
  for (let ele of users) {
    if (opt !== ele.profession) {
      document.getElementById(`user${ele.id}`).remove();
    } else {
      if (!document.getElementById(`user${ele.id}`)) {
        let userdiv = document.createElement("div");
        userdiv.id = "user" + ele.id;
        userdiv.className = "eachuser";
        let spanId = document.createElement("span");
        let spanName = document.createElement("span");
        let spanAge = document.createElement("span");
        let spanProfession = document.createElement("span");
        spanId.innerText = `${ele.id}. `;
        spanName.innerText = `Name: ${ele.name}`;
        spanProfession.innerText = `Profession: ${ele.profession}`;
        spanAge.innerText = `Age: ${ele.age}`;
        userdiv.append(spanId, spanName, spanProfession, spanAge);
        userCont.append(userdiv);
      }
    }
  }
}
function addUser() {
  let n = document.getElementById("name").value;
  let a = document.getElementById("age").value;
  let p = document.getElementById("profinput").value;
  if (n == "") {
    alert("please give a valid name to add new user");
  } else if (p == "") {
    alert("please give a valid profession to add new user");
  } else if (a == "") {
    alert("please give a valid profession to add new user");
  } else {
    let len = users.length;
    let obj = {};
    obj.id = len + 1;
    obj.name = n;
    obj.age = a;
    obj.profession = p;
    users.push(obj);
    showUsers();
    document.getElementById("profession").value = "Profession";
  }
}
