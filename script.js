const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
       enunciado: "Qual é o seu instrumento musical favorito",
alternativas: [
  {
    texto: "Teclado",
    afirmacao: "O teclado é um instrumento que pode ser usado em vários gêneros musicais e permite a reprodução de diversos sons diferentes."
  },
  {
    texto: "Violão",
    afirmacao: "O violão é um instrumento versátil e fácil de aprender"
  }
]
    },
    {
        enunciado: "Como a música influencia suas emoções?" ,
        alternativas: [
            {
                texto: "A música me faz sentir feliz e animado",
                afirmacao: "A música tem o poder de elevar o espírito e criar uma atmosfera positiva."
            },
            {
                texto: "A música me faz voltar no tempo.",
                afirmacao: "Músicas podem evocar memórias e sentimentos profundos."
            }
        ]
    },
    {
        enunciado: "Você prefere ouvir música ao vivo ou gravada?",
        alternativas: [
            {
                texto: "Ao vivo, a emoção é maior",
                afirmacao: "A experiência de um show ao vivo é única e emocionante."
            },
            {
                texto: "Gravada, é mais versátil",
                afirmacao: "A música gravada permite que eu a ouça a qualquer momento."
            }
        ]
    },
    {
        enunciado: "Qual gênero musical você mais gosta?",
        alternativas: [
            {
                texto: "MPB",
                afirmacao: "A música MPB é caracterizado pela fusão de ritmos, letras e melodias que refletem a cultura, a história e a vida cotidiana do povo brasileiro."
            },
            {
                texto: "Sertanejo",
                afirmacao: "A música sertaneja é um gênero musical brasileiro com raízes na cultura caipira."
            } 
        ]
    },
    {
        enunciado: "Você gostaria de aprender a tocar um novo instrumento? ",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Aprender um novo instrumento é gratificante."
            },
            {
                texto: "Não",
                afirmacao: "Aprofundar-se em um único instrumento pode ser muito gratificante."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
