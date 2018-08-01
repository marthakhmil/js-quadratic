const a = parseFloat(prompt('Enter a :'));
const b = parseFloat(prompt('Enter b :'));
const c = parseFloat(prompt('Enter c :'));
if (a != 0) {
    function square(a, b, c) {
        const d = (b * b - 4 * a * c);
        const dsqr = Math.sqrt(d);
        if (d >= 0) {
            const x1 = (b * (-1) - dsqr) / (2 * a);
            const x2 = (b * (-1) + dsqr) / (2 * a);
            return [x1, x2];
        }
        if (d == 0) {
            const x3 = b * (-1) / (2 * a);
            const resulttwo = (x3);
            return resulttwo;
        }
        else {
            alert('the result is some complex numbers, so it is too hard to display them. So I don`t want do to it :) ');
        }
    }
    const result = square(a, b, c);
    alert('the result yo your equation is :' + result);
}
else {
    alert('a = 0 so this equation is not qudratic anymore');
}
