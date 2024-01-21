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
let usernames = [];
let passwords = [];
let cities = [];
let states = [];
newb.addEventListener("onclick", function () {
    second.disabled = false;
    first.disabled = true;
    finish.addEventListener("onclick", function () {
        let currentkey = usernames.length.toString;
        localStorage.setItem(currentkey, r1.innerHTML);
        usernames.push(currentkey);
        let currentkey2 = passwords.length.toString;
        localStorage.setItem(currentkey2, r2.innerHTML);
        passwords.push(currentkey2);
        let currentkey3 = cities.length.toString;
        localStorage.setItem(currentkey3, r3.innerHTML);
        cities.push(currentkey3);
        let currentkey4 = states.length.toString;
        localStorage.setItem(currentkey4, r4.innerHTML);
        states.push(currentkey4);
        alert("Hello " + r1.innerHTML + "!");
    });
});
oldb.addEventListener("onclick", function () {
    for (i = 0; i < usernames.length; i++) {
        if (localStorage.getItem(usernames[i]) === checkun.innerHTML) {
            for (l = 0; j < passwords.length; j++) {
                if (localStorage.getItem(passwords[j]) === checkps.innerHTML) {
                    alert("Welcome back " + checkun.innerHTML + "!");
                    break;
                }
            }
            break;
        }
    }
});