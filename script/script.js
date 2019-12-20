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

const sendForm = () => {

  const errorMassage = 'Ошибка',
        loadMassage = 'Идет отправка',
        successMassage = 'Отправлено';

  const forms = document.querySelectorAll('form'),
        popup = document.querySelector('.popup');
        

  const statusMassage = document.createElement('div');
  statusMassage.style.cssText = 'font-size: 2rem; color: white';

  forms.forEach((form) => {

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      form.appendChild(statusMassage);
      statusMassage.textContent = loadMassage;

      const formData = new FormData(form);
      
      let body = {};
    
      formData.forEach((val, key) => {
        body[key] = val;
      });

      const good = (response) => {
        if (response.status !== 200) {
          throw new Error('status network not 200');  
        }
        statusMassage.style.cssText = 'color: green';
        statusMassage.textContent = successMassage;
        setTimeout (() => {
          statusMassage.remove();
          setTimeout (() => {
            popup.style.display = 'none';
          }, 2000);
        }, 2000);
      };

      const notGood = (error) => {
        statusMassage.style.cssText = 'color: red';
        statusMassage.textContent = errorMassage;
        setTimeout (() => {
          statusMassage.remove();
          setTimeout (() => {
            popup.style.display = 'none';
          }, 2000);
        }, 2000);
      };

      postData(body)
        .then(good)
        .catch(notGood);

      

      form.reset();

    });

  });

  const postData = (body) => {
    return fetch ('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
      credentials: 'include' 
    });

    
  };
};
sendForm();

// const allAccordionMove = () => {

//   const tabHeader = document.querySelectorAll('.panel-group'),
//         tab = document.querySelectorAll('.panel-heading'),
//         tabContent = document.querySelectorAll('.panel-collapse'),
//         constructBtn = document.querySelectorAll('.construct-btn');
  
//   const toggleTabContent = (index) => {
//     for (let i = 0; i < tabContent.length; i++) {
//       if (index === i) {
//         tabContent[i].classList.add('in');
//       } else {
//         tabContent[i].classList.remove('in');
//       }
//     }
//   };
  
//   tabHeader.forEach((elem) => {
//     elem.addEventListener('click', (event) => {

//       let target = event.target.closest('.panel-heading, .construct-btn');
          
      
//         if (target) {
//           tab.forEach((item, i) => {
//             if (item === target) {
//               toggleTabContent(i);
//             }
//           });

//           constructBtn.forEach((element, index) => {
//             if (element === target) {
//               toggleTabContent(index + 1);
//             }
//           });
//         }
//     });
//   }); 

// };

// allAccordionMove();

const accordionOne = () => {

  const tabHeader = document.querySelectorAll('.panel-group')[0],
        tab = tabHeader.querySelectorAll('.panel-heading'),
        tabContent = tabHeader.querySelectorAll('.panel-collapse'),
        constructBtn = tabHeader.querySelectorAll('.construct-btn');
  
  const toggleTabContent = (index) => {
    for (let i = 0; i < tabContent.length; i++) {
      if (index === i) {
        tabContent[i].classList.add('in');
      } else {
        tabContent[i].classList.remove('in');
      }
    }
  };
  
  tabHeader.addEventListener('click', (event) => {

    let target = event.target.closest('.panel-heading, .construct-btn');
        
    
      if (target) {
        tab.forEach((item, i) => {
          if (item === target) {
            toggleTabContent(i);
          }
        });

        constructBtn.forEach((element, index) => {
          if (element === target) {
            if (index === 3) {
              toggleTabContent(0);
            } else {
              toggleTabContent(index + 1);
            }
          }
        });
      }
  });

};
accordionOne();

const accordionTwo = () => {

  const tabHeader = document.querySelectorAll('.panel-group')[1],
        tab = document.querySelectorAll('.panel-heading'),
        tabContent = document.querySelectorAll('.panel-collapse');
  
  const toggleTabContent = (index) => {
    for (let i = 0; i < tabContent.length; i++) {
      if (index === i) {
        tabContent[i].classList.add('in');
      } else {
        tabContent[i].classList.remove('in');
      }
    }
  };
  
  tabHeader.addEventListener('click', (event) => {

    let target = event.target.closest('.panel-heading');
        
    
      if (target) {
        tab.forEach((item, i) => {
          if (item === target) {
            toggleTabContent(i);
          }
        });
      }
  });

};
accordionTwo();



