const shareBtn = document.getElementById('share-btn');
const popup = document.getElementById('popup');

shareBtn.addEventListener('click', () => {
  if (!popup.classList.contains('active')) {
    popup.classList.remove('hidden');
    popup.classList.add('active');
  } else {
    popup.classList.remove('active');
    popup.classList.add('hidden');
  }
});