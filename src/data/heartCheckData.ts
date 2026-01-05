export type MessageType = "bot" | "user" | "alert";

export interface Message {
  id: number;
  type: MessageType;
  text?: string;
  isCritical?: boolean;
}

export interface ChatOption {
  label: string;
  next: string;
}

export interface ScriptStep {
  botReply: string;
  options: ChatOption[];
}

export const chatScript: Record<string, ScriptStep> = {
  initial: {
    botReply: "Olá! Sou a Tracey, sua assistente de bem-estar. Como você está se sentindo neste momento?",
    options: [
      { label: "Estou me sentindo ótima!", next: "feeling_good" },
      { label: "Um pouco cansada/estressada.", next: "feeling_tired" },
      { label: "Não estou me sentindo bem...", next: "feeling_bad" },
    ],
  },

  feeling_good: {
    botReply: "Fico muito feliz em saber! É ótimo ver você com essa energia. Você chegou a praticar alguma atividade física hoje?",
    options: [
      { label: "Sim, treinei hoje!", next: "good_exercise" },
      { label: "Ainda não, mas pretendo.", next: "good_motivation" },
      { label: "Hoje é meu dia de descanso.", next: "good_rest" },
    ],
  },
  good_exercise: {
    botReply: "Parabéns! O exercício é fundamental para a saúde do coração. Continue assim! 💖",
    options: [
      { label: "Obrigada, Tracey!", next: "end_positive" }
    ],
  },
  good_motivation: {
    botReply: "Sem problemas! Até uma caminhada leve de 15 minutos já faz diferença. Se puder, movimente-se um pouco mais tarde.",
    options: [
      { label: "Pode deixar!", next: "end_positive" }
    ],
  },
  good_rest: {
    botReply: "O descanso também é essencial para a recuperação muscular e mental. Aproveite seu dia relaxante!",
    options: [
      { label: "Vou aproveitar.", next: "end_positive" }
    ],
  },

  feeling_tired: {
    botReply: "Entendo. Às vezes a rotina pesa um pouco. Você diria que esse cansaço é mais físico ou mental (estresse)?",
    options: [
      { label: "Muita coisa na cabeça (Mental).", next: "stress_tips" },
      { label: "Meu corpo está exausto (Físico).", next: "physical_tired" },
    ],
  },
  stress_tips: {
    botReply: "O estresse afeta diretamente nossa pressão arterial. Tente fazer uma pausa agora: respire fundo pelo nariz contando até 4, segure por 4, e solte por 6.",
    options: [
      { label: "Fiz isso, ajudou um pouco.", next: "end_care" },
      { label: "Vou tentar mais tarde.", next: "end_care" }
    ],
  },
  physical_tired: {
    botReply: "Seu corpo pode estar pedindo hidratação ou sono de qualidade. Tente beber um copo d'água agora e evite telas antes de dormir hoje.",
    options: [
      { label: "Vou beber água agora.", next: "end_care" }
    ],
  },

  feeling_bad: {
    botReply: "Sinto muito. Para eu poder ajudar melhor, o que exatamente você está sentindo?",
    options: [
      { label: "Dor de cabeça leve ou indisposição.", next: "mild_symptoms" },
      { label: "Aperto no peito, falta de ar ou náusea.", next: "critical_check" },
    ],
  },
  mild_symptoms: {
    botReply: "Monitore isso de perto. Se a dor persistir ou aumentar, procure ajuda médica. Tente descansar em um lugar silencioso e escuro por enquanto.",
    options: [
      { label: "Ok, vou observar.", next: "end_monitor" }
    ],
  },
  critical_check: {
    botReply: "Isso requer atenção imediata. Esses sintomas podem indicar problemas cardíacos.",
    options: [
      { label: "Quero acionar o alerta de emergência.", next: "critical" },
      { label: "Foi alarme falso, estou melhor.", next: "mild_symptoms" } 
    ],
  },
  critical: {
    botReply: "ALERT_TRIGGER", 
    options: [],
  },

  end_positive: {
    botReply: "Estarei por aqui se precisar conversar novamente. Tenha um excelente dia!",
    options: [],
  },
  end_care: {
    botReply: "Cuide-se com carinho. Se sentir qualquer sintoma diferente, volte aqui. Estou torcendo por você!",
    options: [],
  },
  end_monitor: {
    botReply: "Estou atenta. Se mudar qualquer coisa, me chame imediatamente.",
    options: [],
  }
};