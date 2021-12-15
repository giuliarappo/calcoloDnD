// XMLHTT REQUEST
/*
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "lista_abilita.json", false);
    xhttp.send();
    let listaJson = JSON.parse(xhttp.response);
    let listaCibo = listaJson.cibo;
    console.log(listaCibo[3].name);

 const acrobazia = 50,
    addestrareAnimali = 50,
    artigianato = 90,
    artistaDellaFuga = 50,
    ascoltare = 50,
    Camuffare = 50,
    cavalcare = 50,
    cercare = 50,
    concentrazione = 40,
    conoscenze = 90,
    decifrareScritture = 50,
    diplomazia = 50,
    disattivareCongegni = 40,
    empatiaAnimale = 30,
    equilibrio = 50,
    falsificare = 90,
    guarire = 40,
    intimidire = 60,
    intrattenere = 40,
    muoversiSilenziosamente = 50,
    nascondersi = 50,
    nuotare = 50,
    osservare = 50,
    percepireIntenzioni = 40,
    professione = 30,
    raccogliereInformazioni = 70,
    raggirare = 50,
    rapiditaDiMano = 50,
    saltare = 50,
    sapienzaMagica = 40,
    scalare = 40,
    scassinareSerrature = 40,
    sopravvivenza = 50,
    utilizzareCorde = 50,
    utilizzareOggettiMagici = 50,
    valutare = 50,
    combattimentoAssist = 40,
    combattimentoUccisione = 80;


function leggiListaAbilitaDnD() {
    let richiesta = new XMLHttpRequest;
    richiesta.open("GET", "lista_abilita.json", false);
    richiesta.send();
    let trasformaAbilitainObj = JSON.parse(richiesta.response);

    return trasformaAbilitainObj.abilitaDnD;
};

// Versione JQuery

function creaListaJq(listaAbilita) {
    let elementoListaAzioniJq = $("#lista-azioni-jq");
    for (let i = 0; i < listaAbilita.length; i++) {
        elementoListaAzioniJq.append(`<li>Abilita': ${listaAbilita[i].name}, Exp: ${listaAbilita[i].value}</li>`);
    };

};

// Versione JS

function creaListaJs(ListaAbilita) {
    let elementoListaAzioni = document.getElementById("lista-azioni-js");
    for (let i = 0; i < ListaAbilita.length; i++) {
        let paragrafo = document.createElement("li");
        paragrafo.innerText = `Abilita': ${ListaAbilita[i].name}, Exp: ${ListaAbilita[i].value}`;
        elementoListaAzioni.appendChild(paragrafo);
    };
}

 



$(document).ready(function () {

    let listaAbilitaDnD = leggiListaAbilitaDnD();
   
    creaListaJs(listaAbilitaDnD);
    creaListaJq(listaAbilitaDnD);
   
});

*/