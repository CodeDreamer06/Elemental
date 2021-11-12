import elements from "../../Elements";
import Utilities from "../../utilities";

export default class Generators {
	static sorting(numberOfItems) {
        var learntSort = [];
        JSON.parse(localStorage.getItem("Numlearnt")).slice(1).slice(-numberOfItems).sort((a, b) => a - b).forEach((entry, index) => {
            learntSort.push({ id: index, ...elements.find(el => el.number === entry) });
        });
        return learntSort;
    }

    static numericalOptions(currentElement) {
        var options = [];
        try { var initialOption = currentElement.number }
        catch(TypeError) { }
        for (let i = initialOption; options.length < 4; i++) {
            options.push(i)
            if (i-2 > 0 && initialOption > 2) options.push(i-2);
        }
        return options.sort(() => Math.random() - 0.5);
    }

    static alphabeticalOptions(currentElement) {
        var options = [];
        try { var initialOption = currentElement.number }
        catch(TypeError) { }
        for (let i = initialOption; options.length < 4; i++)
            options.push(elements.find(el => el.number === i).name)
        return options.sort(() => Math.random() - 0.5);
    }    

    static learningCards(currentNumber) {
        if(currentNumber >= 2)
            return Utilities.randomiseArray([elements[currentNumber - 1],
                    elements[currentNumber - 2],
                    elements[currentNumber + 1]])
        else return Utilities.randomiseArray([elements[currentNumber], elements[currentNumber - 1], elements[currentNumber + 1]])
    }
}