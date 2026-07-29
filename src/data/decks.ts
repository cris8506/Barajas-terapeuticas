import { DeckInfo, TherapeuticNeed } from '../types';

export const DECKS: DeckInfo[] = [
  {
    id: '01-abrir-la-conversacion',
    name: 'Abrir la conversación',
    color: '#9CCFE8',
    description: 'Para iniciar la sesión, conocer cómo llega la persona y definir el tema del encuentro.'
  },
  {
    id: '02-lo-que-sentis',
    name: 'Lo que sentís',
    color: '#F2A6A0',
    description: 'Para reconocer, expresar y comprender emociones.'
  },
  {
    id: '03-entre-vos-y-los-demas',
    name: 'Entre vos y los demás',
    color: '#E7A36A',
    description: 'Para explorar vínculos, comunicación, confianza, necesidades y límites.'
  },
  {
    id: '04-lo-que-se-repite',
    name: 'Lo que se repite',
    color: '#B6A0D8',
    description: 'Para identificar patrones, detonantes y respuestas automáticas.'
  },
  {
    id: '05-mi-historia',
    name: 'Mi historia',
    color: '#F1CF6E',
    description: 'Para explorar experiencias, recuerdos, aprendizajes y recursos personales.'
  },
  {
    id: '06-nuevas-miradas',
    name: 'Nuevas miradas',
    color: '#94C9A9',
    description: 'Para ampliar la perspectiva y encontrar otras formas de comprender una situación.'
  },
  {
    id: '07-y-si',
    name: '¿Y si...?',
    color: '#68C5C1',
    description: 'Para explorar posibilidades, decisiones y acciones concretas.'
  }
];

export const THERAPEUTIC_NEEDS: TherapeuticNeed[] = [
  {
    id: 'iniciar-sesion',
    label: 'Iniciar la sesión',
    recommendedDeckId: '01-abrir-la-conversacion'
  },
  {
    id: 'explorar-emociones',
    label: 'Explorar emociones',
    recommendedDeckId: '02-lo-que-sentis'
  },
  {
    id: 'trabajar-relaciones',
    label: 'Trabajar relaciones',
    recommendedDeckId: '03-entre-vos-y-los-demas'
  },
  {
    id: 'fortalecer-limites',
    label: 'Fortalecer límites',
    recommendedDeckId: '03-entre-vos-y-los-demas'
  },
  {
    id: 'reconocer-patrones',
    label: 'Reconocer patrones',
    recommendedDeckId: '04-lo-que-se-repite'
  },
  {
    id: 'explorar-experiencias',
    label: 'Explorar experiencias pasadas',
    recommendedDeckId: '05-mi-historia'
  },
  {
    id: 'encontrar-perspectiva',
    label: 'Encontrar otra perspectiva',
    recommendedDeckId: '06-nuevas-miradas'
  },
  {
    id: 'tomar-decision',
    label: 'Tomar una decisión',
    recommendedDeckId: '07-y-si'
  },
  {
    id: 'cerrar-accion',
    label: 'Cerrar con una acción',
    recommendedDeckId: '07-y-si'
  }
];
