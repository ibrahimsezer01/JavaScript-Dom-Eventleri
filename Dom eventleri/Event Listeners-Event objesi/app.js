const filterInput = document.getElementById("filter");      // html de bulunan filter Id'si olan etiketi seçiyoruz
const todoForm = document.getElementById("todo-form");      // html de bulunan todo-form Id'si olan etiketi seçiyoruz

todoForm.addEventListener("submit",submitForm);             // todoForm değişkenine submit (kaydetme işlemi) olduğunda submitForm fonksiyonunu çalıştır

function submitForm(e){             // burada butona bastığımız zaman çok kısa bir süre içinde basildi yazısı çıkar ve ardından sayfa kendini yeniler
    console.log("basildi");         // bunun sebebi butonun sayfaya bizi tekrar atmasından dolayıdır butona tıklandığında başka sayfaya gitmemesş içim
    e.preventDefault();             // preventDefault olan değeri sıfırlayarak bu durumun önüne geçebiliriz
}                                   

/* 
filterInput.onfocus = function(){       // belirlenen inputun üzerine gelindiği zaman consola "Hi Guys" yazdırdık
    console.log("Hi Guys");             // bu genellikle 2.ci yöntem olarak kullanılır
}
*/

/* 
filterInput.addEventListener("focus",function(e){   // Buda yukarda ki yöntemin başka hali
    console.log("Hi Guys");
    console.log(e);
    console.log(e.type);                    // event'in tipi
    console.log(e.target);                  // event'in nerde oluştuğu
    console.log(e.target.placeholder);      // event'in oluştuğu yerde ki placeholder
    console.log(e.target.className);        // event'in oluştuğu yerde ki class name
})
*/