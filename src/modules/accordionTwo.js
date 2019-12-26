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

export default accordionTwo;