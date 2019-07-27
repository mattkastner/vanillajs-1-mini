
///////PART 1////////
console.log("Hello")

let count = 0
let element = document.getElementById("counter")

//increase - onclick will increase the value of the counter by +1
const increase = () => {
    count++
    element.innerText = count
    console.log(count)
}

//decrease - onclick will decrease the value of the counter by -1
const decrease = () => {
    count--
    element.innerText = count
    console.log(count)
}

//reset - onclick will reset the value of the counter to 0
const reset = () => {
    count = 0
    element.innerText = count
    console.log(count)
}

///////PART 2////////

//selectTheme
const selectTheme = (theme) => {
    document.getElementsByTagName("body")[0].className[0] = theme;
    document.getElementsByTagName("main")[0].className[0] = theme
    const buttons = document.getElementsByTagName("button")

    for(let i = 0; i < buttons.length; i++){
        buttons[i].className = theme
    }
}