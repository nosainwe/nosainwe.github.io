const search = document.querySelector('#cert-search');
const category = document.querySelector('#cert-category');
const cards = [...document.querySelectorAll('.cert-card')];
function filterCertificates() {
  const query = search.value.trim().toLocaleLowerCase();
  let count = 0;
  for (const card of cards) {
    const matches = (!category.value || card.dataset.category === category.value) && card.textContent.toLocaleLowerCase().includes(query);
    card.hidden = !matches;
    if (matches) count++;
  }
  document.querySelector('#cert-count').textContent = count + (count === 1 ? ' certificate' : ' certificates');
  document.querySelector('#no-results').hidden = count !== 0;
}
search.addEventListener('input', filterCertificates);
category.addEventListener('change', filterCertificates);
