
function validar(texto){
    let validas=/^[a-z\s]+$/;
    return validas.test(texto);
}
function adelante(){
    let texto = document.getElementById('campoUsuario').value;
    let mensajeError=document.getElementById("error");
    if(validar(texto)){
        mensajeError.style.display="none";
        encriptar(texto);
    }
    else{
        mensajeError.style.display="block";
        document.getElementById("imagenAntes").style.display="none";
    }
}
function encriptar(texto){
       
    let textoEncriptado="";
    
    for(let i = 0; i<texto.length;i++){
        let caracterActual = texto[i];
        if(caracterActual=='a'){
            textoEncriptado+='ai';
        }
        else if(caracterActual=='e'){
            textoEncriptado+='enter'
        }
        else if(caracterActual=='i'){
            textoEncriptado+='imes'
        }
        
        else if(caracterActual=='o'){
            textoEncriptado+='ober'
        }
        
        else if(caracterActual=='u'){
            textoEncriptado+='ufat'
        }
        else{
            textoEncriptado+=caracterActual;
        }
    }
        limpiarCaja();
        document.getElementById('Resultado').innerText = textoEncriptado;
        document.getElementById("imagenAntes").style.display="none";
        document.getElementById('Resultado').style.display ="block";
        document.getElementById('copiar').style.display="block";
}
function desencriptar(){
    let texto = document.getElementById('campoUsuario').value;
    let textoDesencriptado=texto
    .replace(/ai/g, 'a')
    .replace(/enter/g,'e')
    .replace(/imes/g,'i')
    .replace(/ober/g,'o')
    .replace(/ufat/g,'u');
    limpiarCaja();
    document.getElementById('Resultado').innerHTML=textoDesencriptado;
    document.getElementById('Resultado').style.display ="block";
    document.getElementById('copiar').style.display="block";
}
function copiar(){
    let textoEncriptado = document.getElementById("Resultado").innerText;
    navigator.clipboard.writeText(textoEncriptado);
}
function limpiarCaja(){
    document.querySelector('#campoUsuario').value = '';
}