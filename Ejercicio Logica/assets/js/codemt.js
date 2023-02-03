function validar (){
    let x = document.getElementById('numero').value
    x =parseInt(x)
    let n=1
    while (n==1){
        if (x % 2 == 0){
            x = x/2
            console.log (x)
        }
        else {
            x= (x*3)+1
            console.log (x)
        }
        if (x == 1) {
            n=0
        }
        resultado.innerHTML += `${x} <br>`  
    }
}