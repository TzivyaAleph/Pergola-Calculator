
module.exports = {numOfSpaceBetweenBeam, numOfBeam, lengthOfWood,heightOfPole,numOfSpaceBetweenPole,numOfPoles};

function numOfSpaceBetweenBeam(width, thickness) {
    let x = Math.floor(width / 75);
    let y = (x + 1) * thickness;
    let z = width - y;
    let result = z / x;
    while (result >= 75) {
        x = x + 1;
        y = (x + 1) * thickness;
        z = width - y;
        result = z / x;
    }
    return result;
}

function numOfBeam(width, thickness) {
    let x = Math.floor(width / 75);
    let y = (x + 1) * thickness;
    let z = width - y;
    let result = z / x;
    while (result >= 75) {
        x = x + 1;
        y = (x + 1) * thickness;
        z = width - y;
        result = z / x;
    }
    return x + 1;
}
/**
 * 
 * @param {*} length 
 * @param {*} wallBeam 
 * @param {*} output 
 * @returns 
 */
// קורת קיר מורידה 5 ס"מ
function lengthOfWood(length, wallBeam, output) {
    length = parseFloat(length);
    output = parseFloat(output);
    return (length + output) - wallBeam;
}

//יש קורה תומכת(כמו שאר הקורות זה קורה ליד העמודים) ויש קורה קיר- קורת קיר באותו גובה של קורה רגילה והעובי ברירת מחדל 5 סמ
//גובה הקרש תמיד גדול מעובי הקרש, יש להשתמש בגובה הקרש ולא עובי הקרש, ולהפחית את הקורה התומכת
function heightOfPole(height, incline, beamHight, hightSupportBeam) {
    return height - beamHight - incline -hightSupportBeam;
}


//להוריד את גובה הקרש ולא את עובי הקרש.
function numOfSpaceBetweenPole(width, beamHight) {
    if (beamHight <= 7) {
        let x = Math.floor(width / 300);
        let y = (x + 1) * beamHight;
        let z = width - y;
        let result = z / x;
        while (result > 300) {
            x = x + 1;
            y = (x + 1) * beamHight;
            z = width - y;
            result = z / x;
        }
        return result;
    } else {
        let x = Math.floor(width / 400);
        let y = (x + 1) * beamHight;
        let z = width - y;
        let result = z / x;
        while (result > 400) {
            x = x + 1;
            y = (x + 1) * beamHight;
            z = width - y;
            result = z / x;
        }
        return result;
    }
}

function numOfPoles(width, beamThickness) {
    if (beamThickness <= 7) {
        let x = Math.floor(width / 300);
        let y = (x + 1) * beamThickness;
        let z = width - y;
        let result = z / x;
        while (result > 300) {
            x = x + 1;
            y = (x + 1) * beamThickness;
            z = width - y;
            result = z / x;
        }
        return x + 1;
    } else {
        let x = Math.floor(width / 400);
        let y = (x + 1) * beamThickness;
        let z = width - y;
        let result = z / x;
        while (result > 400) {
            x = x + 1;
            y = (x + 1) * beamThickness;
            z = width - y;
            result = z / x;
        }
        return x + 1;
    }
}
