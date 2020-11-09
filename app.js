const mail = document.getElementById('email')
const senha = document.getElementById('senha')

mail.addEventListener('focusout', ()=>{

    let valueMail = mail.value
    valueMail = valueMail.split('')

    if(mail.value != ''){
        if(!mail.value.match('@')){
            const erro = document.getElementById('erro-mail')
            erro.innerHTML = "Digite um e-mail válido!";  
        }else if (!mail.value.match('.com')){
            const erro = document.getElementById('erro-mail')
            erro.innerHTML = "Digite um e-mail válido!"; 
        }else if (valueMail[valueMail.indexOf('@')+1] == "."){
            const erro = document.getElementById('erro-mail')
            erro.innerHTML = "Digite um e-mail válido!"; 
        }else{
            const erro = document.getElementById('erro-mail')
            erro.innerHTML = ""; 
        }
    }else{
        const erro = document.getElementById('erro-mail')
        erro.innerHTML = ""; 
    }
})