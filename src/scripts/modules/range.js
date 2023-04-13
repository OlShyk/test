export default function range() {
  const res = document.getElementById('output');
  const range = document.getElementById('range');

  res.textContent = range.value + ' %';

  range.addEventListener('change', function (e) {
    res.textContent = e.target.value + ' %';
  });
}
