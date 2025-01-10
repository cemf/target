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
questao1();