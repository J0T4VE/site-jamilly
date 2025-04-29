const perguntas = [
    {
      pergunta: "Onde nos conhecemos?",
      opcoes: ["Colégio", "Instagram", "Festa", "Academia"],
      correta: "Colégio"
    },
    {
      pergunta: "Como se chama nosso doguinho?",
      opcoes: ["Marley", "Maylon", "Maru", "Maruco"],
      correta: "Maylon"
    },
    {
      pergunta: "Qual é a nossa série?",
      opcoes: ["Agente oculto", "Agente noturno", "Tapas e Beijos", "La Casa De Papel"],
      correta: "Agente noturno"
    },
    {
      pergunta: "Qual apelido carinhoso o Jota mais usa?",
      opcoes: ["Vida", "Amor", "Princesa", "Momozinho", "Jamilla"],
      correta: "Princesa"
    },
    {
      pergunta: "Qual é o nosso sonho juntos?",
      opcoes: ["Casar e viajar", "Ficar rico", "Morar fora", "Ter uns cabecudinhos", "Tudo isso junto"],
      correta: "Tudo isso junto"
    },
    {
      pergunta: "Que dia começamos a namorar?",
      opcoes: ["28/04/2023", "29/04/2023", "30/04/2023", "01/05/2023"],
      correta: "29/04/2023"
    },
    {
      pergunta: "Qual lugar que mais gostamos de ir juntos?",
      opcoes: ["Praia", "Restaurante", "Cinema", "BT"],
      correta: "BT"
    }
  ];
  
  let perguntaAtual = 0;
  
  const perguntaEl = document.getElementById('pergunta');
  const opcoesEl = document.getElementById('opcoes');
  const progressoEl = document.getElementById('progresso');
  const finalEl = document.getElementById('final');
  const quizEl = document.getElementById('quiz');
  
  function mostrarPergunta() {
    const pergunta = perguntas[perguntaAtual];
    perguntaEl.innerText = pergunta.pergunta;
    opcoesEl.innerHTML = '';
  
    pergunta.opcoes.forEach(opcao => {
      const button = document.createElement('button');
      button.innerText = opcao;
      button.classList.add('botao-opcao');
      button.addEventListener('click', () => selecionarOpcao(opcao));
      opcoesEl.appendChild(button);
    });
  
    progressoEl.innerText = `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;
  }
  
  function selecionarOpcao(opcaoSelecionada) {
    const pergunta = perguntas[perguntaAtual];
  
    // Só avança para a próxima pergunta (não precisa validar resposta)
    perguntaAtual++;
  
    if (perguntaAtual < perguntas.length) {
      mostrarPergunta();
    } else {
      finalizarQuiz();
    }
  }
  
  function finalizarQuiz() {
    quizEl.classList.add('hidden');
    finalEl.classList.remove('hidden');
  }
  
  // Iniciar o Quiz
  mostrarPergunta();
  