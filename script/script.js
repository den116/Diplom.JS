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
popupDiscount();


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
popupCheck();


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
popupСonsultation();


// const animatePopup = () => {

//   const allBtn = document.querySelectorAll('button'),
//         allPopup = document.querySelectorAll('.popup');
        


//     allBtn.forEach((elem) => {
//       elem.addEventListener('click', () => {
//         if (!elem.classList.contains('add-sentence-btn')) {
//           popupOpenShow(0);
//         }
//       });
//     });

  


//     const popupOpenShow = (step) => {

//       requestAnimationFrame(() => {
  
//         if (step < 1) {
//           step += 0.05;
//           allPopup.forEach((elem) => {
//             elem.style.opacity = `${step}`;
//           });
//           popupOpenShow(step);
//         } 
  
//       });      
//     };
  
//     const popupCloseShow = (step) => {
  
//       requestAnimationFrame(() => {
  
//         if (step > 0) {
//           if (step > 0.05) {
//             step -= 0.05;
//           } else {
//             step = 0;
//           }
          
//           allPopup.style.opacity = `${step}`;
//           popupCloseShow(step);
//         } else if (step === 0) {
//           allPopup.style.display = 'none';
//           diccountPopupForm.reset();
//         }
  
//       });  
//     };
  
//     allPopup.forEach((elem) => {
//       elem.addEventListener('click', (event) => {
//         let target = event.target;
    
//         if (target.classList.contains('popup-close')) {
//           popupCloseShow(1);  
//         } else {
//           target = target.closest('.popup-content');
//           if (!target) {
//             popupCloseShow(1);
//           }
//         }
//       });
//     });

// };
// animatePopup();


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
        popup = document.querySelectorAll('.popup');
        

  const statusMassage = document.createElement('div');
  statusMassage.style.cssText = 'font-size: 2rem; color: green';

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
        statusMassage.style.cssText = 'font-size: 2rem; color: green';
        statusMassage.textContent = successMassage;
        setTimeout (() => {
          statusMassage.remove();
          setTimeout (() => {
            popup.forEach((elem) => {
              elem.style.display = 'none';
            });
          }, 2000);
        }, 2000);
      };

      const notGood = (error) => {
        statusMassage.style.cssText = 'font-size: 2rem; color: red';
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
        tab = tabHeader.querySelectorAll('.panel-heading'),
        tabContent = tabHeader.querySelectorAll('.panel-collapse');
  
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


const addSentence = () => {
  const addSentenceBtn = document.querySelector('.add-sentence-btn'),
        hidenBlocks = document.querySelectorAll('.hidden');

  addSentenceBtn.addEventListener('click', () => {
    hidenBlocks.forEach((elem) => {
      elem.classList.remove('hidden');
    });
    addSentenceBtn.style.display = 'none';
  });



};
addSentence();

const calc = () => {

  const myonoffswitch = document.getElementById('myonoffswitch'),
        myonoffswitchTwo = document.getElementById('myonoffswitch-two'),
        selectBoxTwo = document.querySelector('.select-box-two'),
        inputMeters = document.getElementById('meters'),
        calcResult = document.getElementById('calc-result'),
        calcItems = document.querySelectorAll('.form-control'),
        panelGroup = document.querySelector('.panel-group');

  let septic = {},

      camera = 0,
      diameter = 0,
      rings = 0,
      diameterTwo = 0,
      rings2 = 0,
      bottom = 0;
      

  if (myonoffswitch.checked) {
    selectBoxTwo.style.display = 'none';
    camera = 10000;
  };  
  
  if (myonoffswitchTwo.checked) {
    bottom = 1000;
  }

  panelGroup.addEventListener('change', (event) => {
    const target = event.target;

    if (target === myonoffswitch) {
      
      if (myonoffswitch.checked) {
            if (myonoffswitchTwo.checked) {
              bottom = 1000;
              septic.bottom = true;
            } else {
              bottom = 0;
              septic.bottom = false;
            };
        selectBoxTwo.style.display = 'none';
        camera = 10000;
        septic.doubleCamera = false;
      } else {
            if (myonoffswitchTwo.checked) {
              bottom = 2000;
              septic.bottom = true;
            } else {
              bottom = 0;
              septic.bottom = false;
            };
        selectBoxTwo.style.display = 'block';
        camera = 15000;
        septic.doubleCamera = true;
      };
    }; 

    calcItems.forEach((elem, i) => {
      if (target === elem) {
        if (i == 0 && elem.value < 2) {
          diameter = 0;
          septic.diameterOne = '1.4';
        } else if (i == 0 && elem.value == 2) {
          diameter = 0.2;
          septic.diameterOne = '2';
        } else if (i == 2 && elem.value < 2) {
          diameterTwo = 0;
          septic.diameterTwo = '1.4';
        } else if (i == 2 && elem.value == 2) {
          diameterTwo = 0.2;
          septic.diameterTwo = '2';
        } else if (i == 1 && elem.value == 1) {
          rings = 0;
          septic.ringsOne = '1';
        } else if (i == 1 && elem.value == 2) {
          rings = 0.3;
          septic.ringsOne = '2';
        } else if (i == 1 && elem.value == 3) {
          rings = 0.5;
          septic.ringsOne = '3';
        } else if (i == 3 && elem.value == 1) {
          rings2 = 0;
          septic.ringsTwo = '1';
        } else if (i == 3 && elem.value == 2) {
          rings2 = 0.3;
          septic.ringsTwo = '2';
        } else if (i == 3 && elem.value == 3) {
          rings2 = 0.5;
          septic.ringsTwo = '3';
        };
      };
    });

    if (target === myonoffswitchTwo) {
      if (myonoffswitchTwo.checked) {
          if (myonoffswitch.checked) {
            bottom = 1000;
          } else {
            bottom = 2000;
          };
        septic.bottom = true;
      } else  {   
        bottom = 0;
        septic.bottom = false;
      };
    };

    if (target === inputMeters) {
      septic.meters = inputMeters.value;
    };

    countSum();
    septic.cost = calcResult.value;
  });

  const countSum = () => {
    let diametrValue1 = diameter * (camera + bottom),
        ringsValue1 = (camera + bottom + diametrValue1) * rings,
        diametrValue2 = diameterTwo * (camera + bottom),
        ringsValue2 = (camera + bottom + diametrValue2) * rings2;

    let total = +Math.round(camera + diametrValue1 + ringsValue1 + diametrValue2 + ringsValue2 + bottom);
    
    calcResult.value = total;

    console.dir(septic);
  };

};
calc();



