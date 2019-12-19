'use strict';

const popupCall = () => {

  const callBtn = document.querySelectorAll('.call-btn'),
        callPopup = document.querySelector('.popup-call'),
        callPopupForm = callPopup.querySelector('form');


    callBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
        callPopup.style.display = 'block';
        popupOpenShow(0);
      });
    });

  


    const popupOpenShow = (step) => {

      requestAnimationFrame(() => {
  
        if (step < 1) {
          step += 0.05;
          callPopup.style.opacity = `${step}`;
          popupOpenShow(step);
        } 
  
      });      
    };
  
    const popupCloseShow = (step) => {
  
      requestAnimationFrame(() => {
  
        if (step > 0) {
          if (step > 0.05) {
            step -= 0.05;
          } else {
            step = 0;
          }
          
          callPopup.style.opacity = `${step}`;
          popupCloseShow(step);
        } else if (step === 0) {
          callPopup.style.display = 'none';
          callPopupForm.reset();
        }
  
      });  
    };
  
    callPopup.addEventListener('click', (event) => {
      let target = event.target;
  
      if (target.classList.contains('popup-close')) {
        popupCloseShow(1);  
      } else {
        target = target.closest('.popup-content');
        if (!target) {
          popupCloseShow(1);
        }
      }
    });

};

popupCall();

const formsValidate = () => {
  const inputs = document.querySelectorAll('form input');
  console.log(inputs);

  inputs.forEach((elem) => {

    elem.addEventListener('input', () => {
      
      if( elem.name === 'user_name' || elem.classList.contains('mess')) {
          elem.value = elem.value.replace(/[^а-я\s]+/gi, '');
      } else if (elem.name === 'user_phone') {
        elem.value = elem.value.replace(/[^0-9\+]+/g, '');
      }

    });

  });

};

formsValidate();



