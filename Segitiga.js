/** buat segitiga  */ 
let triangle1='';
for (let i = 1; i < 5; i++) {
    for (let j = 1; j < 6-i; j++) {
        triangle1+=j+" ";
    } 
    console.log(triangle1+"\n");
    triangle1='';
} 
// output 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 


let triangle2='';
for (let i = 0; i < 6; i++) {
    for (let j = 5-i; j > 0; j--) {
        triangle2+=j+" ";
    } 
    console.log(triangle2+"\n");
    triangle2='';
}  

// output
// 5 4 3 2 1  
// 4 3 2 1  
// 3 2 1
// 2 1  
// 1  
