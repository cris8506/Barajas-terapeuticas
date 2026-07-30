import fs from 'fs';
import path from 'path';

const outputDir = path.join(process.cwd(), 'public', 'cards', '02-lo-que-sentis');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function getBaseSvg(titleLines, illustrationContent) {
  const textSpans = titleLines.map((line, idx) => {
    const dy = idx === 0 ? "0" : "36";
    return `<tspan x="200" dy="${dy}">${line}</tspan>`;
  }).join('\n    ');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600" width="100%" height="100%">
  <defs>
    <linearGradient id="cardBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFDF9"/>
      <stop offset="100%" stop-color="#FAF1ED"/>
    </linearGradient>
    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="4" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Outer Frame -->
  <rect x="0" y="0" width="400" height="600" rx="32" ry="32" fill="#F2A6A0"/>
  <rect x="12" y="12" width="376" height="576" rx="22" ry="22" fill="url(#cardBg)"/>
  <rect x="22" y="22" width="356" height="556" rx="16" ry="16" fill="none" stroke="#E8958F" stroke-width="2" stroke-dasharray="7,5"/>

  <!-- Top Foliage Left -->
  <path d="M 60,65 C 45,50 65,30 80,45 C 90,55 75,75 60,65 Z" fill="none" stroke="#D2645B" stroke-width="2"/>
  <path d="M 60,65 C 50,45 35,50 45,60" fill="none" stroke="#D2645B" stroke-width="2"/>
  <path d="M 60,65 C 75,55 80,40 70,45" fill="none" stroke="#D2645B" stroke-width="2"/>
  
  <!-- Top Foliage Right -->
  <path d="M 340,65 C 355,50 335,30 320,45 C 310,55 325,75 340,65 Z" fill="none" stroke="#D2645B" stroke-width="2"/>
  <path d="M 340,65 C 350,45 365,50 355,60" fill="none" stroke="#D2645B" stroke-width="2"/>
  <path d="M 340,65 C 325,55 320,40 330,45" fill="none" stroke="#D2645B" stroke-width="2"/>

  <!-- Top Dots -->
  <circle cx="190" cy="38" r="2.5" fill="#D2645B"/>
  <circle cx="200" cy="38" r="3.5" fill="#D2645B"/>
  <circle cx="210" cy="38" r="2.5" fill="#D2645B"/>

  <!-- Decorative Stars -->
  <polygon points="65,120 67,125 72,125 68,128 70,133 65,130 60,133 62,128 58,125 63,125" fill="none" stroke="#E8958F" stroke-width="1.8"/>
  <polygon points="335,120 337,125 342,125 338,128 340,133 335,130 330,133 332,128 328,125 333,125" fill="none" stroke="#E8958F" stroke-width="1.8"/>

  <!-- Header Text -->
  <text x="200" y="100" text-anchor="middle" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="14" font-weight="700" letter-spacing="2.5" fill="#C85A52">LO QUE SENTÍS</text>

  <!-- Underline ornament -->
  <g transform="translate(150, 108)">
    <path d="M0,8 Q15,0 30,8 T60,8" fill="none" stroke="#E8958F" stroke-width="2"/>
    <path d="M100,8 Q85,0 70,8 T40,8" fill="none" stroke="#E8958F" stroke-width="2"/>
    <path d="M50,11 C47,7 43,10 50,15 C57,10 53,7 50,11 Z" fill="#D2645B"/>
  </g>

  <!-- Question Text -->
  <text text-anchor="middle" font-family="'Outfit', 'Plus Jakarta Sans', system-ui, sans-serif" font-size="26" font-weight="700" fill="#2C2221">
    ${textSpans}
  </text>

  <!-- Illustration Area -->
  ${illustrationContent}

  <!-- Bottom Foliage & Heart -->
  <path d="M 50,550 C 60,535 75,550 65,565 C 55,575 40,560 50,550 Z" fill="none" stroke="#E8958F" stroke-width="1.5"/>
  <path d="M 350,550 C 340,535 325,550 335,565 C 345,575 360,560 350,550 Z" fill="none" stroke="#E8958F" stroke-width="1.5"/>
  <path d="M 200,568 C 197,564 193,567 200,572 C 207,567 203,564 200,568 Z" fill="#D2645B"/>
</svg>`;
}

const cards = [
  // Card 1
  {
    filename: 'card-01.svg',
    lines: ['¿Qué te cuesta', 'expresar de lo', 'que sentís?'],
    startY: 195,
    illustration: `<g transform="translate(50, 310)">
      <!-- Surface -->
      <line x1="20" y1="210" x2="280" y2="210" stroke="#E0C9C3" stroke-width="3" stroke-linecap="round"/>
      <!-- Girl resting head on hand -->
      <path d="M 110,210 L 110,165 C 110,145 130,135 150,135 C 170,135 190,145 190,165 L 190,210 Z" fill="#E88B81"/>
      <path d="M 150,85 C 120,85 120,135 150,135 C 180,135 180,85 150,85 Z" fill="#FCE3D7"/>
      <!-- Hair Bun -->
      <circle cx="140" cy="65" r="22" fill="#4A3728"/>
      <path d="M 125,95 C 115,75 135,65 150,70 C 165,65 185,75 175,95 C 185,110 175,130 170,120 C 160,132 140,132 130,120 Z" fill="#4A3728"/>
      <!-- Face expression -->
      <ellipse cx="138" cy="110" rx="3" ry="4" fill="#332220"/>
      <ellipse cx="162" cy="110" rx="3" ry="4" fill="#332220"/>
      <path d="M 134,103 Q 138,100 142,104" fill="none" stroke="#332220" stroke-width="1.8"/>
      <path d="M 158,104 Q 162,100 166,103" fill="none" stroke="#332220" stroke-width="1.8"/>
      <path d="M 145,123 Q 150,120 155,124" fill="none" stroke="#332220" stroke-width="2" stroke-linecap="round"/>
      <!-- Arm resting -->
      <path d="M 130,210 L 130,160 Q 130,140 145,135" fill="none" stroke="#FCE3D7" stroke-width="14" stroke-linecap="round"/>
      <!-- Thought bubble with scribble -->
      <path d="M 200,145 C 190,125 210,105 235,115 C 255,100 280,120 275,140 C 290,155 275,185 255,180 C 235,190 205,175 200,145 Z" fill="#FFFFFF" stroke="#332220" stroke-width="2"/>
      <path d="M 200,165 L 188,175 L 195,160" fill="#FFFFFF" stroke="#332220" stroke-width="2"/>
      <!-- Scribble inside bubble -->
      <path d="M 225,145 C 230,130 250,130 250,145 C 250,160 230,160 235,140 C 240,125 260,135 255,155" fill="none" stroke="#332220" stroke-width="2" stroke-linecap="round"/>
      <text x="262" y="158" font-family="sans-serif" font-size="16" font-weight="bold" fill="#332220">...</text>
    </g>`
  },
  // Card 2
  {
    filename: 'card-02.svg',
    lines: ['¿Dónde sentís', 'esa emoción en', 'tu cuerpo?'],
    startY: 195,
    illustration: `<g transform="translate(50, 310)">
      <!-- Plant pot on left -->
      <rect x="25" y="160" width="30" height="35" rx="4" fill="#FFFFFF" stroke="#D2645B" stroke-width="2"/>
      <path d="M 40,177 C 37,174 33,176 40,182 C 47,176 43,174 40,177 Z" fill="#D2645B"/>
      <path d="M 40,160 Q 38,135 40,120" fill="none" stroke="#D2645B" stroke-width="2"/>
      <path d="M 40,150 C 25,140 30,125 40,135" fill="#F2A6A0" stroke="#D2645B" stroke-width="1.5"/>
      <path d="M 40,140 C 55,130 50,115 40,125" fill="#F2A6A0" stroke="#D2645B" stroke-width="1.5"/>

      <!-- Cross-legged meditating girl -->
      <ellipse cx="150" cy="210" rx="80" ry="12" fill="#EADCD6"/>
      <path d="M 100,210 C 90,190 120,170 150,170 C 180,170 210,190 200,210 Z" fill="#554D56"/>
      <path d="M 115,160 C 115,130 130,120 150,120 C 170,120 185,130 185,160 Z" fill="#F2A6A0"/>
      <!-- Chest and belly warmth glow -->
      <circle cx="150" cy="140" r="18" fill="#FFF2AD" opacity="0.8" filter="url(#softGlow)"/>
      <path d="M 150,135 C 145,128 135,132 143,142 L 150,148 L 157,142 C 165,132 155,128 150,135 Z" fill="#D2645B"/>
      <circle cx="150" cy="168" r="14" fill="#FFE0B2" opacity="0.8"/>
      <!-- Hands resting over chest and belly -->
      <path d="M 130,142 Q 150,145 165,138" stroke="#FCE3D7" stroke-width="8" stroke-linecap="round"/>
      <path d="M 135,168 Q 150,170 165,165" stroke="#FCE3D7" stroke-width="8" stroke-linecap="round"/>

      <!-- Head & closed eyes -->
      <path d="M 150,70 C 125,70 125,115 150,115 C 175,115 175,70 150,70 Z" fill="#FCE3D7"/>
      <!-- Bun -->
      <circle cx="150" cy="55" r="20" fill="#4A3728"/>
      <path d="M 130,80 C 120,65 135,55 150,60 C 165,55 180,65 170,80 C 178,95 170,110 165,102 C 155,112 145,112 135,102 Z" fill="#4A3728"/>
      <!-- Closed peaceful eyes -->
      <path d="M 138,92 Q 142,97 146,92" fill="none" stroke="#332220" stroke-width="2" stroke-linecap="round"/>
      <path d="M 154,92 Q 158,97 162,92" fill="none" stroke="#332220" stroke-width="2" stroke-linecap="round"/>
      <path d="M 147,104 Q 150,107 153,104" fill="none" stroke="#332220" stroke-width="1.8" stroke-linecap="round"/>

      <!-- Thought bubble with heart -->
      <circle cx="215" cy="100" r="18" fill="#FFFFFF" stroke="#332220" stroke-width="2"/>
      <path d="M 200,112 L 192,120 L 198,108" fill="#FFFFFF" stroke="#332220" stroke-width="2"/>
      <path d="M 215,96 C 211,90 203,94 209,102 L 215,107 L 221,102 C 227,94 219,90 215,96 Z" fill="#D2645B"/>
    </g>`
  },
  // Card 3
  {
    filename: 'card-03.svg',
    lines: ['¿Qué emoción', 'está más', 'presente en vos', 'ahora?'],
    startY: 185,
    illustration: `<g transform="translate(50, 310)">
      <!-- Girl in center -->
      <path d="M 110,210 L 110,165 C 110,145 130,135 150,135 C 170,135 190,145 190,210 Z" fill="#E88B81"/>
      <path d="M 150,85 C 120,85 120,135 150,135 C 180,135 180,85 150,85 Z" fill="#FCE3D7"/>
      <!-- Long wavy hair -->
      <path d="M 120,95 C 100,70 120,50 150,55 C 180,50 200,70 180,95 C 195,120 190,160 180,180 C 160,190 140,190 120,180 C 110,160 105,120 120,95 Z" fill="#4A3728"/>
      <circle cx="150" cy="50" r="18" fill="#4A3728"/>
      <!-- Hand on chest -->
      <path d="M 140,160 C 150,150 160,155 150,140" fill="none" stroke="#FCE3D7" stroke-width="12" stroke-linecap="round"/>

      <!-- Facial expression -->
      <path d="M 138,102 Q 142,106 146,102" fill="none" stroke="#332220" stroke-width="2"/>
      <path d="M 154,102 Q 158,106 162,102" fill="none" stroke="#332220" stroke-width="2"/>
      <path d="M 147,114 Q 150,118 153,114" fill="none" stroke="#332220" stroke-width="1.8"/>

      <!-- 3 Emotion face icons on left -->
      <g transform="translate(40, 90)">
        <circle cx="20" cy="20" r="16" fill="#FFC880" stroke="#E69533" stroke-width="1.5"/>
        <path d="M 12,18 Q 20,26 28,18" fill="none" stroke="#332220" stroke-width="2"/>
        <circle cx="14" cy="15" r="2" fill="#332220"/>
        <circle cx="26" cy="15" r="2" fill="#332220"/>

        <circle cx="0" cy="55" r="16" fill="#FFAB91" stroke="#E66A4E" stroke-width="1.5"/>
        <line x1="-8" y1="58" x2="8" y2="58" stroke="#332220" stroke-width="2"/>
        <circle cx="-6" cy="52" r="2" fill="#332220"/>
        <circle cx="6" cy="52" r="2" fill="#332220"/>

        <circle cx="20" cy="90" r="16" fill="#CE93D8" stroke="#AB47BC" stroke-width="1.5"/>
        <path d="M 12,94 Q 20,86 28,94" fill="none" stroke="#332220" stroke-width="2"/>
        <circle cx="14" cy="87" r="2" fill="#332220"/>
        <circle cx="26" cy="87" r="2" fill="#332220"/>
      </g>

      <!-- Thought bubble with heart -->
      <circle cx="215" cy="100" r="18" fill="#FFFFFF" stroke="#332220" stroke-width="2"/>
      <path d="M 200,112 L 192,120 L 198,108" fill="#FFFFFF" stroke="#332220" stroke-width="2"/>
      <path d="M 215,96 C 211,90 203,94 209,102 L 215,107 L 221,102 C 227,94 219,90 215,96 Z" fill="#D2645B"/>
    </g>`
  },
  // Card 4
  {
    filename: 'card-04.svg',
    lines: ['¿Qué intensidad', 'tiene esta emoción', 'del 0 al 10?'],
    startY: 195,
    illustration: `<g transform="translate(50, 310)">
      <!-- Boy looking up -->
      <path d="M 40,210 L 40,165 C 40,145 60,135 80,135 C 100,135 120,145 120,210 Z" fill="#E88B81"/>
      <path d="M 80,85 C 55,85 55,130 80,130 C 105,130 105,85 80,85 Z" fill="#FCE3D7"/>
      <!-- Curly Hair -->
      <path d="M 60,85 C 45,65 65,50 80,55 C 95,50 110,65 100,85 Z" fill="#5D4037"/>
      <!-- Eyes looking up -->
      <ellipse cx="73" cy="100" rx="3" ry="4" fill="#332220"/>
      <ellipse cx="93" cy="100" rx="3" ry="4" fill="#332220"/>
      <path d="M 80,115 Q 85,118 90,115" fill="none" stroke="#332220" stroke-width="2"/>
      <!-- Hand on chin thinking -->
      <path d="M 85,145 L 85,120" stroke="#FCE3D7" stroke-width="10" stroke-linecap="round"/>

      <!-- Intensity Bar with 4 faces -->
      <g transform="translate(110, 110)">
        <!-- 4 Face icons -->
        <circle cx="20" cy="10" r="14" fill="#A5D6A7" stroke="#388E3C" stroke-width="1.5"/>
        <path d="M 13,12 Q 20,18 27,12" fill="none" stroke="#332220" stroke-width="2"/>

        <circle cx="60" cy="10" r="14" fill="#FFF59D" stroke="#FBC02D" stroke-width="1.5"/>
        <line x1="53" y1="12" x2="67" y2="12" stroke="#332220" stroke-width="2"/>

        <circle cx="100" cy="10" r="14" fill="#FFCC80" stroke="#F57C00" stroke-width="1.5"/>
        <path d="M 93,14 Q 100,8 107,14" fill="none" stroke="#332220" stroke-width="2"/>

        <circle cx="140" cy="10" r="14" fill="#EF9A9A" stroke="#D32F2F" stroke-width="1.5"/>
        <path d="M 133,14 Q 140,8 147,14" fill="none" stroke="#332220" stroke-width="2"/>

        <!-- Slider Bar -->
        <rect x="10" y="45" width="140" height="16" rx="8" fill="url(#sliderGradient)" stroke="#332220" stroke-width="1.5"/>
        <!-- Slider handle at middle-right -->
        <circle cx="90" cy="53" r="14" fill="#E88B81" stroke="#FFFFFF" stroke-width="2"/>

        <!-- Labels 0 and 10 -->
        <text x="10" y="80" font-family="'Outfit', sans-serif" font-size="16" font-weight="bold" fill="#332220">0</text>
        <text x="140" y="80" font-family="'Outfit', sans-serif" font-size="16" font-weight="bold" fill="#332220">10</text>
      </g>
    </g>
    <linearGradient id="sliderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#81C784"/>
      <stop offset="50%" stop-color="#FFF176"/>
      <stop offset="100%" stop-color="#E57373"/>
    </linearGradient>`
  },
  // Card 5
  {
    filename: 'card-05.svg',
    lines: ['¿Qué situación', 'despertó esta', 'emoción?'],
    startY: 195,
    illustration: `<g transform="translate(50, 310)">
      <!-- Surface -->
      <line x1="20" y1="210" x2="280" y2="210" stroke="#E0C9C3" stroke-width="3" stroke-linecap="round"/>
      <!-- Plant pot on left -->
      <rect x="25" y="160" width="30" height="35" rx="4" fill="#FFFFFF" stroke="#D2645B" stroke-width="2"/>
      <path d="M 40,177 C 37,174 33,176 40,182 C 47,176 43,174 40,177 Z" fill="#D2645B"/>
      <path d="M 40,160 Q 38,135 40,120" fill="none" stroke="#D2645B" stroke-width="2"/>
      <path d="M 40,150 C 25,140 30,125 40,135" fill="#F2A6A0" stroke="#D2645B" stroke-width="1.5"/>

      <!-- Girl at desk thinking -->
      <path d="M 110,210 L 110,165 C 110,145 130,135 150,135 C 170,135 190,145 190,210 Z" fill="#E88B81"/>
      <path d="M 150,85 C 120,85 120,135 150,135 C 180,135 180,85 150,85 Z" fill="#FCE3D7"/>
      <!-- Hair Bun -->
      <circle cx="140" cy="65" r="22" fill="#4A3728"/>
      <path d="M 125,95 C 115,75 135,65 150,70 C 165,65 185,75 175,95 C 185,110 175,130 170,120 C 160,132 140,132 130,120 Z" fill="#4A3728"/>
      <ellipse cx="138" cy="110" rx="3" ry="4" fill="#332220"/>
      <ellipse cx="162" cy="110" rx="3" ry="4" fill="#332220"/>
      <path d="M 145,123 Q 150,126 155,123" fill="none" stroke="#332220" stroke-width="2" stroke-linecap="round"/>

      <!-- Thought bubble showing two people talking -->
      <path d="M 190,145 C 180,115 205,90 235,100 C 265,85 295,110 285,140 C 295,165 270,190 245,180 C 220,190 195,170 190,145 Z" fill="#FFFFFF" stroke="#332220" stroke-width="2"/>
      <circle cx="185" cy="165" r="4" fill="#332220"/>
      <circle cx="178" cy="173" r="2.5" fill="#332220"/>

      <!-- Two people inside bubble -->
      <circle cx="225" cy="135" r="10" fill="#F2A6A0"/>
      <path d="M 218,158 C 218,148 232,148 232,158 Z" fill="#D2645B"/>
      <circle cx="255" cy="135" r="10" fill="#554D56"/>
      <path d="M 248,158 C 248,148 262,148 262,158 Z" fill="#332220"/>
      <text x="240" y="120" font-family="'Outfit', sans-serif" font-size="16" font-weight="bold" fill="#D2645B">!</text>
    </g>`
  },
  // Card 6
  {
    filename: 'card-06.svg',
    lines: ['¿Qué nombre', 'le pondrías', 'a lo que', 'sentís?'],
    startY: 180,
    illustration: `<g transform="translate(50, 300)">
      <!-- Girl in center -->
      <line x1="30" y1="210" x2="270" y2="210" stroke="#E0C9C3" stroke-width="3" stroke-linecap="round"/>
      <path d="M 110,210 L 110,165 C 110,145 130,135 150,135 C 170,135 190,145 190,210 Z" fill="#E88B81"/>
      <path d="M 150,85 C 120,85 120,135 150,135 C 180,135 180,85 150,85 Z" fill="#FCE3D7"/>
      <circle cx="140" cy="65" r="22" fill="#4A3728"/>
      <path d="M 125,95 C 115,75 135,65 150,70 C 165,65 185,75 175,95 Z" fill="#4A3728"/>
      <ellipse cx="138" cy="110" rx="3" ry="4" fill="#332220"/>
      <ellipse cx="162" cy="110" rx="3" ry="4" fill="#332220"/>

      <!-- 4 Option bubbles around her -->
      <!-- Top-left CALMA -->
      <g transform="translate(15, 60)">
        <circle cx="40" cy="30" r="32" fill="#FFFFFF" stroke="#E8958F" stroke-width="2"/>
        <path d="M 40,22 C 36,16 28,20 34,28 L 40,33 L 46,28 C 52,20 44,16 40,22 Z" fill="#D2645B"/>
        <text x="40" y="46" font-family="'Outfit', sans-serif" font-size="11" font-weight="bold" fill="#332220" text-anchor="middle">CALMA</text>
      </g>
      <!-- Top-right ORGULLO -->
      <g transform="translate(185, 60)">
        <circle cx="40" cy="30" r="32" fill="#FFFFFF" stroke="#E8958F" stroke-width="2"/>
        <polygon points="40,15 43,22 50,22 45,26 47,33 40,29 33,33 35,26 30,22 37,22" fill="#E8A838"/>
        <text x="40" y="46" font-family="'Outfit', sans-serif" font-size="11" font-weight="bold" fill="#332220" text-anchor="middle">ORGULLO</text>
      </g>
      <!-- Bottom-left TRISTEZA -->
      <g transform="translate(10, 150)">
        <circle cx="40" cy="32" r="32" fill="#FFFFFF" stroke="#E8958F" stroke-width="2"/>
        <path d="M 28,30 C 28,24 35,20 42,24 C 47,20 54,25 52,32 Z" fill="#9E9E9E"/>
        <text x="40" y="48" font-family="'Outfit', sans-serif" font-size="10" font-weight="bold" fill="#332220" text-anchor="middle">TRISTEZA</text>
      </g>
      <!-- Bottom-right FRUSTRACIÓN -->
      <g transform="translate(190, 150)">
        <circle cx="40" cy="32" r="32" fill="#FFFFFF" stroke="#E8958F" stroke-width="2"/>
        <path d="M 32,26 C 35,20 45,20 45,26 C 45,32 35,32 38,24" fill="none" stroke="#332220" stroke-width="2"/>
        <text x="40" y="48" font-family="'Outfit', sans-serif" font-size="9" font-weight="bold" fill="#332220" text-anchor="middle">FRUSTRACIÓN</text>
      </g>
    </g>`
  },
  // Card 7
  {
    filename: 'card-07.svg',
    lines: ['¿Qué necesitás', 'cuando te sentís', 'así?'],
    startY: 195,
    illustration: `<g transform="translate(50, 310)">
      <!-- Cozy girl kneeling on floor with blanket, candle, tea -->
      <path d="M 80,180 C 70,140 100,120 120,120 C 140,120 160,140 150,180 Z" fill="#E88B81"/>
      <path d="M 120,70 C 95,70 95,115 120,115 C 145,115 145,70 120,70 Z" fill="#FCE3D7"/>
      <circle cx="110" cy="55" r="18" fill="#4A3728"/>
      <path d="M 100,80 C 90,65 105,55 120,60 C 135,55 150,65 140,80 Z" fill="#4A3728"/>
      <!-- Closed gentle eyes -->
      <path d="M 110,90 Q 114,94 118,90" fill="none" stroke="#332220" stroke-width="1.8"/>
      <path d="M 124,90 Q 128,94 132,90" fill="none" stroke="#332220" stroke-width="1.8"/>

      <!-- Cozy Blanket & Heart cushion -->
      <path d="M 150,150 C 150,130 190,130 210,150 C 220,170 200,190 160,185 Z" fill="#F2A6A0" stroke="#D2645B" stroke-width="2"/>
      <path d="M 210,130 C 200,110 230,100 240,120 C 250,100 280,110 270,130 C 260,150 240,170 240,170 C 240,170 220,150 210,130 Z" fill="#D2645B"/>

      <!-- Candle & Hot Mug -->
      <rect x="145" y="165" width="20" height="20" rx="3" fill="#FFFFFF" stroke="#332220" stroke-width="1.5"/>
      <path d="M 155,165 Q 153,158 155,155 Q 157,158 155,165 Z" fill="#FFA726"/>
      <!-- Mug -->
      <rect x="175" y="160" width="26" height="25" rx="5" fill="#E88B81" stroke="#332220" stroke-width="1.5"/>
      <path d="M 201,168 C 207,168 207,178 201,178" fill="none" stroke="#332220" stroke-width="1.5"/>
      <!-- Steam -->
      <path d="M 183,155 Q 180,145 185,140" fill="none" stroke="#C85A52" stroke-width="1.5"/>
      <path d="M 193,155 Q 196,145 191,140" fill="none" stroke="#C85A52" stroke-width="1.5"/>
    </g>`
  },
  // Card 8
  {
    filename: 'card-08.svg',
    lines: ['¿Qué podría', 'estar queriendo', 'mostrarte esta', 'emoción?'],
    startY: 185,
    illustration: `<g transform="translate(50, 310)">
      <!-- Plant pot on left -->
      <rect x="25" y="160" width="30" height="35" rx="4" fill="#FFFFFF" stroke="#D2645B" stroke-width="2"/>
      <path d="M 40,177 C 37,174 33,176 40,182 C 47,176 43,174 40,177 Z" fill="#D2645B"/>
      <path d="M 40,160 Q 38,135 40,120" fill="none" stroke="#D2645B" stroke-width="2"/>
      <path d="M 40,150 C 25,140 30,125 40,135" fill="#F2A6A0" stroke="#D2645B" stroke-width="1.5"/>

      <!-- Girl looking up -->
      <path d="M 100,210 L 100,165 C 100,145 120,135 140,135 C 160,135 180,145 180,210 Z" fill="#E88B81"/>
      <path d="M 140,85 C 115,85 115,130 140,130 C 165,130 165,85 140,85 Z" fill="#FCE3D7"/>
      <circle cx="130" cy="65" r="22" fill="#4A3728"/>
      <path d="M 115,95 C 105,75 125,65 140,70 C 155,65 175,75 165,95 Z" fill="#4A3728"/>
      <!-- Looking up eyes -->
      <ellipse cx="132" cy="100" rx="3" ry="4" fill="#332220"/>
      <ellipse cx="152" cy="100" rx="3" ry="4" fill="#332220"/>
      <path d="M 138,115 Q 142,118 146,115" fill="none" stroke="#332220" stroke-width="2"/>
      <!-- Hand on chin -->
      <path d="M 135,145 L 135,120" stroke="#FCE3D7" stroke-width="10" stroke-linecap="round"/>

      <!-- Sunburst glowing bubble with heart -->
      <g transform="translate(200, 90)">
        <circle cx="35" cy="35" r="45" fill="#FFF9C4" filter="url(#softGlow)" opacity="0.6"/>
        <circle cx="35" cy="35" r="28" fill="#FFFFFF" stroke="#D2645B" stroke-width="2"/>
        <path d="M 35,26 C 31,20 23,24 29,32 L 35,37 L 41,32 C 47,24 39,20 35,26 Z" fill="#D2645B"/>
        <!-- Sun rays -->
        <line x1="35" y1="0" x2="35" y2="-6" stroke="#FFA726" stroke-width="2"/>
        <line x1="60" y1="10" x2="65" y2="5" stroke="#FFA726" stroke-width="2"/>
        <line x1="70" y1="35" x2="76" y2="35" stroke="#FFA726" stroke-width="2"/>
        <line x1="60" y1="60" x2="65" y2="65" stroke="#FFA726" stroke-width="2"/>
      </g>
    </g>`
  },
  // Card 9
  {
    filename: 'card-09.svg',
    lines: ['¿Qué emoción', 'intentás', 'evitar?'],
    startY: 195,
    illustration: `<g transform="translate(50, 310)">
      <!-- Girl rejecting/turning away -->
      <path d="M 150,210 L 150,165 C 150,145 170,135 190,135 C 210,135 230,145 230,210 Z" fill="#E88B81"/>
      <path d="M 190,85 C 165,85 165,130 190,130 C 215,130 215,85 190,85 Z" fill="#FCE3D7"/>
      <circle cx="180" cy="65" r="22" fill="#4A3728"/>
      <path d="M 165,95 C 155,75 175,65 190,70 C 205,65 225,75 215,95 Z" fill="#4A3728"/>
      <!-- Turning away face expression -->
      <path d="M 175,100 Q 180,105 185,100" fill="none" stroke="#332220" stroke-width="1.8"/>
      <path d="M 195,100 Q 200,105 205,100" fill="none" stroke="#332220" stroke-width="1.8"/>
      <!-- Hand pushing away -->
      <path d="M 160,150 L 135,140" stroke="#FCE3D7" stroke-width="12" stroke-linecap="round"/>
      <path d="M 132,125 L 132,155" stroke="#FCE3D7" stroke-width="6" stroke-linecap="round"/>

      <!-- Sad storm cloud on left -->
      <path d="M 50,130 C 40,110 60,90 80,100 C 95,85 125,95 120,115 C 135,120 130,145 110,145 C 90,150 60,150 50,130 Z" fill="#B0BEC5" stroke="#332220" stroke-width="2"/>
      <!-- Sad cloud face -->
      <path d="M 70,118 Q 75,114 80,118" fill="none" stroke="#332220" stroke-width="2"/>
      <path d="M 90,118 Q 95,114 100,118" fill="none" stroke="#332220" stroke-width="2"/>
      <path d="M 80,132 Q 85,126 90,132" fill="none" stroke="#332220" stroke-width="2"/>
      <!-- Raindrops -->
      <circle cx="70" cy="160" r="2" fill="#4FC3F7"/>
      <circle cx="85" cy="168" r="2.5" fill="#4FC3F7"/>
      <circle cx="100" cy="160" r="2" fill="#4FC3F7"/>
    </g>`
  },
  // Card 10
  {
    filename: 'card-10.svg',
    lines: ['¿Qué hacés', 'habitualmente', 'con esta', 'emoción?'],
    startY: 180,
    illustration: `<g transform="translate(50, 290)">
      <!-- Girl in center thinking -->
      <path d="M 110,210 L 110,165 C 110,145 130,135 150,135 C 170,135 190,145 190,210 Z" fill="#E88B81"/>
      <path d="M 150,85 C 120,85 120,135 150,135 C 180,135 180,85 150,85 Z" fill="#FCE3D7"/>
      <circle cx="140" cy="65" r="22" fill="#4A3728"/>
      <path d="M 125,95 C 115,75 135,65 150,70 C 165,65 185,75 175,95 Z" fill="#4A3728"/>
      <ellipse cx="138" cy="110" rx="3" ry="4" fill="#332220"/>
      <ellipse cx="162" cy="110" rx="3" ry="4" fill="#332220"/>

      <!-- 4 Action circles around her -->
      <!-- Top-left: Journaling -->
      <g transform="translate(25, 55)">
        <circle cx="30" cy="30" r="28" fill="#FFF3E0" stroke="#E88B81" stroke-width="2"/>
        <rect x="18" y="16" width="20" height="25" rx="3" fill="#E57373"/>
        <path d="M 28,26 C 26,22 20,24 24,30 Z" fill="#FFFFFF"/>
      </g>
      <!-- Top-right: Talking -->
      <g transform="translate(185, 55)">
        <circle cx="30" cy="30" r="28" fill="#E8F5E9" stroke="#E88B81" stroke-width="2"/>
        <path d="M 18,22 C 18,16 38,16 38,25 C 38,32 26,32 22,35 L 22,30 C 18,30 18,26 18,22 Z" fill="#FFFFFF" stroke="#332220" stroke-width="1.5"/>
        <text x="28" y="26" font-size="10" font-weight="bold" fill="#332220" text-anchor="middle">...</text>
      </g>
      <!-- Bottom-left: Crying -->
      <g transform="translate(15, 145)">
        <circle cx="30" cy="30" r="28" fill="#EDE7F6" stroke="#E88B81" stroke-width="2"/>
        <circle cx="30" cy="25" r="12" fill="#FCE3D7"/>
        <path d="M 22,25 C 22,30 38,30 38,25 Z" fill="#4A3728"/>
        <!-- Tear drops -->
        <circle cx="20" cy="28" r="2" fill="#4FC3F7"/>
        <circle cx="40" cy="28" r="2" fill="#4FC3F7"/>
      </g>
      <!-- Bottom-right: Walking away -->
      <g transform="translate(195, 145)">
        <circle cx="30" cy="30" r="28" fill="#FFFDE7" stroke="#E88B81" stroke-width="2"/>
        <path d="M 30,16 C 25,16 25,24 30,24 Z" fill="#4A3728"/>
        <path d="M 25,25 L 35,25 L 30,42 Z" fill="#E88B81"/>
      </g>
    </g>`
  },
  // Card 11
  {
    filename: 'card-11.svg',
    lines: ['¿Qué cambiaría', 'si escucharas', 'esta emoción', 'sin juzgarla?'],
    startY: 180,
    illustration: `<g transform="translate(50, 310)">
      <!-- Serene girl with long hair, hands on heart -->
      <path d="M 110,210 L 110,165 C 110,145 130,135 150,135 C 170,135 190,145 190,210 Z" fill="#E88B81"/>
      <path d="M 150,85 C 120,85 120,135 150,135 C 180,135 180,85 150,85 Z" fill="#FCE3D7"/>
      <!-- Long flowing hair -->
      <path d="M 120,95 C 100,70 120,50 150,55 C 180,50 200,70 180,95 C 195,120 195,170 185,190 C 165,200 135,200 115,190 C 105,170 105,120 120,95 Z" fill="#4A3728"/>

      <!-- Gentle closed eyes smile -->
      <path d="M 138,98 Q 142,102 146,98" fill="none" stroke="#332220" stroke-width="2"/>
      <path d="M 154,98 Q 158,102 162,98" fill="none" stroke="#332220" stroke-width="2"/>
      <path d="M 145,112 Q 150,118 155,112" fill="none" stroke="#332220" stroke-width="1.8"/>

      <!-- Hands folded on heart -->
      <path d="M 130,155 Q 150,145 170,155" stroke="#FCE3D7" stroke-width="12" stroke-linecap="round"/>
      <path d="M 135,160 Q 150,150 165,160" stroke="#FCE3D7" stroke-width="10" stroke-linecap="round"/>

      <!-- Thought bubble with glowing heart -->
      <circle cx="215" cy="90" r="20" fill="#FFFFFF" stroke="#332220" stroke-width="2"/>
      <path d="M 198,104 L 190,112 L 196,100" fill="#FFFFFF" stroke="#332220" stroke-width="2"/>
      <path d="M 215,85 C 211,79 203,83 209,91 L 215,96 L 221,91 C 227,83 219,79 215,85 Z" fill="#D2645B"/>
    </g>`
  },
  // Card 12
  {
    filename: 'card-12.svg',
    lines: ['¿Qué podés', 'hacer hoy para', 'cuidar lo que', 'sentís?'],
    startY: 180,
    illustration: `<g transform="translate(50, 310)">
      <!-- Surface -->
      <line x1="20" y1="210" x2="280" y2="210" stroke="#E0C9C3" stroke-width="3" stroke-linecap="round"/>

      <!-- Desk items: mug, candle, plant -->
      <rect x="30" y="170" width="22" height="22" rx="4" fill="#E88B81" stroke="#332220" stroke-width="1.5"/>
      <path d="M 41,165 Q 39,158 41,155 Q 43,158 41,165 Z" fill="#FFA726"/>

      <rect x="220" y="175" width="25" height="30" rx="4" fill="#A5D6A7" stroke="#388E3C" stroke-width="1.5"/>
      <path d="M 232,175 Q 230,155 232,145" stroke="#388E3C" stroke-width="2"/>

      <!-- Girl writing in journal -->
      <path d="M 110,210 L 110,165 C 110,145 130,135 150,135 C 170,135 190,145 190,210 Z" fill="#E88B81"/>
      <path d="M 150,85 C 120,85 120,135 150,135 C 180,135 180,85 150,85 Z" fill="#FCE3D7"/>
      <circle cx="140" cy="65" r="22" fill="#4A3728"/>
      <path d="M 125,95 C 115,75 135,65 150,70 C 165,65 185,75 175,95 Z" fill="#4A3728"/>
      <path d="M 138,98 Q 142,102 146,98" fill="none" stroke="#332220" stroke-width="2"/>
      <path d="M 154,98 Q 158,102 162,98" fill="none" stroke="#332220" stroke-width="2"/>

      <!-- Open journal on desk -->
      <polygon points="100,195 145,185 190,195 145,205" fill="#FFFFFF" stroke="#332220" stroke-width="1.5"/>
      <path d="M 140,198 C 138,194 134,195 137,200 Z" fill="#D2645B"/>
    </g>`
  },
  // Card 13
  {
    filename: 'card-13.svg',
    lines: ['¿Qué emoción', 'te gustaría', 'comprender', 'mejor?'],
    startY: 180,
    illustration: `<g transform="translate(50, 300)">
      <!-- Girl in center -->
      <path d="M 110,220 L 110,175 C 110,155 130,145 150,145 C 170,145 190,155 190,220 Z" fill="#E88B81"/>
      <path d="M 150,95 C 120,95 120,145 150,145 C 180,145 180,95 150,95 Z" fill="#FCE3D7"/>
      <circle cx="140" cy="75" r="22" fill="#4A3728"/>
      <path d="M 125,105 C 115,85 135,75 150,80 C 165,75 185,85 175,105 Z" fill="#4A3728"/>
      <ellipse cx="138" cy="120" rx="3" ry="4" fill="#332220"/>
      <ellipse cx="162" cy="120" rx="3" ry="4" fill="#332220"/>

      <!-- Multiple emotion face circles around her -->
      <!-- Alegría -->
      <g transform="translate(130, 20)">
        <circle cx="20" cy="20" r="16" fill="#FFC880" stroke="#E69533" stroke-width="1.5"/>
        <path d="M 12,18 Q 20,26 28,18" fill="none" stroke="#332220" stroke-width="2"/>
        <text x="20" y="48" font-family="'Outfit', sans-serif" font-size="10" font-weight="bold" fill="#332220" text-anchor="middle">Alegría</text>
      </g>
      <!-- Calma -->
      <g transform="translate(190, 45)">
        <circle cx="20" cy="20" r="16" fill="#FFAB91" stroke="#E66A4E" stroke-width="1.5"/>
        <path d="M 12,20 Q 20,24 28,20" fill="none" stroke="#332220" stroke-width="2"/>
        <text x="20" y="48" font-family="'Outfit', sans-serif" font-size="10" font-weight="bold" fill="#332220" text-anchor="middle">Calma</text>
      </g>
      <!-- Tristeza -->
      <g transform="translate(220, 115)">
        <circle cx="20" cy="20" r="16" fill="#CE93D8" stroke="#AB47BC" stroke-width="1.5"/>
        <path d="M 12,24 Q 20,16 28,24" fill="none" stroke="#332220" stroke-width="2"/>
        <text x="20" y="48" font-family="'Outfit', sans-serif" font-size="10" font-weight="bold" fill="#332220" text-anchor="middle">Tristeza</text>
      </g>
      <!-- Gratitud -->
      <g transform="translate(190, 185)">
        <circle cx="20" cy="20" r="16" fill="#FFCC80" stroke="#F57C00" stroke-width="1.5"/>
        <path d="M 12,18 Q 20,26 28,18" fill="none" stroke="#332220" stroke-width="2"/>
        <text x="20" y="48" font-family="'Outfit', sans-serif" font-size="10" font-weight="bold" fill="#332220" text-anchor="middle">Gratitud</text>
      </g>
      <!-- Enojo -->
      <g transform="translate(45, 195)">
        <circle cx="20" cy="20" r="16" fill="#EF9A9A" stroke="#D32F2F" stroke-width="1.5"/>
        <path d="M 12,24 Q 20,16 28,24" fill="none" stroke="#332220" stroke-width="2"/>
        <line x1="12" y1="12" x2="18" y2="16" stroke="#332220" stroke-width="2"/>
        <line x1="28" y1="12" x2="22" y2="16" stroke="#332220" stroke-width="2"/>
        <text x="20" y="48" font-family="'Outfit', sans-serif" font-size="10" font-weight="bold" fill="#332220" text-anchor="middle">Enojo</text>
      </g>
      <!-- Miedo -->
      <g transform="translate(20, 130)">
        <circle cx="20" cy="20" r="16" fill="#CE93D8" stroke="#AB47BC" stroke-width="1.5"/>
        <ellipse cx="20" cy="22" rx="4" ry="5" fill="#332220"/>
        <text x="20" y="48" font-family="'Outfit', sans-serif" font-size="10" font-weight="bold" fill="#332220" text-anchor="middle">Miedo</text>
      </g>
      <!-- Confusión -->
      <g transform="translate(25, 65)">
        <circle cx="20" cy="20" r="16" fill="#C5E1A5" stroke="#7CB342" stroke-width="1.5"/>
        <line x1="12" y1="22" x2="28" y2="22" stroke="#332220" stroke-width="2"/>
        <text x="20" y="48" font-family="'Outfit', sans-serif" font-size="10" font-weight="bold" fill="#332220" text-anchor="middle">Confusión</text>
      </g>
    </g>`
  },
  // Card 14
  {
    filename: 'card-14.svg',
    lines: ['¿Qué te ayuda', 'a sentirte más', 'tranquilo?'],
    startY: 195,
    illustration: `<g transform="translate(50, 310)">
      <!-- Boy cozy wrapped in pink blanket holding mug -->
      <path d="M 80,180 C 70,140 100,120 120,120 C 140,120 160,140 150,180 Z" fill="#E88B81"/>
      <path d="M 120,70 C 95,70 95,115 120,115 C 145,115 145,70 120,70 Z" fill="#FCE3D7"/>
      <path d="M 100,80 C 85,60 105,45 120,50 C 135,45 155,60 140,80 Z" fill="#5D4037"/>

      <!-- Gentle closed eyes smile -->
      <path d="M 110,92 Q 114,96 118,92" fill="none" stroke="#332220" stroke-width="1.8"/>
      <path d="M 124,92 Q 128,96 132,92" fill="none" stroke="#332220" stroke-width="1.8"/>
      <path d="M 117,104 Q 120,107 123,104" fill="none" stroke="#332220" stroke-width="1.8"/>

      <!-- Blanket around shoulders -->
      <path d="M 90,130 C 80,150 100,200 160,190 C 180,180 170,140 150,130 Z" fill="#F2A6A0" stroke="#D2645B" stroke-width="2"/>

      <!-- Holding steaming mug -->
      <rect x="110" y="145" width="24" height="22" rx="4" fill="#FFFFFF" stroke="#332220" stroke-width="1.5"/>
      <path d="M 122,152 C 120,148 116,150 119,155 Z" fill="#D2645B"/>
      <path d="M 120,140 Q 117,130 120,125" fill="none" stroke="#D2645B" stroke-width="1.5"/>

      <!-- Table with candle & plant -->
      <rect x="25" y="175" width="30" height="25" fill="#D7CCC8"/>
      <rect x="35" y="160" width="12" height="15" rx="2" fill="#FFFFFF" stroke="#332220" stroke-width="1.5"/>
      <path d="M 41,158 Q 39,152 41,150 Z" fill="#FFA726"/>

      <!-- Heart speech bubble -->
      <circle cx="195" cy="110" r="16" fill="#FFFFFF" stroke="#332220" stroke-width="2"/>
      <path d="M 195,105 C 191,100 185,103 190,110 L 195,114 L 200,110 C 205,103 199,100 195,105 Z" fill="#D2645B"/>
    </g>`
  },
  // Card 15
  {
    filename: 'card-15.svg',
    lines: ['¿Cuándo te', 'sentiste así por', 'última vez?'],
    startY: 195,
    illustration: `<g transform="translate(50, 310)">
      <!-- Girl resting head on hand thinking -->
      <path d="M 50,210 L 50,165 C 50,145 70,135 90,135 C 110,135 130,145 130,210 Z" fill="#E88B81"/>
      <path d="M 90,85 C 65,85 65,130 90,130 C 115,130 115,85 90,85 Z" fill="#FCE3D7"/>
      <path d="M 70,95 C 50,70 70,50 100,55 C 130,50 140,70 120,95 C 135,120 130,160 120,180 Z" fill="#4A3728"/>
      <!-- Looking up eyes -->
      <ellipse cx="82" cy="100" rx="3" ry="4" fill="#332220"/>
      <ellipse cx="102" cy="100" rx="3" ry="4" fill="#332220"/>
      <path d="M 88,115 Q 92,118 96,115" fill="none" stroke="#332220" stroke-width="2"/>

      <!-- Thought bubble showing sad past memory with broken heart -->
      <path d="M 150,135 C 140,105 165,80 195,90 C 225,75 255,100 245,130 C 255,155 230,180 205,170 C 180,180 155,160 150,135 Z" fill="#FFFFFF" stroke="#332220" stroke-width="2"/>
      <circle cx="140" cy="155" r="4" fill="#332220"/>
      <circle cx="132" cy="163" r="2.5" fill="#332220"/>

      <!-- Sad figure in bubble -->
      <circle cx="190" cy="120" r="10" fill="#CE93D8"/>
      <path d="M 183,142 C 183,132 197,132 197,142 Z" fill="#7B1FA2"/>

      <!-- Broken heart icon in bubble -->
      <path d="M 220,118 C 217,113 211,116 215,122 L 220,127 L 225,122 C 229,116 223,113 220,118 Z" fill="#D2645B"/>
      <line x1="218" y1="116" x2="222" y2="124" stroke="#FFFFFF" stroke-width="1.5"/>
    </g>`
  }
];

cards.forEach((card) => {
  const svgContent = getBaseSvg(card.lines, card.illustration);
  const filePath = path.join(outputDir, card.filename);
  fs.writeFileSync(filePath, svgContent, 'utf-8');
  console.log(`Generated ${card.filename}`);
});

console.log('Finished generating all 15 cards for deck 2!');
