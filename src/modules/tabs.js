function tabs() {
  const tabButtons = document.querySelectorAll('.tablink');

  for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].addEventListener('click', function () {
      var TabName = this.dataset.tab;
      var TabContent = document.getElementById(TabName);

      var allTabcontent = document.querySelectorAll('.tabcontent');
      var allTabButtons = document.querySelectorAll('.tablink');

      for (let j = 0; j < allTabcontent.length; j++) {
        allTabcontent[j].style.display = 'none';
      }

      for (let k = 0; k < allTabcontent.length; k++) {
        allTabButtons[k].classList.remove('active');
      }

      TabContent.style.display = 'block';
      this.classList.add('active');
    });
  }
  document.querySelector('.tablink').click();
}

export default tabs;
