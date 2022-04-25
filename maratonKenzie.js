function positions(colocation) {
  for (let i in colocation) {
    let aux;

    if (colocation[i] === "Daniel" && Number(i) > 1) {
      //prettier-ignore
      aux = colocation[Number(i)-1];
      //prettier-ignore
      colocation[Number(i)-1] = colocation[i];
      colocation[i] = aux;

      console.log(
        `\n Bônus aplicado ao jogador 😎 ${
          colocation[Number(i) - 1]
        } subiu uma posição \n`
      );
    }
  }

  for (let i in colocation) {
    //prettier-ignore
    console.log(`🚀 ${Number(i)+1}ª Colocado ${colocation[i]}`);
  }
  return colocation;
}

let colocation = [
  "vita",
  "Yuran",
  "Nauto",
  "Monza",
  "Sedan",
  "Daniel",
  "Chevete",
  "Corsa 2 Portas",
  "Celta Preto Turbinado",
  "Saveiro Rebaixada",
  "Vasco Segunda Divisão",
  "Palmeiras Não tem Mudial",
];

positions(colocation);
