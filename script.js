let inputJogador = document.getElementById("jogador");
let inputPersonagem = document.getElementById("personagem");
let inputNivel = document.getElementById("nivel");
let inputXp = document.getElementById("xp");
let inputArquetipo = document.getElementById("arquetipo");
let inputNatureza = document.getElementById("natureza");
let inputComportamento = document.getElementById("comportamento");
let inputDescricao = document.getElementById("descrição");

//Atributos Primarios

let inputTotalAtributosPrimarios = document.getElementsByClassName("totalAtributosPrimarios")
let inputEquipAtributosPrimarios = document.getElementsByClassName("equipAtributosPrimarios")
let inputObtidoAtributosPrimarios = document.getElementsByClassName("obtidoAtributosPrimarios")
let inputTempAtributosPrimarios = document.getElementsByClassName("tempAtributosPrimarios")

//Atributos Secundarios
//vida mana e vigor
let inputTotalAtributosStatus = document.getElementsByClassName("totalAtributosStatus")
let inputAttAtributosStatus = document.getElementsByClassName("atributoStatus")
let inputObtidoAtributosStatus = document.getElementsByClassName("obtidoAtributosStatus")
let inputEquipAtributosStatus = document.getElementsByClassName("equipAtributosStatus")

//recuperação
let inputRecuperaçãoAtributosRecuperar = document.getElementsByClassName("recuperaçãoAtributosRecuperar")
let inputRegeneraçãoAtributosRecuperar = document.getElementsByClassName("regeneraçãoAtributosRecuperar")

//iniciativa
inputIniciativa = document.getElementById("iniciativa")

//proteção
let inputTotalAtributosProteção = document.getElementsByClassName("totalAtributosProteção")
let inputEquipAtributosProteção = document.getElementsByClassName("equipAtributosProteção")
let inputTempAtributosProteção = document.getElementsByClassName("tempAtributosProteção")

//deslocamento
let InputsCaminhadaDeslocamento = document.getElementsByClassName("caminhadaAtributosDeslocamento")
let InputsMarchaDeslocamento = document.getElementsByClassName("marchaAtributosDeslocamento")
let InputsCorridaDeslocamento = document.getElementsByClassName("corridaAtributosDeslocamento")

//carga
let InputLeveCarga = document.getElementById("leve")
let InputMediaCarga = document.getElementById("media")
let InputPesadaCarga = document.getElementById("pesada")
let InputEmpurrarCarga = document.getElementById("empurrar")
let InputErguerCarga = document.getElementById("erguer")

//botões
const btnDownload = document.getElementById("dJson");
const btnLoad = document.getElementById('loadJsonButton');
let addLinePeculiaridades = document.getElementById("peculiaridadesBtn")
let addLinePoderes = document.getElementById("poderesBtn")
let addLinePericias = document.getElementById("periciasBtn")
let addLineArmas = document.getElementById("armasBtn")
let addLineArmaduras = document.getElementById("armadurasBtn")
let addLineItems = document.getElementById("itemsBtn")

//seções
let secaoPeculiaridades = document.getElementById("peculiaridades")
let secaoPoderes = document.getElementById("poderes")
let secaoPericias = document.getElementById("pericias")
let secaoArmas = document.getElementById("armas")
let secaoArmaduras = document.getElementById("armaduras")
let secaoItems = document.getElementById("items")


//event listeners
for (let i = 0; i < inputTotalAtributosPrimarios.length; i++) {
  inputObtidoAtributosPrimarios[i].addEventListener('change', updateAllAutomaticInputs);
  inputEquipAtributosPrimarios[i].addEventListener('change', updateAllAutomaticInputs);
  inputTempAtributosPrimarios[i].addEventListener('change', updateAllAutomaticInputs);
}

for (let i = 0; i < inputTotalAtributosStatus.length; i++) {
  inputObtidoAtributosStatus[i].addEventListener('change', updateAllAutomaticInputs);
  inputAttAtributosStatus[i].addEventListener('change', updateAllAutomaticInputs);
  inputEquipAtributosStatus[i].addEventListener('change', updateAllAutomaticInputs);
}

