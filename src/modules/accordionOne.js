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

export default accordionOne;