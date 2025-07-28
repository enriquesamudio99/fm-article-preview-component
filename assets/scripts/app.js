document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#card-btn');
  const popUp = document.querySelector('#pop-up');

  btn.addEventListener('click', () => {
    popUp.classList.toggle('pop-up--active');
    btn.classList.toggle('card__btn--active');
  });

  document.addEventListener('click', (e) => {
    const ignoreSelectors = [
      '.card__btn',
      '.pop-up'
    ];
  
    const clickedInsideIgnored = ignoreSelectors.some(selector =>
      e.target.closest(selector)
    );
  
    if (!clickedInsideIgnored) {
      popUp.classList.remove('pop-up--active');
      btn.classList.remove('card__btn--active');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      popUp.classList.remove('pop-up--active');
      btn.classList.remove('card__btn--active');
    }
  });
});