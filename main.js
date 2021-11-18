/* const acrobazia = 50,
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
*/


$(document).ready(function () {

    let abilita = '{"abilitaDnD": [' +
        '{"name":"acrobazia", "value":50},' +
        '{"name":"conoscenze", "value":30},' +
        '{"name":"osservare", "value":5}, ' +
        '{"name":"cercare", "value":1}, ' +
        '{"name":"combattimento", "value":100}, ' +
        '{"name":"valutare", "value":70}, ' +
        '{"name":"magia", "value":8}]}';

    let abilitaObj = JSON.parse(abilita);


    let abilitaArr = abilitaObj.abilitaDnD;

    console.log(abilitaArr[0].name)
    let elementoListaAzioni = document.getElementById("lista-azioni-js");

    for (let i = 0; i < abilitaArr.length; i++) {
        //console.log("Abilita: " + abilitaArr[i].name + ", Exp: " + abilitaArr[i].value);
        // console.log(`Abilita': ${abilitaArr[i].name}, Exp: ${abilitaArr[i].value}`);
        let paragrafo = document.createElement("P");
        paragrafo.innerText = `Abilita': ${abilitaArr[i].name}, Exp: ${abilitaArr[i].value}`;
        elementoListaAzioni.appendChild(paragrafo);
    };




    // Versione JQuery

    $("#lista-azioni-jq").append('<li>Prova</li>');

/*

    for (let i = 0; i < abilitaArr.length; i++) {
        //console.log("Abilita: " + abilitaArr[i].name + ", Exp: " + abilitaArr[i].value);
        // console.log(`Abilita': ${abilitaArr[i].name}, Exp: ${abilitaArr[i].value}`);
        $("#lista-azioni-jq").append($(<li>a</li>))
        $el = $("li");
        $el.innerText = `Abilita': ${abilitaArr[i].name}, Exp: ${abilitaArr[i].value}`;
        $("#lista-azioni-jq").append($el);
    };
*/
});

