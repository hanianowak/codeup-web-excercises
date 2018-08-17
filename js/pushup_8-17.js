

function returnMAxRepetitions(word) {
    var mostRepetitions = 0;

    for (var i = 0; i < word.length; i++) {
        repetitions = 1;
        var letters = word.split("");
        for (var j = 0; j < word.length; j++) {
            if (i != j && (letters[i] === letters[j])) {
                repetitions++;
            }
        }
        if (repetitions > mostRepetitions) {
            mostRepetitions = repetitions;
        }
    }
    return mostRepetitions;
}

console.log(returnMAxRepetitions("oooooorrrr"));
console.log(returnMAxRepetitions("ooeekkddooooo"));
console.log(returnMAxRepetitions("Mississippi"));