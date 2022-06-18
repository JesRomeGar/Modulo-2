var Hoteles = {
    Bali: {
        Nombre: "Bali",
        Ubicación: "Benidorm",
        img: "https://t-cf.bstatic.com/xdata/images/hotel/square200/85396338.webp?k=ca2b3c8ce4819f7526dc502ea9b5fbd6bb6c33e1d846c7504ee5e4e5b04254ed&o="
    },

    Emperador: {
        Nombre: "Emperador",
        Ubicación: "Madrid",
        img: "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/40/83/40838_v11.jpeg"
    }

};

SelecciónHotel = prompt("Elige qué hotel vas a puntuar: Bali o Emperador");


Valoración = prompt("¿Qué puntuación le darías? Del 1 al 5");
document.getElementById("estrellas").innerHTML = Valoración + " estrellas";

Anonimato = confirm("¿Deseas que tu reseña sea anónima?");
document.getElementById("checkbox").checked = true;

document.getElementById("name").innerHTML = "Hotel " + Hoteles[SelecciónHotel].Nombre;
document.getElementById("location").innerHTML = Hoteles[SelecciónHotel].Ubicación;
document.getElementById("Foto").src = Hoteles[SelecciónHotel].img;


