import Student from "./student.js";

const email = document.querySelector(".email");
const password = document.querySelector(".password");
const loginBtn = document.querySelector(".login-btn");
const loginLink = document.querySelector(".login-link");

const studenten = [];

const student1 = new Student("Outmane", "302319425@student.rocmondriaan.nl", "0000");
const student2 = new Student("Alaa", "30223328@student.rocmondriaan.nl", "9999");
studenten.push(student1);
studenten.push(student2);


loginBtn.addEventListener('click', function () {

    for (let i = 0; i < studenten.length; i++) {
        if (email.value === studenten[i].getEmailAdres() && password.value === studenten[i].getPassword()) {
            loginLink.href = "./index.html";
        }

    }

})

console.log(student1.getName());

