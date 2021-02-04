class Backdrop{
    constructor(){
        this.closeIcon = document.querySelector('.backdrop-message__close');
        this.backdropMessage = document.querySelector('.backdrop-message');
        this.events();
    }

    events(){

        //listen for close click in our case the close button
        this.closeIcon.addEventListener('click', () => this.closeTheBackdrop())

        //listen for escape key to close the modal
        document.addEventListener('keyup', e => this.keyPressHandler(e))
    }

    keyPressHandler(e){
        if(e.keyCode == 27){
            this.closeTheBackdrop();
        }
    }

    closeTheBackdrop(){
        this.backdropMessage.classList.remove('backdrop-message--is-visible');
    }
}

export default Backdrop;