for (let i = 0; i < inputTotalAtributosProteção.length; i++) {
  inputTotalAtributosProteção[i].addEventListener('change', updateAllAutomaticInputs);
  inputEquipAtributosProteção[i].addEventListener('change', updateAllAutomaticInputs);
  inputTempAtributosProteção[i].addEventListener('change', updateAllAutomaticInputs);
}

inputIniciativa.addEventListener('change', updateAllAutomaticInputs)

btnDownload.addEventListener("click", downloadAsJson);
btnLoad.addEventListener('click', loadFile);
addLinePeculiaridades.addEventListener('click', addLineToPeculiaridades)
addLinePoderes.addEventListener('click', addLineToPoderes)
addLinePericias.addEventListener('click', addLineToPericias)
addLineArmas.addEventListener('click', addLineToArmas)
addLineArmaduras.addEventListener('click', addLineToArmaduras)
addLineItems.addEventListener('click', addLineToItems)
//-----------------------------------------------------------------------------//
//Ficha do personagem
let personagem = {
  jogador: '',
  personagem: '',
  nivel: '',
  xp: '',
  arquetipo: '',
  natureza: '',
  comportamento: '',
  descricao: '',
  atributosPrimarios: {
    forca: {
      obtido: '', 
      equipamento: '',
      temporario: ''
    },
    destreza: {
      obtido: '', 
      equipamento: '',
      temporario: ''
    },
    constituicao: {
      obtido: '', 
      equipamento: '',
      temporario: ''
    },
    inteligencia: {
      obtido: '', 
      equipamento: '',
      temporario: ''
    },
    raciocinio: {
      obtido: '', 
      equipamento: '',
      temporario: ''
    },
    percepcao: {
      obtido: '', 
      equipamento: '',
      temporario: ''
    },
    determinacao: {
      obtido: '', 
      equipamento: '',
      temporario: ''
    },
    coragem: {
      obtido: '', 
      equipamento: '',
      temporario: ''
    },
    disciplina: {
      obtido: '', 
      equipamento: '',
      temporario: ''
    },
    carisma: {
      obtido: '', 
      equipamento: '',
      temporario: ''
    },
    manipulacao: {
      obtido: '', 
      equipamento: '',
      temporario: ''
    },
    aparencia: {
      obtido: '', 
      equipamento: '',
      temporario: ''
    }
  },
  atributosSecundarios: {
    status: {
      vida: {
        atributo: '',
        obtido: '',
        equipamento: ''
      },
      mana: {
        atributo: '',
        obtido: '',
        equipamento:''
      },
      vigor: {
        atributo: '',
        obtido: '',
        equipamento:''
      }
    },
    protecao: {
      fisica: {
        equipamento: '',
        temporario: ''
      },
      mental: {
        equipamento: '',
        temporario: ''
      },
      magica: {
        equipamento: '',
        temporario: ''
      }
    }
  },
  peculiaridades: [],
  poderes: [],
  pericias: [],
  armas:[],
  armaduras: [],
  items: []
};


//função para atualizar tudo
  function updateAllAutomaticInputs() {
    implementTotalFront()
    implementStatusValues()
    calculateRecuperacao()
    calculateIniciativa()
    implementProtectionValues()
    calcularDeslocamento()
    calcularCarga()
  }

