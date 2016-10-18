setTimeout(function () {
    console.log("Er zijn 3 seconden voorbij ...!");
}, 3000)

//of

function printIets() {
    console.log("Er zijn 3 seconden voorbij ...!")
}

setTimeout(printIets, 3000)