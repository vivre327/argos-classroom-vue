document.addEventListener('DOMContentLoaded', () => {
  // SNB
  const snb = document.querySelector('.snb');
  const toggleButton = document.getElementById('toggle-snb');

  toggleButton.addEventListener('click', () => {
    snb.classList.toggle('closed');
    toggleButton.classList.toggle('closed');
  });

  // Card Item Active
  const items = document.querySelectorAll(".card-item");

  items.forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });

  // Refresh Animation
  const button = document.querySelector('.refreshButton');

  button.addEventListener('click', () => {
    button.classList.add('animate');
    
    // 애니메이션이 끝난 후 클래스 제거
    setTimeout(() => button.classList.remove('animate'), 700); // @keyframes spin의 duration과 일치
  });
});