function adicionarItemsAoJSON(data){
  
  //peculiaridades

  let peculiaridades = document.getElementsByClassName('nomePeculiaridades');
  peculiaridades = Array.from(peculiaridades)

  data.peculiaridades = []

  peculiaridades.forEach(input => {
      data.peculiaridades.push(input.value);
  });

  //

  //poderes

  let nomePoderes = document.getElementsByClassName('nomePoderes');
  let nivelPoderes = document.getElementsByClassName('nivelPoderes');
  let custoPoderes = document.getElementsByClassName('custoPoderes');

  data.poderes = []

  for(let i = 0 ; i < nomePoderes.length; i++){
      data.poderes.push({
        nome: nomePoderes[i].value,
        nivel: nivelPoderes[i].value,
        custo: custoPoderes[i].value
      }) 
  }

  //

  //pericias

  let nomePericias = document.getElementsByClassName('nomePericias');
  let numberPericias = document.getElementsByClassName('numberPericias');

  data.pericias = []

  for(let i = 0 ; i < nomePericias.length; i++){
      data.pericias.push({
        nome: nomePericias[i].value,
        nivel: numberPericias[i].value
      }) 
  }

  //

  //armas

  let nomeArmas = document.getElementsByClassName('nomeArmas');
  let acertoArmas = document.getElementsByClassName('acertoArmas');
  let danoArmas = document.getElementsByClassName('danoArmas');
  let pesoArmas = document.getElementsByClassName('pesoArmas');

  data.armas = []

  for(let i = 0 ; i < nomeArmas.length; i++){
      data.armas.push({
        nome: nomeArmas[i].value,
        acerto: acertoArmas[i].value,
        dano: danoArmas[i].value,
        peso: pesoArmas[i].value
      }) 
  }

  //

  //armaduras

  let nomeArmaduras = document.getElementsByClassName('nomeArmaduras');
  let ipArmaduras = document.getElementsByClassName('numberArmaduras');

  data.armaduras = []

  for(let i = 0 ; i < nomeArmaduras.length; i++){
      data.armaduras.push({
        nome: nomeArmaduras[i].value,
        ip: ipArmaduras[i].value
      }) 
  }

  //

  //items

  let nomeItems = document.getElementsByClassName('nomeItems');
  let quantidadeItems = document.getElementsByClassName('quantidadeItems');
  let pesoItems = document.getElementsByClassName('pesoItems');

  data.items = []

  for(let i = 0 ; i < nomeItems.length; i++){
      data.items.push({
        nome: nomeItems[i].value,
        quantidade: quantidadeItems[i].value,
        peso: pesoItems[i].value
      }) 
  }

  //
}


function downloadAsJson() {
  let dataName = inputPersonagem.value.replace(/ /g, "-").toLowerCase();
  

  let data = {
    jogador: inputJogador.value,
    personagem: inputPersonagem.value,
    nivel: inputNivel.value,
    xp: inputXp.value,
    arquetipo: inputArquetipo.value,
    natureza: inputNatureza.value,
    comportamento: inputComportamento.value,
    descricao: inputDescricao.value,
    atributosPrimarios: {
      forca: {
        obtido: inputObtidoAtributosPrimarios[0].value, 
        equipamento: inputEquipAtributosPrimarios[0].value,
        temporario: inputTempAtributosPrimarios[0].value
      },
      destreza: {
        obtido: inputObtidoAtributosPrimarios[1].value, 
        equipamento: inputEquipAtributosPrimarios[1].value,
        temporario: inputTempAtributosPrimarios[1].value
      },
      constituicao: {
        obtido: inputObtidoAtributosPrimarios[2].value, 
        equipamento: inputEquipAtributosPrimarios[2].value,
        temporario: inputTempAtributosPrimarios[2].value
      },
      inteligencia: {
        obtido: inputObtidoAtributosPrimarios[3].value, 
        equipamento: inputEquipAtributosPrimarios[3].value,
        temporario: inputTempAtributosPrimarios[3].value
      },
      raciocinio: {
        obtido: inputObtidoAtributosPrimarios[4].value, 
        equipamento: inputEquipAtributosPrimarios[4].value,
        temporario: inputTempAtributosPrimarios[4].value
      },
      percepcao: {
        obtido: inputObtidoAtributosPrimarios[5].value, 
        equipamento: inputEquipAtributosPrimarios[5].value,
        temporario: inputTempAtributosPrimarios[5].value
      },
      determinacao: {
        obtido: inputObtidoAtributosPrimarios[6].value, 
        equipamento: inputEquipAtributosPrimarios[6].value,
        temporario: inputTempAtributosPrimarios[6].value
      },
      coragem: {
        obtido: inputObtidoAtributosPrimarios[7].value, 
        equipamento: inputEquipAtributosPrimarios[7].value,
        temporario: inputTempAtributosPrimarios[7].value
      },
      disciplina: {
        obtido: inputObtidoAtributosPrimarios[8].value, 
        equipamento: inputEquipAtributosPrimarios[8].value,
        temporario: inputTempAtributosPrimarios[8].value
      },
      carisma: {
        obtido: inputObtidoAtributosPrimarios[9].value, 
        equipamento: inputEquipAtributosPrimarios[9].value,
        temporario: inputTempAtributosPrimarios[9].value
      },
      manipulacao: {
        obtido: inputObtidoAtributosPrimarios[10].value, 
        equipamento: inputEquipAtributosPrimarios[10].value,
        temporario: inputTempAtributosPrimarios[10].value
      },
      aparencia: {
        obtido: inputObtidoAtributosPrimarios[11].value, 
        equipamento: inputEquipAtributosPrimarios[11].value,
        temporario: inputTempAtributosPrimarios[11].value
      }
    },
    atributosSecundarios: {
      status: {
        vida: {
          obtido: inputObtidoAtributosStatus[0].value,
          equipamento: inputEquipAtributosStatus[0].value
        },
        mana: {
          obtido: inputObtidoAtributosStatus[1].value,
          equipamento: inputEquipAtributosStatus[1].value
        },
        vigor: {
          obtido: inputObtidoAtributosStatus[2].value,
          equipamento: inputEquipAtributosStatus[2].value
        }
      },
      protecao: {
        fisica: {
          equipamento: inputEquipAtributosProteção[0].value,
          temporario: inputTempAtributosProteção[0].value
        },
        mental: {
          equipamento: inputEquipAtributosProteção[1].value,
          temporario: inputTempAtributosProteção[1].value
        },
        magica: {
          equipamento: inputEquipAtributosProteção[2].value,
          temporario: inputTempAtributosProteção[2].value
        }
      }
    },
    peculiaridades: [],
    poderes: [],
    pericias: [],
    armas:[],
    armaduras: [],
    items: []
  };

  adicionarItemsAoJSON(data)

  const jsonData = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonData], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `enuria-${dataName}-character.json`;
  link.click();
}

