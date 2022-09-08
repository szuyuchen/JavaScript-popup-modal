const openModal = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const closeModal = document.getElementById('close');


// when click open btn, apply the class of show. The modal will be displayed.
openModal.addEventListener('click', () => {
    modal_container.classList.add('show');
});

// when click close btn, remove the class of show. The modal will be disappeared.
closeModal.addEventListener('click', () => {
  modal_container.classList.remove('show');
});