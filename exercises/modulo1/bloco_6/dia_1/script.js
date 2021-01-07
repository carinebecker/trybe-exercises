let statesOfBrazil = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']

let statesInitials = [  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MS', 'MT', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']

function createStatesList() {
  let stateSelect = document.querySelector('#state');

  for(let state in statesOfBrazil) {
    let stateCreated = document.createElement('option')
    stateCreated.innerHTML = statesOfBrazil[state];
    stateSelect.appendChild(stateCreated);
  }

  let states = document.querySelectorAll('#state option');
  for(let index = 0; index <= statesInitials.length; index += 1) {
    states[index].value = statesInitials[index];
  }
}

createStatesList();
