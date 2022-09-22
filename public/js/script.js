let preBtn = document.querySelector('.pre');
let nextBtn = document.querySelector('.next');

const addActiveClass = () => {
  let urlParams = new URLSearchParams(window.location.search);
  let page = parseInt(urlParams.get('page'));
  if (!page || page === 1) {
    document.querySelector('.page-1').classList.add('bg-warning');
  } else if (page === 2) {
    document.querySelector('.page-2').classList.add('bg-warning');
  } else if (page === 3) {
    document.querySelector('.page-3').classList.add('bg-warning');
  } else if (page === 4) {
    document.querySelector('.page-4').classList.add('bg-warning');
  } else if (page === 5) {
    document.querySelector('.page-5').classList.add('bg-warning');
  }
};
addActiveClass();
// previous Button
preBtn.addEventListener('click', () => {
  let urlParams = new URLSearchParams(window.location.search);
  let page = parseInt(urlParams.get('page'));
  if (!page || page === 1) {
    return;
  }
  let newPage = page - 1;
  urlParams.set('page', newPage);
  urlParams.toString();
  window.location.search = urlParams;
});

// Next Button
nextBtn.addEventListener('click', () => {
  console.log('next');
  let urlParams = new URLSearchParams(window.location.search);
  let page = parseInt(urlParams.get('page'));
  let newPage;
  if (page === 5) {
    return;
  }
  if (!page) {
    newPage = 2;
  } else {
    newPage = page + 1;
  }
  urlParams.set('page', newPage);
  urlParams.set('limit', '5');
  urlParams.toString();
  window.location.search = urlParams;
});
