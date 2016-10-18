function groet() {
    console.log("Hallo!");
}

function groeter(functie) {
    if (true) {
        functie();
        functie();
        functie();
    } else {
        console.log("ERROR: geen functie!")
    }
    
}

groeter(groet);