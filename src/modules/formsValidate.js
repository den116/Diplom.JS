const formsValidate = () => {
  const inputs = document.querySelectorAll('form input');

  inputs.forEach((elem) => {

    elem.addEventListener('input', () => {
      
      if( elem.name === 'user_name' || elem.classList.contains('mess') || elem.name === 'user_quest') {
          elem.value = elem.value.replace(/[^а-я\s]+/gi, '');
      } else if (elem.name === 'user_phone') {
        elem.value = elem.value.replace(/[^0-9\+]+/g, '');
      }

    });

  });

};

export default formsValidate;