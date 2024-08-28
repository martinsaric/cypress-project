function generateRandomString(length) {
    const chart = 'abvgdabcdefghijklmnopqrstuvwx0123456789';
    let result = '';

    for(let i=0; i<length; i++) {
        const randomIndex = Math.floor(Math.random() * chart.length)
        result += chart[randomIndex];

    }
    return result;

}

export {generateRandomString }