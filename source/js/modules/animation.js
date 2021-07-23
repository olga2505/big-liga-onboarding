const animation = () => {
  const logo = document.querySelector('.main__logo');
  const headerLogo = document.querySelector('.header__logo');
  const body = document.querySelector('body');
  const main = document.querySelector('.main');
  const LOAD_END = 1300;
  const SITE_START = 500;

  if (!logo) {
    return;
  }

  logo.classList.add('main__logo--load');

  const openSite = () => {
    main.classList.add('load-close');
    setTimeout(() => {
      body.classList.add('open-site');
    }, SITE_START);
  };

  const onkeydown = (evt) => {
    if (evt.key === 'Enter') {
      openSite();
    }
  };

  setTimeout(() => {
    body.addEventListener('click', openSite);
    window.addEventListener('keydown', onkeydown);
  }, LOAD_END);


  headerLogo.onclick = function (event) {
    event.stopPropagation();
  };

  body.onclick = function (event) {
    // console.log(event.target);
    if (main.classList.contains('load-close')) {
      if (event.target !== headerLogo) {
        main.classList.toggle('open-description');
      }
    }
  };
};

export {animation};
