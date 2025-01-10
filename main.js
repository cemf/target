function questao1(){
    const indice=13
    let soma=0
    let k=0
    while (k<indice){
        k=k+1;
        soma=soma+k;
    }
    console.log(soma);
    let element = document.getElementById('result')
    console.log(element)
    element.innerText = soma;
    
    return soma;
}

async function fetchData() {
    const res = await fetch('./dados.json');
    const data = await res.json();
    handleDataQuestao3(data);
  }


const handleDataQuestao3 = (dados) => {
    const lowestProfit = document.getElementById('lowestProfit');
    const highestProfit = document.getElementById('highestProfit');
    const daysAverage = document.getElementById('daysAverage');

    const average = () =>{
        let soma = 0;
        let dias = 0;
        for (let i = 0; i < dados.length; i++) {
            if(dados[i].valor != 0){
                soma += dados[i].valor;
                dias++;
            }
            
        }
        return soma / dias;
    }
    console.log(average)
    const values = dados => dados.map(dado => dado.valor);
    let highest = Math.max(...values);
    let positiveNumbers = values.filter((value) => value > 0);
    let lowest = Math.min(...positiveNumbers);

    lowestProfit.innerText = `Menor lucro: ${lowest}`;
    highestProfit.innerText = `Maior lucro: ${highest}`;

    let daysBestThanAverage = dados.filter(dado => dado.valor > average).length;

    daysAverage.innerText = `Dias com lucro acima da média: ${daysBestThanAverage}`;
}

questao1();
handleDataQuestao3();

