function genereerRechthoek(aantalLijnen, Breedte, Karakter) {
    var str = "";

    for (var i = 0; i < aantalLijnen; i++) {
        for (var j = 0; j < Breedte; j++) {
            str += Karakter
        }
        str += "\n";
    }

    return str;
}
console.log(genereerRechthoek(3, 5, "# "));
console.log(genereerRechthoek(2, 8, "* "));