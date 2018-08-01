
function square(a,b,c)
{
    const d = Math.sqrt(b * b - 4 * a * c);
    if (d >= 0){
    const x1 = ( b*(-1) - d) / ( 2 * a);
    const x2 = ( b*(-1) + d) / ( 2 * a);
    return [x1, x2];
    }
    if (d == 0) {
        const x3 = b*(-1) / (2 * a);
        const resulttwo = (x3);
        return resulttwo;
    }
    else{
        alert("the result is some complex numbers, so it is too hard to display them :) ");
    }
}

const result = square(10,5,6);i
alert ("the result yo your equation is :" + result);   


