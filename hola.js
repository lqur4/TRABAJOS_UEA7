let texto = '{"cuerpos": ["ectomorfo", "mesomorfo", "endomorfo"], "posición": ["parado", "sentado", "acostado"]}';

const info = JSON.parse(texto);

document.getElementById ("hola").innerHTML = "cuerpo" + info.cuerpos 


{}