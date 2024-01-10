const cardBody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");



// Click event
// title.addEventListener("click",run);


// Double Click event
// title.addEventListener("dblclick",run);


// Mouse Down
// title.addEventListener("mousedown",run);      


// Mouse Up
// title.addEventListener("mouseup",run);         // click event'inden tek farkı tıklayıp bıraktığımızda çalışmasıdır


// Mouse Over
// title.addEventListener("mouseover",run);       // Bu da üzerine hover olayı gerçekleştiğinde aktifleşen event


// Mouse Out
// title.addEventListener("mouseout",run);        // Mouse Over aynı fakat üzerinden ayrıldığımızda aklişleşir

/* Not out ve over'ı kaplayan etiketletlerin içinde ki etiketlerde gezinirken out ve over aktifleşir */


// Mouse enter && Mouse leave
cardBody.addEventListener("mouseenter",run);
cardBody.addEventListener("mouseleave",run);

/* Not bu özellikler de over ve out event'leri ile aynı, fakat cardBody'nin kapsadığı etiketlere de geçerken aktifleşmez
    cardBody'den çıktıktan sonra aktifleşir */

function run(e) {
    console.log(e);
    console.log(e.type);
}

