let displayColor = function(...colors: string[]){
    for(let i in colors){
        console.log(colors[i]);
    }
    console.log(colors);
};

displayColor("Green", "Blue", "Red");
displayColor("Green");
