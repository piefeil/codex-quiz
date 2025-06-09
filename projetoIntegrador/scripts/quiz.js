const quizzes = {
    odontologia: [
      {
        text: "O que é a cárie dentária?",
        options: [
          "Uma inflamação na gengiva",
          "Uma doença infecciosa que afeta os ossos da face",
          "Uma doença causada por bactérias que destrói os tecidos dos dentes",
          "Uma dor causada apenas por alimentos gelados"
        ],
        answer: 2
      },
      {
        text: "Qual das opções abaixo NÃO é um sintoma comum da cárie?",
        options: [
          "Dor ou sensibilidade nos dentes",
          "Mau hálito",
          "Manchas nos dentes",
          "Febre alta"
        ],
        answer: 3
      },
      {
        text: "O que causa a cárie?",
        options: [
          "O contato com bactérias no ar",
          "O uso frequente de enxaguante bucal",
          "A ação de bactérias que fermentam açúcares e produzem ácidos",
          "Escovar os dentes com muita força"
        ],
        answer: 2
      },
      {
        text: "Qual das atitudes abaixo ajuda a prevenir a cárie?",
        options: [
          "Escovar os dentes apenas à noite",
          "Evitar a escovação após as refeições",
          "Reduzir o consumo de açúcar e usar fio dental",
          "Comer doces todos os dias sem preocupação"
        ],
        answer: 2
      },
      {
        text: "Com que frequência é recomendado visitar o dentista para prevenção da cárie?",
        options: [
          "Apenas quando estiver com dor",
          "Uma vez por mês",
          "Uma vez por ano",
          "A cada 6 meses ou conforme orientação profissional"
        ],
        answer: 3
      },
      {
        text: "Qual parte do dente é a primeira a ser afetada pela cárie?",
        options: [
          "Raiz",
          "Polpa",
          "Esmalte",
          "Gengiva"
        ],
        answer: 2
      },
      {
        text: "A cárie pode evoluir e atingir qual estrutura mais interna do dente, causando dor intensa?",
        options: [
          "Gengiva",
          "Polpa dentária",
          "Língua",
          "Ossos da mandíbula"
        ],
        answer: 1
      },
      {
        text: "Qual das opções abaixo é um mito sobre a cárie?",
        options: [
          "Escovar os dentes com força limpa melhor",
          "Dormir sem escovar os dentes favorece a cárie",
          "Crianças e adultos podem ter cárie",
          "A alimentação influencia no surgimento da cárie"
        ],
        answer: 0
      },
      {
        text: "Por que o açúcar é um grande vilão da saúde bucal?",
        options: [
          "Ele enfraquece a língua",
          "Alimenta as bactérias que produzem ácidos que atacam os dentes",
          "Deixa os dentes mais duros",
          "Não tem efeito nenhum sobre os dentes"
        ],
        answer: 1
      },
      {
        text: "O uso do fio dental é importante porque:",
        options: [
          "Tira o gosto ruim da boca",
          "Ajuda a clarear os dentes",
          "Remove restos de comida entre os dentes e previne cáries",
          "Pode substituir a escovação"
        ],
        answer: 2
      }
    ],
    pedagogia: [
      {
        text: "Quem é considerado o patrono da educação brasileira?",
        options: [
          "Paulo Freire",
          "Anísio Teixeira",
          "Jean Piaget",
          "Maria Montessori"
        ],
        answer: 0
      },
      {
        text: "O que é o construtivismo?",
        options: [
          "Teoria que defende a memorização",
          "Teoria que defende a construção do conhecimento pelo aluno",
          "Método tradicional de ensino",
          "Ensino baseado em repetição"
        ],
        answer: 1
      },
      {
        text: "Qual é a principal função da avaliação diagnóstica?",
        options: [
          "Classificar os alunos",
          "Identificar dificuldades e potencialidades",
          "Atribuir notas",
          "Premiar os melhores alunos"
        ],
        answer: 1
      }
    ],
    psicologia: [
      {
        text: "Quem é o pai da psicanálise?",
        options: [
          "Carl Jung",
          "Sigmund Freud",
          "Jean Piaget",
          "B. F. Skinner"
        ],
        answer: 1
      },
      {
        text: "O que é behaviorismo?",
        options: [
          "Estudo do inconsciente",
          "Teoria do desenvolvimento moral",
          "Teoria focada no comportamento observável",
          "Teoria da personalidade"
        ],
        answer: 2
      },
      {
        text: "O que é resiliência em psicologia?",
        options: [
          "Capacidade de esquecer traumas",
          "Capacidade de se adaptar e superar adversidades",
          "Falta de emoções",
          "Memória seletiva"
        ],
        answer: 1
      }
    ],
    computacao: [
      {
        text: "O que significa a sigla CPU?",
        options: [
          "Central de Processamento Único",
          "Central de Processamento Universal",
          "Unidade Central de Processamento",
          "Unidade de Controle de Processos"
        ],
        answer: 2
      },
      {
        text: "Qual linguagem é conhecida por ser a base da web?",
        options: [
          "Python",
          "JavaScript",
          "C++",
          "Java"
        ],
        answer: 1
      },
      {
        text: "O que é um algoritmo?",
        options: [
          "Um tipo de hardware",
          "Uma sequência de passos para resolver um problema",
          "Um erro de programação",
          "Um sistema operacional"
        ],
        answer: 1
      }
    ]
  };

  // ----- Variáveis de controle -----
  let questions = [];
  let current = 0;
  let selected = null;
  let answered = false;
  let userAnswers = [];
  let quizTitle = '';

  function startQuiz(tipo) {
    questions = quizzes[tipo];
    quizTitle =
      tipo === 'odontologia' ? 'Quiz de Odontologia' :
      tipo === 'pedagogia' ? 'Quiz de Pedagogia' :
      tipo === 'psicologia' ? 'Quiz de Psicologia' :
      tipo === 'computacao' ? 'Quiz de Ciência da Computação' : 'Quiz';
    current = 0;
    selected = null;
    answered = false;
    userAnswers = [];
    document.getElementById('quizTitle').textContent = quizTitle;
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('quizContainer').style.display = '';
    renderQuestion();
  }

  function renderQuestion() {
    document.getElementById('questionNumber').textContent =
      `Pergunta ${current + 1} de ${questions.length}`;
    document.getElementById('questionText').textContent =
      questions[current].text;

    const optionsList = document.getElementById('optionsList');
    optionsList.innerHTML = '';
    document.getElementById('feedback').textContent = '';

    questions[current].options.forEach((option, idx) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn' + (selected === idx ? ' selected' : '');
      btn.textContent = option;
      btn.disabled = answered;

      if (answered && selected === idx) {
        if (selected === questions[current].answer) {
          btn.classList.add('correct');
        } else {
          btn.classList.add('incorrect');
        }
      }
      btn.onclick = () => {
        selected = idx;
        document.getElementById('checkBtn').disabled = false;
        renderQuestion();
      };
      optionsList.appendChild(btn);
    });

    document.getElementById('checkBtn').disabled = selected === null || answered;
    document.getElementById('nextBtn').disabled = !answered;
    document.getElementById('backBtn').disabled = current === 0;
  }

  function showFeedback() {
    const feedback = document.getElementById('feedback');
    if (selected === questions[current].answer) {
      feedback.textContent = "Você acertou!";
      feedback.style.color = "#4caf50";
    } else {
      feedback.textContent = "Você errou!";
      feedback.style.color = "#f44336";
    }
  }

  document.getElementById('checkBtn').onclick = () => {
    if (selected !== null && !answered) {
      answered = true;
      userAnswers[current] = selected;
      showFeedback();
      renderQuestion();
    }
  };

  document.getElementById('nextBtn').onclick = () => {
    selected = null;
    answered = false;
    document.getElementById('feedback').textContent = '';
    current++;
    if (current < questions.length) {
      renderQuestion();
    } else {
      showReport();
    }
  };

  document.getElementById('backBtn').onclick = () => {
    if (current > 0) {
      current--;
      selected = userAnswers[current] !== undefined ? userAnswers[current] : null;
      answered = userAnswers[current] !== undefined;
      document.getElementById('feedback').textContent = '';
      renderQuestion();
    }
  };

  function showReport() {
    let correct = questions.filter((q, i) => userAnswers[i] === q.answer).length;
    let incorrect = questions.length - correct;
    let html = `<h2 class="quiz-title">Quiz finalizado</h2>`;
    html += `<div style="text-align:center;font-size:1.1em;margin-bottom:18px;">
      Acertos: <span style="color:#4caf50;font-weight:bold;">${correct}</span> / ${questions.length}
    </div>`;
    html += `<ul style="list-style:none;padding:0;margin:0;">`;
    questions.forEach((q, idx) => {
      const user = userAnswers[idx];
      const isCorrect = user === q.answer;
      html += `<li style="margin-bottom:8px;">
        <span style="font-weight:bold;">${idx + 1}.</span>
        <span style="color:${isCorrect ? '#4caf50' : '#f44336'}">${isCorrect ? '✔' : '✖'}</span>
        <span style="opacity:.85;">${q.text}</span>
      </li>`;
    });
    html += `</ul>`;

    html += `
      <div style="display:flex;justify-content:center;margin-top:32px;">
        <div style="position:relative;width:140px;height:140px;">
          <canvas id="resultChart" width="140" height="140"
            style="border-radius:50%;box-shadow:0 4px 24px #0006,0 0 0 6px #23272f;"></canvas>
          <div id="chartText"
            style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:1.5em;font-weight:bold;color:#fff;text-shadow:0 2px 8px #000a;">
            ${correct}/${questions.length}
          </div>
        </div>
      </div>
      <div style="display:flex;justify-content:center;gap:16px;margin-top:8px;font-size:0.95em;">
        <span><span style="display:inline-block;width:14px;height:14px;background:#4caf50;border-radius:3px;margin-right:4px;box-shadow:0 1px 4px #4caf5055;"></span>Acertos</span>
        <span><span style="display:inline-block;width:14px;height:14px;background:#f44336;border-radius:3px;margin-right:4px;box-shadow:0 1px 4px #f4433655;"></span>Erros</span>
      </div>
      <div style="display:flex;justify-content:center;margin-top:28px;">
        <button id="backToStartBtn" style="
          padding: 12px 32px;
          border-radius: 18px;
          border: none;
          font-size: 1.1em;
          font-weight: bold;
          background: linear-gradient(90deg, #2196f3 0%, #43cea2 100%);
          color: #fff;
          cursor: pointer;
          transition: transform 0.15s, box-shadow 0.15s;
          box-shadow: 0 2px 12px #0004;
          letter-spacing: 1px;
        ">Voltar à seleção de quiz</button>
      </div>
    `;

    document.querySelector('.quiz-container').innerHTML = html;

    const canvas = document.getElementById('resultChart');
    if (canvas && canvas.getContext) {
      const ctx = canvas.getContext('2d');
      const total = correct + incorrect;
      const angleCorrect = (correct / total) * 2 * Math.PI;

      ctx.beginPath();
      ctx.arc(70, 70, 65, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fillStyle = "#23272f";
      ctx.fill();

      const gradGreen = ctx.createLinearGradient(0, 0, 140, 140);
      gradGreen.addColorStop(0, "#43cea2");
      gradGreen.addColorStop(1, "#4caf50");
      ctx.beginPath();
      ctx.moveTo(70, 70);
      ctx.arc(70, 70, 60, -Math.PI/2, -Math.PI/2 + angleCorrect, false);
      ctx.closePath();
      ctx.fillStyle = gradGreen;
      ctx.shadowColor = "#4caf50";
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.shadowBlur = 0;

      if (incorrect > 0) {
        const gradRed = ctx.createLinearGradient(0, 0, 140, 140);
        gradRed.addColorStop(0, "#f44336");
        gradRed.addColorStop(1, "#ff1744");
        ctx.beginPath();
        ctx.moveTo(70, 70);
        ctx.arc(70, 70, 60, -Math.PI/2 + angleCorrect, -Math.PI/2 + 2 * Math.PI, false);
        ctx.closePath();
        ctx.fillStyle = gradRed;
        ctx.shadowColor = "#f44336";
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      ctx.beginPath();
      ctx.arc(70, 70, 60, 0, 2 * Math.PI);
      ctx.lineWidth = 4;
      ctx.strokeStyle = "#fff";
      ctx.stroke();
    }

    const backBtn = document.getElementById('backToStartBtn');
    if (backBtn) {
      backBtn.onclick = () => {
        document.getElementById('quizContainer').style.display = 'none';
        document.getElementById('startScreen').style.display = 'flex';
      };
    }
  }

  window.onload = renderQuestion;

  document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('backToStartBtnQuiz');
    if (btn) {
      btn.onclick = () => {
        document.getElementById('quizContainer').style.display = 'none';
        document.getElementById('startScreen').style.display = 'flex';
      };
    }
  });