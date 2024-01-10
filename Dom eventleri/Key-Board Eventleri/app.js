// Klavye eventleri


// KeyPress 

/* 
document.addEventListener("keypress",run);

function run(e){                 
    //    console.log(e.which);                     // Burada klavyede ki basılan tuşun ASCII değerini yazdırır
    //    console.log("Tuşa basildi");              // klavyede ki harf,sayı ve işaret tuşlarına kaç defa basdığımızı sayar
    //    console.log(e.key);                       // hangi tuşa bastığımızı consola yazdırır
}
*/


// KeyDown

/* 
document.addEventListener("keydown",run);           // KeyDown ile herşeyi yazabilir hale geldik


function run(e){                 
    console.log(e.key);                   
}

*/


// KeyUp

/* 
document.addEventListener("keyup",run);             // KeyUp farkı ise tuşa bastığımız anda değil basmayı bıraktığımız anda çalışmasıdır
                                                    // KeyDown gibi herşeyi yazdırabilir
function run(e){
    console.log(e.key);
}
*/



const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup",changeText);

function changeText(e){
//    console.log(e.key);
//    console.log(e.target);                // yazdırabilmemiz için önce event'i bulmamız gerek target özelliği ile
//    console.log(e.target.value);          // burada her harf beraberinde yazar (a,ab,abc) devamıyla beraber yazdırır
    header.textContent = e.target.value;    // şeklinde yazılan her harfi header değişkenine kaydederek devam ettirir 
}   


