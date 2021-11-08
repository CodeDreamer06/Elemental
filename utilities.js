export default class Utilities {
	static randomiseArray(array) {
        var output = array.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
        if(array === output) output = array.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
        return output;
    }

    static saveStreak() {
        const dateDifference = Math.floor(Math.abs(new Date() - new Date(localStorage.getItem('ElT')))/(60*60*24*1000));
        if(dateDifference === 1) {
            localStorage.setItem('ElSt', Number(localStorage.getItem('ElSt')) + 1);
            localStorage.setItem('ElT', new Date());
        }

        else if(dateDifference > 1) {
            localStorage.setItem('ElSt', 0);
            localStorage.setItem('ElT',new Date());
        }
    }
}