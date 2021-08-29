//Guilherme Henrique Mendonça Andrade
let vidas = 3;
let municao = 100;
let pontos = 0
let tiros = 1500;
let acertos = 750;
let mediaacertos = (acertos / tiros) * 100;
let nome;
nome = prompt("Coloque seu nome: ");

document.write("Nome: <span style='color:#F00'>" + nome + "</span><br>");
document.write("Vidas: <span style='color:#F00'>" + vidas + "</span><br>");
document.write("Munição: <span style='color:#F00'>" + municao + "</span><br>");
document.write("Pontos: <span style='color:#F00'>" + (pontos + (vidas * 10)) + "</span><br>");
document.write("Média de acertos: <span style='color:#F00'>" + mediaacertos + "%</span><br>");

document.writeln("Olá " + nome);

let energia = 100;
let velocidade;

if ((energia > 80) && (energia <= 100)){
    document.write("Energia Alta");
    velocidade = 100;
}
else if ((energia > 60) && (energia <= 80)){
    document.write("Energia Boa");
    velocidade = 80;
}
else if ((energia > 40) && (energia <= 60)){
    document.write("Energia Média");
    velocidade = 60;
}
else if ((energia > 20) && (energia <= 40)){
    document.write("Energia Baixa");
    velocidade = 40;
}
else if ((energia > 1) && (energia <= 20)){
    document.write("Energia Crítica");
    velocidade = 20;
}
else{
    document.write("Jogador Morto");
    velocidade = 0;
}

tx = document.getElementById("texto").innerHTML;
document.write("<br>" + "Texto da tag P: " + tx);

tagP = document.getElementsByTagName("p")[0];
document.write("<br>" + tagP.innerHTML);

var ps = document.querySelectorAll("p");
ps[0].style.backgroundColor = "#F00";