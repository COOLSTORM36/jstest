function evennum(num) {
    for (const key in num) {
        if (num[key] % 2 === 0) {
            console.log(num[key]);
        }
    }
}

function oddnum(num) {
    for (const key in num) {
        if (num[key] % 2 === 1) {
            console.log(num[key]);
        }
    }
}

evennum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);