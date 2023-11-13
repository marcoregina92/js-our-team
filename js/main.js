
const staff = [
    {
        nome: "Wayne Bernett",
        posizione: "Founder & CEO",
        img: "wayne-bernett-founder-ceo.jpg"
    },

    {
        nome: "Angela Caroll",
        posizione: "Chief Editor",
        img: "angela-caroll-chief-editor.jpg"
    },

    {
        nome: "Walter Gordon",
        posizione: "Office Manager",
        img: "walter-gordon-office-manager.jpg"
    },

    {
        nome: "Angela Lopez",
        posizione: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg"
    },

    {
        nome: "Scott Estrada",
        posizione: "Developer",
        img: "scott-estrada-developer.jpg"
    },

    {
        nome: "Barbara Ramos",
        posizione: "Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg"
    },
];



for (let i = 0; i < staff.length; i++) {
    const person = staff[i];
    console.log(`Nome: ${person.nome}, Posizione: ${person.posizione}, Immagine: ${person.img}` );
    
    document.getElementById("container").innerHTML += `<p>Nome: ${person.nome}, Posizione: ${person.posizione}, Immagine: ${person.img}</p>`;
}