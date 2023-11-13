// CREO GLI OGGETTI 
const staff = [
    {
        nome: "Wayne Bernett",
        posizione: "Founder & CEO",
        img: "./img/wayne-barnett-founder-ceo.jpg"
    },

    {
        nome: "Angela Caroll",
        posizione: "Chief Editor",
        img: "./img/angela-caroll-chief-editor.jpg"
    },

    {
        nome: "Walter Gordon",
        posizione: "Office Manager",
        img: "./img/walter-gordon-office-manager.jpg"
    },

    {
        nome: "Angela Lopez",
        posizione: "Social Media Manager",
        img: "./img/angela-lopez-social-media-manager.jpg"
    },

    {
        nome: "Scott Estrada",
        posizione: "Developer",
        img: "./img/scott-estrada-developer.jpg"
    },

    {
        nome: "Barbara Ramos",
        posizione: "Graphic Designer",
        img: "./img/barbara-ramos-graphic-designer.jpg"
    },
];


// CREO UN CICLO 
for (let i = 0; i < staff.length; i++) {
    const person = staff[i];
    console.log(`Nome: ${person.nome}, Posizione: ${person.posizione}, Immagine: ${person.img}` );
    

    document.getElementById("container").innerHTML += `<div class="box-card"></div>`
}

let boxCards = document.querySelectorAll(".box-card");

for (let i = 0; i < boxCards.length; i++) {
    
    let image = document.createElement("img");
    image.src = staff[i].img;
    boxCards[i].append(image);
    
    boxCards[i].innerHTML += `<h1>${staff[i].nome}</h1>`
    boxCards[i].innerHTML += `<h2>${staff[i].posizione}</h2>`

}