function calculateTotal(inputsCampoObtido, inputsCampoEquipado, inputsCampoTemporario) {
  const total = [];

  for (let i = 0; i < inputsCampoObtido.length; i++) {
    let atributoObtido = inputsCampoObtido[i].value == '' ? 0 : Number(inputsCampoObtido[i].value);

    let atributoEquipamento = inputsCampoEquipado[i].value == '' ? 0 : Number(inputsCampoEquipado[i].value);

    let atributoTemporario = inputsCampoTemporario[i].value == '' ? 0 : Number(inputsCampoTemporario[i].value);
    
    const soma = atributoObtido + atributoEquipamento + atributoTemporario;
    total.push(soma);
  }
  
  
  return total;
}

function implementTotalFront() {
  let total = calculateTotal(inputObtidoAtributosPrimarios, inputEquipAtributosPrimarios, inputTempAtributosPrimarios);
  for (let i = 0; i < inputTotalAtributosPrimarios.length; i++) {
    inputTotalAtributosPrimarios[i].value = total[i];
  }
}

//Atributos secundários vida, mana e vigor
  function calculateTotalStatus(inputsCampoObtido, inputsCampoEquipado, atributeList) {
    const total = [];

    for (let i = 0; i < inputsCampoObtido.length; i++) {
      let obtido = inputsCampoObtido[i].value == '' ? 0 : Number(inputsCampoObtido[i].value);
  
      let equipamento = inputsCampoEquipado[i].value == '' ? 0 : Number(inputsCampoEquipado[i].value);

      let atributo = atributeList[i];

      const sum = obtido + equipamento + atributo
      total.push(sum);
    }
    
    return total;
  }

  function calculateAtribute() {
    let atributes = []
    let constituicao = Number(inputTotalAtributosPrimarios[2].value)
    let determinacao = Number(inputTotalAtributosPrimarios[6].value)
    let inteligencia = Number(inputTotalAtributosPrimarios[3].value)
    atributes.push(Number( constituicao + determinacao + 5))
    atributes.push(Number( inteligencia + determinacao))
    atributes.push(Number( constituicao + determinacao + 5))

    for(let i = 0; i < inputAttAtributosStatus.length; i++){
      inputAttAtributosStatus[i].value = atributes[i];
    }

    return atributes
  }

  function implementStatusValues() {
    let atribute = calculateAtribute()

    let total = calculateTotalStatus(inputObtidoAtributosStatus, inputEquipAtributosStatus,atribute);
    
    for (let i = 0; i < inputTotalAtributosStatus.length; i++) {
      inputTotalAtributosStatus[i].value = total[i];
    }
  }

