/** berapa banyak tahun kabisat antara tahun1 ke tahun2 */

function howManyKabisat(year1,year2){
    while(year1<year2){
        if(isKabisat(year1)){
            console.log(year1);
        }
        year1++;
    }
}

function isKabisat(year){
    let checkLeap=year;
    if(checkLeap%4==0 ){
        console.log(checkLeap);
    }
}

console.log(howManyKabisat(1997,2021));