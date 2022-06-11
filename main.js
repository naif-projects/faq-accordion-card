import './index.scss';

// close all details element

const detailsElements = document.querySelectorAll('details');

detailsElements.forEach((el) => {
  let isDetailsOpen = false;
  el.addEventListener('click', (event) => {
    // re close when click
    if (isDetailsOpen) {
      setTimeout(() => {
        el.removeAttribute('open');
      }, 10);

      isDetailsOpen = false;
      return;
    }

    // close all open details
    document
      .querySelectorAll('[open]')
      .forEach((el) => el.removeAttribute('open'));

    isDetailsOpen = true;
  });
});
