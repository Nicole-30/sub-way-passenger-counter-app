

let countEl = document.getElementById("count-el")

let saveEl = document.getElementById('save-el')

let count = 0
function increment() {
    count += 1
    countEl.textContent = count
    console.log(count);
}
increment()


function save() {
    let countStr = count + '-'
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = 0
}
save()


let welcomeEl = document.getElementById('welcome-el')
let myName = ' Mylene'
let greeting1 = 'Your welcome Onboard'

welcomeEl.innerText = greeting1 + myName
console.log(welcomeEl);


// let username = "per"
// let message = "You have three new notifications"
// let messageToUser = message + ',' + username + '!'
// console.log(messageToUser);


// let name = 'Nicole';
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name
// console.log(myGreeting);





// function callOut() {
//     console.log(42);
// }
// callOut()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function lapTime() {

//     console.log(lap1 + lap2 + lap3);
// }

// lapTime()

// let lapsCompleted = 0;

// function incLaps() {
//     lapsCompleted = lapsCompleted + 1

// }
// incLaps()
// incLaps()
// incLaps()

// console.log(lapsCompleted);

// let count =0;
// function increment2(){
//     count = count + 1
//     console.log(count);
// }
// increment2()









