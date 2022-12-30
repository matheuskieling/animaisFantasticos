export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const diasHorario = funcionamento.dataset.horario.split(',').map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberto = diasSemana.includes(diaAgora);
  const horarioAberto = diasHorario[0] <= horarioAgora && horarioAgora < diasHorario[1];

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add('aberto');
  } else {
    funcionamento.classList.remove('aberto');
  }
}
