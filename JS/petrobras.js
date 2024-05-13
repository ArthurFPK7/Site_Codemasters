var bacias = [
    { nome: "Bacia de Santos ", blocos: ["BM-S-13", "BM-S-3", "GUARA_SUL", "S-M-673"] },
    { nome: "Bacia do Paraná", blocos: ["BM-S-13", "BM-S-3", "GUARA_SUL", "S-M-673"] },
    
];


var baciaSelect = document.getElementById("bacia");
var blocoSelect = document.getElementById("bloco");

bacias.forEach(function(bacia) {
    var option = document.createElement("option");
    option.text = bacia.nome;
    option.value = bacia.nome;
    baciaSelect.add(option);
});

function populaBlocos() {
    var baciaSelecionado = baciaSelect.value;
    blocoSelect.innerHTML = ""; 

    if (baciaSelecionado !== "") {
        var bacia = bacias.find(function(bac) {
            return bac.nome === baciaSelecionado;
        });

        bacia.blocos.forEach(function(bloco) {
            var option = document.createElement("option");
            option.text = bloco;
            option.value = bloco;
            blocoSelect.add(option);
        });
    } else {
        var option = document.createElement("option");
        option.text = "Selecione uma Bacia primeiro";
        blocoSelect.add(option);
    }
}