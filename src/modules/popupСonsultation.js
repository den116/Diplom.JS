const popupСonsultation = () => {

  const сonsultationBtn = document.querySelectorAll('.director-btn'),
        сonsultationPopup = document.querySelector('.popup-consultation'),
        сonsultationPopupForm = сonsultationPopup.querySelector('form');


    сonsultationBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
        сonsultationPopup.style.display = 'block';
        popupOpenShow(0);
      });
    });

  


    const popupOpenShow = (step) => {

      requestAnimationFrame(() => {
  
        if (step < 1) {
          step += 0.05;
          сonsultationPopup.style.opacity = `${step}`;
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
          
          сonsultationPopup.style.opacity = `${step}`;
          popupCloseShow(step);
        } else if (step === 0) {
          сonsultationPopup.style.display = 'none';
          сonsultationPopupForm.reset();
        }
  
      });  
    };
  
    сonsultationPopup.addEventListener('click', (event) => {
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

export default popupСonsultation;