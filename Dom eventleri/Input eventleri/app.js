const filter = document.getElementById("filter");       // html de bulunan filter Id'si olan etiketi seçiyoruz
let value;

/* 
document.addEventListener("DOMContentLoaded",load);     // Yüklemeler tamamlanmadığı sırada load fonksiyonu aktifleşir

function load(e){
    console.log("Sayfa Tekrar Yüklendi")
}
*/

/* 
DOMContentLoaded olayı, bir HTML sayfasının tamamen yüklendiği, ancak tüm kaynakların (CSS, görseller, vb.) 
henüz tam olarak yüklenmediği bir noktada tetiklenen bir JavaScript olayıdır. 
Bu olay, sayfa içeriği yüklendiğinde belirli JavaScript kodlarını çalıştırmak için kullanılır.
*/




// Focus


// filter.addEventListener("focus",run);       // belirlenen yere focus olduğunda aktifleşir
// filter.addEventListener("blur",run);        // belirlenen yerden başka bi yere tıkladığımız da yani ayrıldığımızda blur özelliği aktifleşir


// Paste 
// filter.addEventListener("paste",run)        // bi şeyi belirlenen yere yapıştır dediğimizde aktifleşiyor


// Copy 
// filter.addEventListener("copy",run);        // bi şeyi belirlenen yerde kopyala dediğimizde aktifleşiyor


// Cut
// filter.addEventListener("cut",run);         // bi şeyi belirlenen yerde kes dediğimizde aktifleşiyor


// Select 
// filter.addEventListener("select",run);      // bi şeyi belirlenen yeri seç dediğimizde aktifleşiyor



function run(e){
    console.log(e.type);
}



