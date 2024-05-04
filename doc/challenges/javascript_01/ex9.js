// Ex9: Expliquer ce que fait cette fonction et lui donner un nom plus parlant

function wtfIsThisFunctionDoing(a) {
    return a.map((b, c) => {
        if (typeof b === 'string') {
            return a[c] = b.toUpperCase();
        }
    });
}