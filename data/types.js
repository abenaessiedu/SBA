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
        fashion: 1,
        beauty: 1,
        makeup: 1,
        skincare: 1,
        clothes: 1,
        shoes: 1,
        accessories: 1,
        bags: 1,
        swimwear: 1,
    },
    beauty: {
      fashion: 1,
        beauty: 1,
        makeup: 1,
        skincare: 1,
        clothes: 1,
        shoes: 1,
        accessories: 1,
        bags: 1,
        swimwear: 1,
    },
    makeup: {
        fashion: 1,
        beauty: 1,
        makeup: 1,
        skincare: 1,
        clothes: 1,
        shoes: 1,
        accessories: 1,
        bags: 1,
        swimwear: 1,
    },
    skincare: {
         fashion: 1,
        beauty: 1,
        makeup: 1,
        skincare: 1,
        clothes: 1,
        shoes: 1,
        accessories: 1,
        bags: 1,
        swimwear: 1,
    },
    clothes: {
         fashion: 1,
        beauty: 1,
        makeup: 1,
        skincare: 1,
        clothes: 1,
        shoes: 1,
        accessories: 1,
        bags: 1,
        swimwear: 1,
    },
    shoes: {
         fashion: 1,
        beauty: 1,
        makeup: 1,
        skincare: 1,
        clothes: 1,
        shoes: 1,
        accessories: 1,
        bags: 1,
        swimwear: 1,
    },
    accessories: {
        fashion: 1,
        beauty: 1,
        makeup: 1,
        skincare: 1,
        clothes: 1,
        shoes: 1,
        accessories: 1,
        bags: 1,
        swimwear: 1,
    },
    bags: {
         fashion: 1,
        beauty: 1,
        makeup: 1,
        skincare: 1,
        clothes: 1,
        shoes: 1,
        accessories: 1,
        bags: 1,
        swimwear: 1,
    },
    swimwear: {
         fashion: 1,
        beauty: 1,
        makeup: 1,
        skincare: 1,
        clothes: 1,
        shoes: 1,
        accessories: 1,
        bags: 1,
        swimwear: 1,
    },
}

export function typeChart() {
    let title = "          NOR FIR WAT ELE GRA ICE FIG POI GRO FLY PSY BUG ROC GHO DRA DAR STE FAI"
    console.log(title)
    for( let row in types ){
        let header = row.toUpperCase();
        while(header.length < 10){
            header +=" "
        }
        const off = types[row]
        for (let col in off){
            let str = off[col]==1?" - ":""+off[col]
            while(str.length<3){
                str+=" "
            }
            header +=str+" "
        }
        console.log(header)
    }
}