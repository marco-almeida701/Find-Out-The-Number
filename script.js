let numberToFind = 0
let attemps = 0

function refresh(){
    //gera um número aleatório
    
    numberToFind = parseInt(Math.random() *100)

    console.log(numberToFind)
}

function verifyNumber(){

    let bet = document.getElementById('bet').value
    
    if(bet > 100 || bet < 1){

        alert ('Aposta inválida')
        return
    }

    if(bet > numberToFind){

        attemps++
        alert('O número para ser encontrado é Menor')
    }

    else if( bet < numberToFind){
        
        attemps++
        alert('O número para ser encontrado é MAIOR')
    }
    
    else {
        alert(`Parabéns você Acertou!! Com ${attemps} erros` )
    }
}

refresh()