// function repeatLetter(text, times) {
//    return text.split(" ").map(el => {
//         const hasil = [...el].map((e) =>{
//             let jadi = e
//             for(let i = 1; i < times; i++){
//                 jadi += e }
//             return jadi  
//         })
//         return hasil;
//     }).map((el) => { return el.join('')}).join(" ");
    
// }

function repeatLetter(text, times) {
    const a = [...text];
    
    return a.map((el) => {
        return el.repeat(times)
    }).join("").replace(" ", "");
}

module.exports = repeatLetter;