function calcSavings() {
  const deposit = parseFloat(document.getElementById('deposit').value || 0);
  const months = parseInt(document.getElementById('months').value || 0);
  const apy = 0.0415;
  const monthlyRate = Math.pow(1 + apy, 1/12) - 1;
  const interest = deposit * (Math.pow(1 + monthlyRate, months) - 1);
  const el = document.getElementById('calcResult');
  el.textContent = `Estimated interest: $${interest.toFixed(2)}`;
}
function demoLogin() {
  const el = document.getElementById('loginNotice');
  if (!el) return;
  el.classList.remove('alert-warning');
  el.classList.add('alert-success');
  el.textContent = 'Demo: you are signed in (not really).';
}
