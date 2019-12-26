const popupDiscount = () => {

  const diccountBtn = document.querySelectorAll('.discount-btn'),
        diccountPopup = document.querySelector('.popup-discount'),
        diccountPopupForm = diccountPopup.querySelector('form');


    diccountBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
        diccountPopup.style.display = 'block';
        popupOpenShow(0);
      });
    });

  


    const popupOpenShow = (step) => {

      requestAnimationFrame(() => {
  
        if (step < 1) {
          step += 0.05;
          diccountPopup.style.opacity = `${step}`;
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
          
          diccountPopup.style.opacity = `${step}`;
          popupCloseShow(step);
        } else if (step === 0) {
          diccountPopup.style.display = 'none';
          diccountPopupForm.reset();
        }
  
      });  
    };
  
    diccountPopup.addEventListener('click', (event) => {
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

export default popupDiscount;