// Mock AI Service for Pidgin and Intent Detection

class AIService {
  constructor() {
    this.pidginDictionary = {
      'help': 'I go help you now now.',
      'danger': 'Weti dey sup? You dey safe?',
      'roadblock': 'I don mark am everywhere. Make you pass safe.',
      'police': 'Police dey come.',
    };
  }

  async processCommand(text) {
    const lowerText = text.toLowerCase();

    // Simple intent matching
    if (lowerText.includes('help') || lowerText.includes('save me')) {
      return {
        intent: 'EMERGENCY_SOS',
        response: 'No fear, I dey send signal for emergency contact dem.',
        pidginResponse: 'No shake, signal don go for your people them.',
      };
    }

    if (lowerText.includes('road') || lowerText.includes('accident')) {
      return {
        intent: 'REPORT_INCIDENT',
        response: 'Location noted. Alerting nearby users.',
        pidginResponse: 'I don hear. I go tell other people make dem shine eye.',
      };
    }

    return {
      intent: 'UNKNOWN',
      response: 'I didn\'t quite catch that. Stay safe.',
      pidginResponse: 'Abeg talk am again, I no hear well.',
    };
  }
}

export default new AIService();