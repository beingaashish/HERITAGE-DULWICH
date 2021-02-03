class Modal{
    constructor(){
        this.openModalButtons = document.querySelectorAll('.open-modal');
        this.closeIcon = document.querySelector('.modal__close');
        this.modal = document.querySelector('.modal');
        this.modalMenuCategory = document.querySelector('.modal__menu-category');
        this.events();
    }

    events(){
        //listen for open click in our case the click of a button
        this.openModalButtons.forEach(el => el.addEventListener('click', e => {
            this.openTheModal(e);
            //use this menu category to add name of the category dynamically meaning to extract the element that was clicked
            this.updateModalMenuTitle(e.target.innerText);
        }));

        //listen for close click in our case the close button
        this.closeIcon.addEventListener('click', () => this.closeTheModal())

        //listen for escape key to close the modal
        document.addEventListener('keyup', e => this.keyPressHandler(e))
    }

    updateModalMenuTitle(str){
        this.modalMenuCategory.innerText = str;
    }

    keyPressHandler(e){
        if(e.keyCode == 27){
            this.closeTheModal();
        }
    }

    openTheModal(e){
        e.preventDefault();
        this.modal.classList.add('modal--is-visible');
    }

    closeTheModal(){
        this.modal.classList.remove('modal--is-visible');
    }
}

export default Modal;