//Atributos secundários proteção

  function calculateProtection() {
    const total = []

    for(let i = 0; i < inputRecuperaçãoAtributosRecuperar.length; i++) {
      let sum = 0
      sum = Number(inputEquipAtributosProteção[i].value) + Number(inputTempAtributosProteção[i].value)
      total.push(sum)
    }
    
    return total
  }

  function implementProtectionValues() {
    let total = calculateProtection()

    for(let i = 0; i < inputTotalAtributosProteção.length; i++) {
      inputTotalAtributosProteção[i].value = total[i] 
    }
  }

//Atributos secundários recuperação e iniciativa
  function calculateRecuperacao() {
    let recuperação = []
    let constituicao = Number(inputTotalAtributosPrimarios[2].value)
    let disciplina = Number(inputTotalAtributosPrimarios[8].value)
    let inteligencia = Number(inputTotalAtributosPrimarios[3].value)

    if(constituicao === 0 || disciplina === 0 || inteligencia === 0) {
      recuperação.push(0, 0, 0)
    }else {
      recuperação.push(Math.ceil((constituicao + disciplina)/2))
      recuperação.push(Math.ceil((inteligencia + disciplina)/2))
      recuperação.push(Math.ceil((inteligencia + disciplina)/2))
    }

    for(let i = 0; i < inputRecuperaçãoAtributosRecuperar.length; i++){
      inputRecuperaçãoAtributosRecuperar[i].value = recuperação[i];
    }

  }

  function calculateIniciativa() {
    let iniciativa = []
    let destreza = Number(inputTotalAtributosPrimarios[1].value)
    let percepcao = Number(inputTotalAtributosPrimarios[5].value)

    if(destreza === 0 || percepcao === 0) {
      iniciativa.push(0)
    }else {
      iniciativa.push(Math.ceil((destreza + percepcao)/2))
    }

    inputIniciativa.value = iniciativa[0]
  }

//

//Atributos secundários deslocamento

  function calcularDeslocamento() {
    destreza = inputTotalAtributosPrimarios[1].value
    InputsCaminhadaDeslocamento[1].value = destreza
    InputsCaminhadaDeslocamento[0].value = Math.ceil(destreza * 3.6)

    InputsMarchaDeslocamento[1].value = destreza * 5

    InputsCorridaDeslocamento[1].value = destreza * 10
  }

//

//Atributos secundários carga

  function calcularCarga() {
    let força = inputTotalAtributosPrimarios[0].value
    InputLeveCarga.value = `${força * 50}kg`
    InputMediaCarga.value = `${força * 75}kg`
    InputPesadaCarga.value = `${força * 100}kg`
    InputErguerCarga.value = `${(InputMediaCarga.value)}`
    InputEmpurrarCarga.value = `${(InputPesadaCarga.value)}`
  }

//

