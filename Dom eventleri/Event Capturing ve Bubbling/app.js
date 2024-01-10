// Bu özellikler dökümanlara özel olan bi özelliktir

/* Nedir bu bubbling */

/* html de bir elementi seçtiğimizde otomatik olarak bi üst dizinde ki (parent) elementi de seçer.
    Bu olay sırasıyla en baştaki html etiketine kadar ilerler, buna da bubbling olayı denir */


// Event Bubbling

/* 

document.querySelector(".container").addEventListener("click",function(){
    console.log("Div Container")
});

document.querySelector(".card.row").addEventListener("click",function(){
    console.log("Card Row")
});

document.querySelectorAll(".card-body")[1].addEventListener("click",function(){
    console.log("Card Body")
});

*/



// Event Capturing veya Delegation

/* bu olayda tam olarak seçtiğin noktayı hedef alır yani seçtiğin etiketin parent'ı alınmaz */

const cardbody = document.querySelectorAll(".card-body")[1];

cardbody.addEventListener("click",run);

function run(e){
    if (e.target.className === "fa fa-remove"){
        console.log("Silme İşlemi");
    }
    if (e.target.id === "filter") {
        console.log("Filtreme İşlemi");
    }
    if (e.target.id === "clear-todos") {
        console.log("Tüm tasklari silme işlemi");
    }
}


