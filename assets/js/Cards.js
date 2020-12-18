class Cards {
    constructor(){
        this.sectionDicas = document.getElementById('section-dicas');
        this.cardEsq = document.querySelector('.card-esq');
        this.cardDir = document.querySelector('.card-dir');
    }

    scrollCards(){
        window.requestAnimationFrame(this.calculoScroll.bind(this))
    }

    calculoScroll() {
        const { y } =  this.sectionDicas.getBoundingClientRect();
        if( y >= 100 ){
            this.cardEsq.style.transform = `translate(${((-y)+100)/5}%)`;
            this.cardDir.style.transform = `translate(${(y-100)/5}%)`;
        }
    }
}

export { Cards }