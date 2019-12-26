const sendForm = () => {

  const errorMassage = 'Ошибка',
        loadMassage = 'Идет отправка',
        successMassage = 'Отправлено';

  const forms = document.querySelectorAll('form'),
        popup = document.querySelectorAll('.popup');

  const statusMassage = document.createElement('div');
  
  statusMassage.style.cssText = 'font-size: 2rem; color: green';

  const inputQuestion = document.querySelector('.input-question');

  forms.forEach((form) => {

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!form.classList.contains('director-form')) {

        form.appendChild(statusMassage);
        statusMassage.textContent = loadMassage;

        const formData = new FormData(form);
        
        let body = {};
      
        formData.forEach((val, key) => {
          body[key] = val;
        });

        if(event.target.closest('.popup-calc')){
          body.calc = localStorage.test;
        }

        if(event.target.closest('.popup-consultation')){
          body.question = localStorage.question;
        }

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

        delete localStorage.test;
        delete localStorage.question;
        inputQuestion.value = '';

      } 

      

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

export default sendForm;