function checkName(name) {
    if (typeof name !== 'string') {
        return 'invalid';
    }
    let lastItem = name[name.length - 1];
    if (lastItem === 'A' || lastItem === 'a' || lastItem === 'y' || lastItem === 'Y' || lastItem === 'i' || lastItem === 'I' || lastItem === 'e' || lastItem === 'E' || lastItem === 'o' || lastItem === 'O' || lastItem === 'u' || lastItem === 'U' || lastItem === 'w' || lastItem === 'W') {
        return 'Good Name';
    } else {
        return 'Bad Name';
    }
}

