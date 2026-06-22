/*
    types{
        [type of attack]:
        {   
            [type of defense]: multiplier
        }
    }
*/

export const types = {
    fashion: {
        fashion: 31,
        beauty: 0,
        makeup: 0,
        skincare: 0,
        clothes: 10,
        shoes: 5,
        accessories: 5,
        bags: 6,
        swimwear: 5,
    },
    beauty: {
        fashion: 0,
        beauty: 10,
        makeup: 5,
        skincare: 5,
        clothes: 0,
        shoes: 0,
        accessories: 0,
        bags: 0,
        swimwear: 0,
    },
    makeup: {
        fashion: 0,
        beauty: 10,
        makeup: 5,
        skincare: 0,
        clothes: 0,
        shoes: 0,
        accessories: 0,
        bags: 0,
        swimwear: 0,
    },
    skincare: {
        fashion: 0,
        beauty: 10,
        makeup: 0,
        skincare: 5,
        clothes: 0,
        shoes: 0,
        accessories: 0,
        bags: 0,
        swimwear: 0,
    },
    clothes: {
        fashion: 31,
        beauty: 0,
        makeup: 0,
        skincare: 0,
        clothes: 10,
        shoes: 0,
        accessories: 0,
        bags: 0,
        swimwear: 0,
    },
    shoes: {
        fashion: 31,
        beauty: 0,
        makeup: 0,
        skincare: 0,
        clothes: 0,
        shoes: 5,
        accessories: 0,
        bags: 0,
        swimwear: 0,
    },
    accessories: {
        fashion: 31,
        beauty: 0,
        makeup: 0,
        skincare: 0,
        clothes: 0,
        shoes: 0,
        accessories: 5,
        bags: 0,
        swimwear: 0,
    },
    bags: {
        fashion: 31,
        beauty: 0,
        makeup: 0,
        skincare: 0,
        clothes: 0,
        shoes: 0,
        accessories: 0,
        bags: 6,
        swimwear: 0
        ,
    },
    swimwear: {
        fashion: 31,
        beauty: 0,
        makeup: 0,
        skincare: 0,
        clothes: 0,
        shoes: 0,
        accessories: 0,
        bags: 0,
        swimwear: 5,
    },
}

export function typeChart() {
    let title = " FASH BEAU MAKE SKIN CLO SHOE ACC BAG SWIM" 
    for (let row in types) {
        let header = row.toUpperCase();
        while (header.length < 10) {
            header += " "
        }
        const off = types[row]
        for (let col in off) {
            let str = off[col] == 1 ? " - " : "" + off[col]
            while (str.length < 3) {
                str += " "
            }
            header += str + " "
        }
        console.log(header)
    }
}