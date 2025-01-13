function questao1() {
  const indice = 13;
  let soma = 0;
  let k = 0;
  while (k < indice) {
    k = k + 1;
    soma = soma + k;
  }
  let element = document.getElementById("result");
  element.innerText = soma;

  return soma;
}

function isInFibonacciSequence(number) {
  if (number < 0 || isNaN(number)) {
    return "Número inválido";
  } else if (number == 0) {
    return true;
  } else {
    let before = 0;
    let after = 1;
    while (after < number) {
      let temp = before;
      before = after;
      after = temp + after;
    }
    return after == number
      ? "Está na sequência de Fibonacci"
      : "Não está na sequência de Fibonacci";
  }
}

document.getElementById("checkFibonacci")?.addEventListener("click", () => {
  const number = document.getElementById("number").value;
  const result = document.getElementById("resultFibonn");
  result.innerText = isInFibonacciSequence(number);
});

async function fetchDataquestion3() {
  const res = await fetch("./dados.json");
  const data = await res.json();
  handleDataQuestao3(data);
}

const handleDataQuestao3 = (dados) => {
  const lowestProfit = document.getElementById("lowestProfit");
  const highestProfit = document.getElementById("highestProfit");
  const daysAverage = document.getElementById("daysAverage");

  const average = () => {
    let soma = 0;
    let dias = 0;
    for (let i = 0; i < dados.length; i++) {
      if (dados[i].valor != 0) {
        soma += dados[i].valor;
        dias++;
      }
    }
    return soma / dias;
  };

  const values = dados.map((dado) => dado.valor);
  let highest = Math.max(...values);
  let positiveNumbers = values.filter((value) => value > 0);
  let lowest = Math.min(...positiveNumbers);

  lowestProfit.innerText = `Menor lucro: ${lowest.toFixed(2)}`;
  highestProfit.innerText = `Maior lucro: ${highest.toFixed(2)}`;

  let daysBestThanAverage = dados.filter(
    (dado) => dado.valor > average()
  ).length;

  daysAverage.innerText = `Dias com lucro acima da média: ${daysBestThanAverage}`;
};

const questao4 = () => {
  const sp = 67836.43;
  const rj = 36678.66;
  const mg = 29229.88;
  const es = 27165.48;
  const outros = 19849.53;

  var total = sp + rj + mg + es + outros;

  var percentSp = (sp / total) * 100;
  var percentRj = (rj / total) * 100;
  var percentMg = (mg / total) * 100;
  var percentEs = (es / total) * 100;
  var percentOutros = (outros / total) * 100;

  document.getElementById("total").innerHTML = total;
  document.getElementById("sp").innerHTML = percentSp.toFixed(2);
  document.getElementById("rj").innerHTML = percentRj.toFixed(2);
  document.getElementById("mg").innerHTML = percentMg.toFixed(2);
  document.getElementById("es").innerHTML = percentEs.toFixed(2);
  document.getElementById("outros").innerHTML = percentOutros.toFixed(2);
};

document.getElementById("invertString")?.addEventListener("click", () => {
  document.getElementById("stringInverted").innerText = "";
  const word = document.getElementById("string").value;
  if (word.length > 0) {
    let result = word;
    let newString = "";
    for (let i = result.length - 1; i >= 0; i--) {
      newString += result[i];
    }
    console.log(newString);
    document.getElementById("stringInverted").innerText = newString;
  }
});

questao1();
fetchDataquestion3();
questao4();
