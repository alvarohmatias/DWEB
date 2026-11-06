var x = prompt("Inisra: pedra, papel ou tesoura: ");
x = x.toUpperCase();
console.log(x);

var y = Math.random();
console.log(y);

/*  pedra: entre 0 e 0.33;
    papel: entre 0.33 e 0.66;
    tesoura: entre 0.66 e 1.00; */

if (y >= 0 && y <= 0.33)
    y = 'PEDRA';
else if (y > 0.33 && y <= 0.66)
    y = 'PAPEL';
else if (y > 0.66 && y <= 1)
    y = 'TESOURA';

console.log("O valor de y e igual: ", y);


document.writeln(`Você escolheu: ${x} <br>`);
document.writeln(`A máquina escolheu: ${y} <br><br>`);

var vencedor;

if (x == y) {
    document.writeln("EMPATE");
    vencedor = "NINGUÉM! ";
}
else if (x == 'PEDRA' && y == 'PAPEL') {
    document.writeln("PAPEL cobre a PEDRA");
    vencedor = "Você!";
}
else if (y == 'PEDRA' && x == 'PAPEL') {
    document.writeln("PAPEL cobre a PEDRA");
    vencedor = "a Máquina"
}
else if (x == 'TESOURA' && y == 'PAPEL') {
    document.writeln('TESOURA corta o PAPEL');
    vencedor = "Você!"
}
else if (y == 'TESOURA' && x == 'PAPEL') {
    document.writeln('TESOURA corta o PAPEL');
    vencedor = "a Máquina";
}
else if (x == 'PEDRA' && y == 'TESOURA') {
    document.writeln('PEDRA quebra TESOURA');
    vencedor = "Você!";
}
else if (y == 'PEDRA' && x == 'TESOURA') {
    document.writeln('PEDRA quebra TESOURA');
    vencedor = "a Máquina";
}

document.writeln(`<br>O vencedor é ${vencedor}`);





