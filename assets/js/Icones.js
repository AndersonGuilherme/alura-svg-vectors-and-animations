class Icones {
    constructor(){
        this.listaIcones = document.querySelectorAll('.icone')
    }

    animaIcones(){
        TweenMax.to(this.listaIcones, 1.5, {scale: 0.95, x: 5, y: 5, repeat: -1, yoyo: true} )
    }
}

export { Icones }