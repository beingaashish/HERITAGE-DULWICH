import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import Modal from './modules/Modal';

if(module.hot){
    module.hot.accept()
}


let mobileMenu = new MobileMenu();
let modal = new Modal();

$(document).ready(function(){
    $('.carousel__elements').slick();
  });

  $(document).ready(function(){
    $('.image-slider').slick();
  });


  