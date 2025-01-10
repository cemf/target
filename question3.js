
export default async function fetchData() {
    const res = await fetch('./dados.json');
    const data = await res.json();
    handleData(data);
  }


const handleData = (dados) => {
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
}
