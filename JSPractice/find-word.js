const string = "Mya name yasyash";
const string2 = "My name is Suyash";

const string3 = "My name is Ramesh";

const find = "Suyash"; // yash

const findWord = (string, find) => {
    let i = 0;
    let j = 0;
    let found = false;
    while (i < string.length) {
        console.log("Main iteration: ", string[i], find[j], i, j);
        if (string[i] === find[j]) {
            i++;
            j++;
            while (j < find.length) {
                console.log("Find interation: ", string[i], find[j], i, j);
                if (string[i] !== find[j]) {
                    j = 0;
                    break;
                }
                if (j === find.length - 1) {
                    found = true;
                }
                i++;
                j++;
            }
        } else {
            i++;
        }

        if (found) {
            break;
        }
    }

    console.log(found);
    return found;
}

findWord(string2, find);

/* ********* SHORTCUT ********* */

console.log("Shortcut", string2.includes(find));