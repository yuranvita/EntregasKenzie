function positions(firstPlace, secondPlace, lastPlace) {
  let colocation = [firstPlace, secondPlace, lastPlace];

  for (let i in colocation) {
    let aux;

    if (colocation[i] === "Daniel" && Number(i) > 0) {
      //prettier-ignore
      aux = colocation[Number(i)-1];
      //prettier-ignore
      colocation[Number(i)-1] = colocation[i];
      colocation[i] = aux;

      console.log(
        `\n Bônus aplicado ao jogador ${
          colocation[Number(i) - 1]
        } subiu uma posição \n`
      );
    }
  }

  for (let i in colocation) {
    //prettier-ignore
    console.log(`${Number(i)+1}ª Colocado ${colocation[i]}`);
  }
  return colocation;
}

positions("Daniel", "vita", "Yuran");
