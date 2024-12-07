// generating random Hex Values

const randomColor = () => {
    const hex = '0123456789ABCDEF'
    let color = '#'

    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }

    return color
}

let intervalID = null
const startChangingColor = () => {
    const changeBGColor = document.body.style.backgroundColor = randomColor

    if(!intervalID){
        intervalID = setInterval(changeBGColor, 1000)
    }
}
const stopChangingColor = () => {}

document.querySelector('#start').addEventListener('click', startChangingColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor)