let comtador = 1;
document.getElementById('radio1').checked = true;

setInterval(() => {
correImagem();
}, 5000);

function correImagem(){
    comtador++;
    if(comtador > 4){
        comtador = 1;
    }
    document.getElementById('radio'+comtador).checked = true;
}