// Criadores de linhas
  function addLineToPeculiaridades() {
    const divFileiraInputs = document.createElement('div');
    divFileiraInputs.classList.add('fileira-inputs');
  
    for (let i = 0; i < 4; i++) {
      const input = document.createElement('input');
      input.type = 'text';
      input.classList.add('nomePeculiaridades')
      divFileiraInputs.appendChild(input);
    }
    secaoPeculiaridades.appendChild(divFileiraInputs)
  }

  function addLineToPoderes() {
    const divFileiraInputs = document.createElement('div');
    divFileiraInputs.classList.add('fileira-inputs');
  
      const input1 = document.createElement('input');
      const input2 = document.createElement('input');
      const input3 = document.createElement('input');
      input1.type = 'text';
      input1.classList.add('nomePoderes')

      input2.type = 'number';
      input2.classList.add('nivelPoderes')

      input3.type = 'number';
      input3.classList.add('custoPoderes')

      divFileiraInputs.appendChild(input1);
      divFileiraInputs.appendChild(input2);
      divFileiraInputs.appendChild(input3);
    
    secaoPoderes.appendChild(divFileiraInputs)
  }

  function addLineToPericias() {
    const divFileiraInputs = document.createElement('div');
    divFileiraInputs.classList.add('fileira-inputs');
  
    for (let i = 0; i < 2; i++) {
      const input1 = document.createElement('input');
      input1.type = 'text';
      input1.classList.add('nomePericias')

      const input2 = document.createElement('input');
      input2.type = 'number';
      input2.classList.add('numberPericias')

      divFileiraInputs.appendChild(input1);
      divFileiraInputs.appendChild(input2);
    }

    secaoPericias.appendChild(divFileiraInputs)
  }

  function addLineToArmas() {
    const divFileiraInputs = document.createElement('div');
    divFileiraInputs.classList.add('fileira-inputs');
  
      const input1 = document.createElement('input');
      input1.type = 'text';
      input1.classList.add('nomeArmas')

      const input2 = document.createElement('input');
      input2.type = 'number';
      input2.classList.add('acertoArmas')

      const input3 = document.createElement('input');
      input3.type = 'text';
      input3.classList.add('danoArmas')

      const input4 = document.createElement('input');
      input4.type = 'text';
      input4.classList.add('pesoArmas')

      divFileiraInputs.appendChild(input1);
      divFileiraInputs.appendChild(input2);
      divFileiraInputs.appendChild(input3);
      divFileiraInputs.appendChild(input4);

    secaoArmas.appendChild(divFileiraInputs)
  }

  function addLineToArmaduras() {
    const divFileiraInputs = document.createElement('div');
    divFileiraInputs.classList.add('fileira-inputs');
  
    for (let i = 0; i < 2; i++) {
      const input1 = document.createElement('input');
      input1.type = 'text';
      input1.classList.add('nomeArmaduras')

      const input2 = document.createElement('input');
      input2.type = 'number';
      input2.classList.add('numberArmaduras')

      divFileiraInputs.appendChild(input1);
      divFileiraInputs.appendChild(input2);
    }

    secaoArmaduras.appendChild(divFileiraInputs)
  }

  function addLineToItems() {
    const divFileiraInputs = document.createElement('div');
    divFileiraInputs.classList.add('fileira-inputs');
  
      const input1 = document.createElement('input');
      input1.type = 'text';
      input1.classList.add('nomeItems')

      const input2 = document.createElement('input');
      input2.type = 'number';
      input2.classList.add('quantidadeItems')

      const input3 = document.createElement('input');
      input3.type = 'text';
      input3.classList.add('pesoItems')

      divFileiraInputs.appendChild(input1);
      divFileiraInputs.appendChild(input2);
      divFileiraInputs.appendChild(input3);

    secaoItems.appendChild(divFileiraInputs)
  }
//

//Loads

function loadFile() {
  var fileInput = document.createElement('input');
  fileInput.type = "file";
  fileInput.accept = ".json";

  fileInput.addEventListener('change', function(e) {
    var file = e.target.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
      var json = JSON.parse(e.target.result);
      loadCharacterSocial(json);
      loadCharacterPrimaryAtributes(json)
      loadCharacterSecundaryAtributes(json)
      updateAllAutomaticInputs()
      loadAllAddLineItems(json)
    };
    reader.readAsText(file);
  });

  fileInput.click();
}

function loadCharacterSocial(characterData) {
    inputJogador.value = characterData.jogador;
    inputPersonagem.value = characterData.personagem;
    inputNivel.value = characterData.nivel;
    inputXp.value = characterData.xp;
    inputArquetipo.value = characterData.arquetipo;
    inputNatureza.value = characterData.natureza;
    inputComportamento.value = characterData.comportamento;
    inputDescricao.value =characterData.descricao;
}

