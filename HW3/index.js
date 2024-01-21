// Setting up the stuff I need from the html document.
const first = document.getElementById("intro");
const second = document.getElementById("newacc");
const third = document.getElementById("login");
const newb = document.getElementById("new");
const oldb = document.getElementById("old");
const r1 = document.getElementById("username");
const r2 = document.getElementById("pw");
const r3 = document.getElementById("city");
const r4 = document.getElementById("state");
const finish = document.getElementById("done");
const checkun = document.getElementById("loguser");
const checkps = document.getElementById("logpw");
const done = document.getElementById("submit");

//Actual script functions start here
second.disabled = true;
third.disabled = true;
newb.addEventListener("click", function () {
    second.disabled = false;
    first.disabled = true;
    finish.addEventListener("click", function () {
        localStorage.setItem("u", r1.value);
        localStorage.setItem("p", r2.value);
        localStorage.setItem("c", r3.value);
        localStorage.setItem("s", r4.value);
        alert("Hello " + r1.value + "!");
    });
});
oldb.addEventListener("click", function () {
    third.disabled = false;
    first.disabled = true;
    done.addEventListener("click",  function () {
        let savedu = localStorage.getItem("u");
        let savedp = localStorage.getItem("p");
        if ((savedu === checkun.value) && (savedp === checkps.value)) {
            alert("Welcome back " + savedu + "!");
        }
        else {
            alert("invalid login credentials");
        }
    });
});