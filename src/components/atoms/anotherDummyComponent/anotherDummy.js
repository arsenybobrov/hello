const anotherDummy = () => {
  const btn = document.getElementById('dummyBtn');
  if (btn) {
    btn.addEventListener('click', () => {
      alert('good job :)');
    });
  }
};

export default anotherDummy;
