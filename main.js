// richiesta htt versione JS

 function result(response) {

    let listaAbilitaDnD = JSON.parse(response);
    let arrayListaDnD = listaAbilitaDnD.abilitaDnD;
    forListaDnD(arrayListaDnD);
};

function richiestaFile(myCallback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "lista_abilita.json", false);
    xhttp.onload = function() {
        if (xhttp.status == 200) {
            myCallback(xhttp.response);
        } else {
            console.log("ERROR")
        };
    };
    xhttp.send();
    
    
};

// for

function forListaDnD(gruppoListaDnD) {
    let elementoListaAzioni = document.getElementById("lista-azioni-js");
    for (let i = 0; i < gruppoListaDnD.length; i++) {
    let paragrafo = document.createElement("li");
    paragrafo.innerText = `Abilita': ${gruppoListaDnD[i].name}, Exp: ${gruppoListaDnD[i].value}`;
    elementoListaAzioni.appendChild(paragrafo);
    }
};

// Versione JQuery



// richiesta htt versione JQ



$(document).ready(function() {
    // richiestaFile(result);
    
    /* $.get("lista_abilita_jq.json", function (lista_json) {
        let listaDnD = lista_json.abilitaDnD;
        creaListaJq(listaDnD);
    }); */
    function creaListaJq(listaAbilita) {
        let elementoListaAzioniJq = $("#lista-azioni-jq");
        for (let i = 0; i < listaAbilita.length; i++) {
            elementoListaAzioniJq.append(`<li>Abilita': ${listaAbilita[i].name}, Exp: ${listaAbilita[i].value}</li>`);
        };
    
    };
    
  

    $.ajax({
        
        url: "lista_abilita_ajax.json",
        dataType: "json",
        method: "get", 
        crossDomain: true,
        success: function(lista_json) {
            let listaAbilita = lista_json.abilitaDnD;
            creaListaJq(listaAbilita);
    }})


});





