// Ex8: Expliquer ce que fait cette fonction et lui donner un nom plus parlant

function wtfIsThisFunctionDoing(a) {
    if (!a) return false
    const b = a.split('.').pop()
    return b === 'jpg' || b === 'png' || b === 'gif';
}
