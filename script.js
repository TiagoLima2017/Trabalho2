var binary = document.getElementById("bin");
var octal = document.getElementById("oct")
var decimal = document.getElementById("dec");
var hexadecimal = document.getElementById("hex");
var inputEl = document.getElementsByClassName("output");
var calcEl = document.getElementsByClassName("outpute");
var igualEl = document.getElementById("igual");
var resulte = 0;
var mapper = {
    "bin":2,
    "oct":8,
    "dec":10,
    "hex":16,
};
for (var i = 0; i < inputEl.length; i++) {
    var element = inputEl[i];  
      
    element.addEventListener("keyup", e => {
        var inputId = e.target.id;
        var inputValue = parseInt(document.getElementById(inputId).value, mapper[inputId]);
        var result = Number.isNaN(inputValue) ? "Inválido" : inputValue;

        if ("bin" != inputId) { binary.value = result.toString(mapper["bin"]) }
        if ("oct" != inputId) { octal.value = result.toString(mapper["oct"]) }
        if ("dec" != inputId) { decimal.value = result.toString(mapper["dec"]) }
        if ("hex" != inputId) { hexadecimal.value = result.toString(mapper["hex"]) }
    });
};
igualEl.addEventListener("click", e => {
    var calculo = document.getElementById("dec");
    if (resulte == calculo.value) return;
 
    resulte = Number(calculo.value);

      binary.value = resulte.toString(mapper["bin"]);
      decimal.value = Number(resulte).toString(mapper["dec"]);
      octal.value = resulte.toString(mapper["oct"]); 
      hexadecimal.value = resulte.toString(mapper["hex"]);  
});
