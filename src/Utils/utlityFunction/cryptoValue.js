export const maxCrypto=(crypto)=>{
    let max=Number.NEGATIVE_INFINITY;
    crypto.forEach((cry)=>{
        if(+cry.rateUsd>max){
            max=+cry.rateUsd
        }
    })
    return max
}

export const minCrypto=(crypto)=>{
    let min=Number.POSITIVE_INFINITY;
    crypto.forEach((cry)=>{
        if(+cry.rateUsd<min){
            min=+cry.rateUsd
        }
    })
    return min
}