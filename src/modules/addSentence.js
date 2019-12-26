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

export default addSentence;