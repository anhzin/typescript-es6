let displayColorsSpread = function (message,...colors: string[]) {
    for(let i in colors){
        console.log(colors[i]);
    }
}
let messageSpread = "Hello";
let colors = ['Red','Green','Blue']
displayColorsSpread(messageSpread,...colors);