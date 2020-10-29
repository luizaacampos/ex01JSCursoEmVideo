function carregar(){
    var msg = window.document.getElementById('message')
    var img = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `<h3>Agora são ${hora} horas.</h3>`
    if(hora >= 0 && hora < 12){
        document.body.style.background = '#f2f569'
        msg.innerHTML += '<p>BOM DIA!</p>'
        img.src = 'images/manha.jpg'
    }else if(hora >= 12 && hora < 18){
        document.body.style.background = '#f7bf6a'
        msg.innerHTML += '<p>BOA TARDE!</p>'
        img.src = 'images/tarde.jpg'
    }else {
        document.body.style.background = '#221269'
        msg.innerHTML += '<p>BOA NOITE!</p>'
        img.src = 'images/noite.jpg'
    }
}
