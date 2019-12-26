const popupCheck = () => {

  const checkBtn = document.querySelectorAll('.check-btn'),
        checkPopup = document.querySelector('.popup-check'),
        checkPopupForm = checkPopup.querySelector('form');


    checkBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
        checkPopup.style.display = 'block';
        popupOpenShow(0);
      });
    });

  


    const popupOpenShow = (step) => {

      requestAnimationFrame(() => {
  
        if (step < 1) {
          step += 0.05;
          checkPopup.style.opacity = `${step}`;
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
          
          checkPopup.style.opacity = `${step}`;
          popupCloseShow(step);
        } else if (step === 0) {
          checkPopup.style.display = 'none';
          checkPopupForm.reset();
        }
  
      });  
    };
  
    checkPopup.addEventListener('click', (event) => {
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

export default popupCheck;