function loadCharacterPrimaryAtributes(characterData) {
  var atributosPrimarios = characterData["atributosPrimarios"];
  

  inputObtidoAtributosPrimarios[0].value = atributosPrimarios.forca.obtido
  inputEquipAtributosPrimarios[0].value = atributosPrimarios.forca.equipamento
  inputTempAtributosPrimarios[0].value = atributosPrimarios.forca.temporario

  inputObtidoAtributosPrimarios[1].value = atributosPrimarios.destreza.obtido
  inputEquipAtributosPrimarios[1].value = atributosPrimarios.destreza.equipamento
  inputTempAtributosPrimarios[1].value = atributosPrimarios.destreza.temporario

  inputObtidoAtributosPrimarios[2].value = atributosPrimarios.constituicao.obtido
  inputEquipAtributosPrimarios[2].value = atributosPrimarios.constituicao.equipamento
  inputTempAtributosPrimarios[2].value = atributosPrimarios.constituicao.temporario

  inputObtidoAtributosPrimarios[3].value = atributosPrimarios.inteligencia.obtido
  inputEquipAtributosPrimarios[3].value = atributosPrimarios.inteligencia.equipamento
  inputTempAtributosPrimarios[3].value = atributosPrimarios.inteligencia.temporario

  inputObtidoAtributosPrimarios[4].value = atributosPrimarios.raciocinio.obtido
  inputEquipAtributosPrimarios[4].value = atributosPrimarios.raciocinio.equipamento
  inputTempAtributosPrimarios[4].value = atributosPrimarios.raciocinio.temporario

  inputObtidoAtributosPrimarios[5].value = atributosPrimarios.percepcao.obtido
  inputEquipAtributosPrimarios[5].value = atributosPrimarios.percepcao.equipamento
  inputTempAtributosPrimarios[5].value = atributosPrimarios.percepcao.temporario

  inputObtidoAtributosPrimarios[6].value = atributosPrimarios.determinacao.obtido
  inputEquipAtributosPrimarios[6].value = atributosPrimarios.determinacao.equipamento
  inputTempAtributosPrimarios[6].value = atributosPrimarios.determinacao.temporario

  inputObtidoAtributosPrimarios[7].value = atributosPrimarios.coragem.obtido
  inputEquipAtributosPrimarios[7].value = atributosPrimarios.coragem.equipamento
  inputTempAtributosPrimarios[7].value = atributosPrimarios.coragem.temporario

  inputObtidoAtributosPrimarios[8].value = atributosPrimarios.disciplina.obtido
  inputEquipAtributosPrimarios[8].value = atributosPrimarios.disciplina.equipamento
  inputTempAtributosPrimarios[8].value = atributosPrimarios.disciplina.temporario

  inputObtidoAtributosPrimarios[9].value = atributosPrimarios.carisma.obtido
  inputEquipAtributosPrimarios[9].value = atributosPrimarios.carisma.equipamento
  inputTempAtributosPrimarios[9].value = atributosPrimarios.carisma.temporario

  inputObtidoAtributosPrimarios[10].value = atributosPrimarios.manipulacao.obtido
  inputEquipAtributosPrimarios[10].value = atributosPrimarios.manipulacao.equipamento
  inputTempAtributosPrimarios[10].value = atributosPrimarios.manipulacao.temporario

  inputObtidoAtributosPrimarios[11].value = atributosPrimarios.aparencia.obtido
  inputEquipAtributosPrimarios[11].value = atributosPrimarios.aparencia.equipamento
  inputTempAtributosPrimarios[11].value = atributosPrimarios.aparencia.temporario
}

function loadCharacterSecundaryAtributes(characterData) {
  var atributosSecundarios = characterData["atributosSecundarios"];
  var status = atributosSecundarios["status"]
  var protecao = atributosSecundarios["protecao"]

  //Status

  inputObtidoAtributosStatus[0].value = status.vida.obtido
  inputEquipAtributosStatus[0].value = status.vida.equipamento

  inputObtidoAtributosStatus[1].value = status.mana.obtido
  inputEquipAtributosStatus[1].value = status.mana.equipamento

  inputObtidoAtributosStatus[2].value = status.vigor.obtido
  inputEquipAtributosStatus[2].value = status.vigor.equipamento

  //Proteção

  inputEquipAtributosProteção[0].value = protecao.fisica.equipamento
  inputTempAtributosProteção[0].value = protecao.fisica.temporario

  inputEquipAtributosProteção[1].value = protecao.mental.equipamento
  inputTempAtributosProteção[1].value = protecao.mental.temporario

  inputEquipAtributosProteção[2].value = protecao.magica.equipamento
  inputTempAtributosProteção[2].value = protecao.magica.temporario
  
}


function loadAllAddLineItems(characterData) {
  loadPeculiaridades(characterData)
  loadPoderes(characterData)
  loadPericias(characterData)
  loadArmas(characterData)
  loadArmaduras(characterData)
  loadItems(characterData)
}

function loadPeculiaridades(characterData) {
  const peculiaridades = characterData.peculiaridades;
  let inputsOfPeculiaridades = document.getElementsByClassName("nomePeculiaridades")
  let counter = 0

  for (let i = 0; i < peculiaridades.length; i++) {
    if ((i + 1) % 4 === 0) {
      addLineToPeculiaridades()
    }
  }

  for(let inputs of peculiaridades) {
    inputsOfPeculiaridades[counter].value = inputs
    counter++
  }
}

function loadPoderes(characterData) {
  const poderes = characterData.poderes;
  let nameInputsOfPoderes = document.getElementsByClassName("nomePoderes")
  let levelInputsOfPoderes = document.getElementsByClassName("nivelPoderes")
  let costInputsOfPoderes = document.getElementsByClassName("custoPoderes")

  for (let i = 0; i < poderes.length; i++) {
    addLineToPoderes()
  }

  poderes.forEach((poder, index) => {
    nameInputsOfPoderes[index].value = poder.nome;
    levelInputsOfPoderes[index].value = poder.nivel;
    costInputsOfPoderes[index].value = poder.custo;
  });
}

function loadPericias(characterData) {
  const pericias = characterData.pericias;
  let nameInputsOfPericias = document.getElementsByClassName("nomePericias")
  let levelInputsOfPericias = document.getElementsByClassName("numberPericias")

  for (let i = 0; i < pericias.length; i++) {
    if ((i + 1) % 2 === 0) {
      addLineToPericias()
    }
  }

  pericias.forEach((pericia, index) => {
    nameInputsOfPericias[index].value = pericia.nome;
    levelInputsOfPericias[index].value = pericia.nivel;
  });
}

function loadArmas(characterData) {
  const armas = characterData.armas;
  let nameInputsOfArmas = document.getElementsByClassName("nomeArmas")
  let accuracyInputsOfArmas = document.getElementsByClassName("acertoArmas")
  let damageInputsOfArmas = document.getElementsByClassName("danoArmas")
  let weightInputsOfArmas = document.getElementsByClassName("pesoArmas")

  for (let i = 0; i < armas.length; i++) {
    addLineToArmas()
  }

  armas.forEach((arma, index) => {
    nameInputsOfArmas[index].value = arma.nome;
    accuracyInputsOfArmas[index].value = arma.acerto;
    damageInputsOfArmas[index].value = arma.dano;
    weightInputsOfArmas[index].value = arma.peso;
  });
}

function loadArmaduras(characterData) {
  const armaduras = characterData.armaduras;
  let nameInputsOfArmaduras = document.getElementsByClassName("nomeArmaduras")
  let ipInputsOfArmaduras = document.getElementsByClassName("numberArmaduras")

  for (let i = 0; i < armaduras.length; i++) {
    if ((i + 1) % 2 === 0) {
      addLineToArmaduras()
    }
  }

  armaduras.forEach((armadura, index) => {
    nameInputsOfArmaduras[index].value = armadura.nome;
    ipInputsOfArmaduras[index].value = armadura.ip;
  });
}

function loadItems(characterData) {
  const items = characterData.items;
  let nameInputsOfItems = document.getElementsByClassName("nomeItems")
  let quantityInputsOfItems = document.getElementsByClassName("quantidadeItems")
  let weightInputsOfItems = document.getElementsByClassName("pesoItems")

  for (let i = 0; i < items.length; i++) {
    addLineToItems()
  }

  items.forEach((item, index) => {
    nameInputsOfItems[index].value = item.nome;
    quantityInputsOfItems[index].value = item.quantidade;
    weightInputsOfItems[index].value = item.peso;
  });
}

//SCROLL
window.addEventListener('scroll', function() {
  if (window.pageYOffset > 200) {
    document.getElementById('subirBtn').style.display = 'block';
  } else {
    document.getElementById('subirBtn').style.display = 'none';
  }
});

document.getElementById('subirBtn').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
  });
});
//FIM


//Assert Functions

// function verifySum(num1, num2){
//   console.assert(typeof (num1 + num2) === Number, "Not a number")
// }