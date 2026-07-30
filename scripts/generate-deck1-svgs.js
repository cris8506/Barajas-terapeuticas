import fs from 'fs';
import path from 'path';

const outputDir = path.join(process.cwd(), 'public', 'cards', '01-abrir-la-conversacion');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const cardsData = [
  {
    num: 1,
    lines: ['¿Cómo llegás', 'hoy a este', 'espacio?'],
    svgContent: `
    <!-- Person resting face on hand next to plant and heart speech bubble -->
    <ellipse cx="150" cy="220" rx="90" ry="8" fill="#E8DFD3"/>
    <rect x="55" y="175" width="30" height="35" rx="4" fill="#FFFFFF" stroke="#3D5A75" stroke-width="2"/>
    <path d="M 70,192 C 67,189 63,191 70,197 C 77,191 73,189 70,192 Z" fill="#7BA9C6"/>
    <path d="M 70,175 Q 68,150 70,135" fill="none" stroke="#527B60" stroke-width="2.5"/>
    <path d="M 70,165 C 55,155 60,140 70,150" fill="#92C5A5" stroke="#487056" stroke-width="1.5"/>
    <path d="M 70,155 C 85,145 80,130 70,140" fill="#92C5A5" stroke="#487056" stroke-width="1.5"/>

    <path d="M 105,200 C 105,150 140,140 175,140 C 210,140 225,160 225,200 Z" fill="#9CCFE8" stroke="#3D5A75" stroke-width="2"/>
    <path d="M 150,80 C 115,80 115,140 150,140 C 185,140 185,80 150,80 Z" fill="#FDDFCE"/>
    <ellipse cx="135" cy="115" rx="6" ry="4" fill="#F4A69D" opacity="0.6"/>
    <ellipse cx="165" cy="115" rx="6" ry="4" fill="#F4A69D" opacity="0.6"/>
    <path d="M 130,105 Q 135,100 140,105" fill="none" stroke="#3D5A75" stroke-width="2" stroke-linecap="round"/>
    <path d="M 160,105 Q 165,100 170,105" fill="none" stroke="#3D5A75" stroke-width="2" stroke-linecap="round"/>
    <path d="M 146,122 Q 150,126 154,122" fill="none" stroke="#3D5A75" stroke-width="2" stroke-linecap="round"/>
    <path d="M 125,95 C 110,70 130,50 150,55 C 170,50 190,70 175,95 C 185,110 175,130 170,120 C 160,135 140,135 130,120 C 120,125 115,110 125,95 Z" fill="#3D3028" stroke="#251E19" stroke-width="2"/>
    <path d="M 130,145 C 120,130 125,115 135,120" fill="none" stroke="#3D5A75" stroke-width="2" stroke-linecap="round"/>

    <path d="M 190,110 C 190,95 210,85 225,100 C 240,85 260,95 260,110 C 260,125 225,145 225,145 C 225,145 190,125 190,110 Z" fill="#FFFFFF" stroke="#3D5A75" stroke-width="2"/>
    <path d="M 225,105 C 220,98 210,102 218,112 L 225,120 L 232,112 C 240,102 230,98 225,105 Z" fill="#4B779A"/>
    `
  },
  {
    num: 2,
    lines: ['¿Qué te', 'gustaría', 'trabajar en', 'esta sesión?'],
    svgContent: `
    <!-- Person writing in notebook with tea and candle -->
    <ellipse cx="150" cy="225" rx="120" ry="8" fill="#E8DFD3"/>
    <rect x="25" y="180" width="35" height="35" rx="6" fill="#FFFFFF" stroke="#3D5A75" stroke-width="2"/>
    <path d="M 25,190 C 15,190 15,205 25,205" fill="none" stroke="#3D5A75" stroke-width="2"/>
    <path d="M 42,197 C 39,192 35,194 42,201 C 49,194 45,192 42,197 Z" fill="#7BA9C6"/>
    <path d="M 35,175 Q 30,165 35,155" fill="none" stroke="#7BA9C6" stroke-width="1.5" stroke-linecap="round"/>
    <rect x="235" y="190" width="30" height="25" rx="4" fill="#68A5C7" stroke="#3D5A75" stroke-width="2"/>
    <path d="M 250,202 C 247,198 243,200 250,206 C 257,200 253,198 250,202 Z" fill="#FFFFFF"/>
    <path d="M 250,190 L 250,183" stroke="#3D5A75" stroke-width="2"/>
    <path d="M 250,183 C 245,175 255,175 250,183 Z" fill="#F8C068"/>
    <polygon points="75,215 150,222 225,215 220,185 150,190 80,185" fill="#FFFFFF" stroke="#3D5A75" stroke-width="2"/>
    <line x1="150" y1="190" x2="150" y2="222" stroke="#3D5A75" stroke-width="2"/>
    <path d="M 185,200 C 182,195 178,197 185,203 C 192,197 188,195 185,200 Z" fill="#7BA9C6"/>
    <path d="M 150,80 C 110,80 110,140 150,140 C 190,140 190,80 150,80 Z" fill="#FDDFCE"/>
    <ellipse cx="132" cy="115" rx="5" ry="3.5" fill="#F4A69D" opacity="0.6"/>
    <ellipse cx="168" cy="115" rx="5" ry="3.5" fill="#F4A69D" opacity="0.6"/>
    <path d="M 128,105 Q 132,100 136,105" fill="none" stroke="#3D5A75" stroke-width="2"/>
    <path d="M 164,105 Q 168,100 172,105" fill="none" stroke="#3D5A75" stroke-width="2"/>
    <path d="M 146,122 Q 150,126 154,122" fill="none" stroke="#3D5A75" stroke-width="2"/>
    <path d="M 150,60 C 100,55 90,110 100,160 C 110,180 120,140 130,110 C 140,80 160,80 170,110 C 180,140 190,180 200,160 C 210,110 200,55 150,60 Z" fill="#203348" stroke="#162434" stroke-width="2"/>
    <path d="M 105,195 C 105,150 140,142 150,142 C 160,142 195,150 195,195 Z" fill="#9CCFE8" stroke="#3D5A75" stroke-width="2"/>
    `
  },
  {
    num: 3,
    lines: ['¿Qué tema', 'ocupa más', 'tu mente hoy?'],
    svgContent: `
    <!-- Thought cloud with items -->
    <path d="M 80,80 C 60,70 60,40 85,35 C 95,15 130,15 145,30 C 165,15 200,20 210,40 C 230,45 235,75 220,90 C 235,110 215,135 190,130 C 175,145 140,145 125,130 C 100,140 75,120 80,95 Z" fill="#EAF3FA" stroke="#3D5A75" stroke-width="2"/>
    <circle cx="110" cy="148" r="5" fill="#EAF3FA" stroke="#3D5A75" stroke-width="2"/>
    <circle cx="102" cy="158" r="3.5" fill="#EAF3FA" stroke="#3D5A75" stroke-width="2"/>
    <text x="120" y="65" font-family="sans-serif" font-size="22" font-weight="bold" fill="#3D5A75">?</text>
    <circle cx="180" cy="50" r="10" fill="#7BA9C6"/>
    <ellipse cx="180" cy="50" rx="16" ry="4" fill="none" stroke="#3D5A75" stroke-width="1.5" transform="rotate(-20 180 50)"/>
    <rect x="95" y="80" width="22" height="16" rx="2" fill="#FFFFFF" stroke="#3D5A75" stroke-width="1.5"/>
    <line x1="106" y1="80" x2="106" y2="96" stroke="#3D5A75" stroke-width="1.5"/>
    <path d="M 175,90 C 170,85 170,75 180,75 C 190,75 190,85 185,90 L 185,96 L 175,96 Z" fill="#F8C068" stroke="#3D5A75" stroke-width="1.5"/>
    <path d="M 150,150 C 120,150 120,200 150,200 C 180,200 180,150 150,150 Z" fill="#FDDFCE"/>
    <ellipse cx="138" cy="178" rx="5" ry="3.5" fill="#F4A69D" opacity="0.6"/>
    <ellipse cx="162" cy="178" rx="5" ry="3.5" fill="#F4A69D" opacity="0.6"/>
    <circle cx="140" cy="172" r="2" fill="#3D5A75"/>
    <circle cx="160" cy="172" r="2" fill="#3D5A75"/>
    <path d="M 146,188 Q 150,192 154,188" fill="none" stroke="#3D5A75" stroke-width="2"/>
    <path d="M 150,135 C 115,130 110,165 120,190 C 115,160 135,140 150,145 C 165,140 185,160 180,190 C 190,165 185,130 150,135 Z" fill="#203348" stroke="#162434" stroke-width="2"/>
    <path d="M 115,240 C 115,205 140,200 150,200 C 160,200 185,205 185,240 Z" fill="#68A5C7" stroke="#3D5A75" stroke-width="2"/>
    `
  },
  {
    num: 4,
    lines: ['¿Qué necesitás', 'expresar en', 'este momento?'],
    svgContent: `
    <!-- Person with hand on heart -->
    <path d="M 190,70 C 190,58 205,50 218,60 C 230,50 245,58 245,70 C 245,82 218,100 218,100 C 218,100 190,82 190,70 Z" fill="#FFFFFF" stroke="#3D5A75" stroke-width="2"/>
    <path d="M 198,90 L 190,96 L 198,84" fill="#FFFFFF" stroke="#3D5A75" stroke-width="2"/>
    <path d="M 218,65 C 214,60 206,63 212,71 L 218,77 L 224,71 C 230,63 222,60 218,65 Z" fill="#4B779A"/>
    <path d="M 150,90 C 120,90 120,140 150,140 C 180,140 180,90 150,90 Z" fill="#FDDFCE"/>
    <ellipse cx="138" cy="118" rx="5" ry="3.5" fill="#F4A69D" opacity="0.6"/>
    <ellipse cx="162" cy="118" rx="5" ry="3.5" fill="#F4A69D" opacity="0.6"/>
    <path d="M 132,108 Q 138,103 142,108" fill="none" stroke="#3D5A75" stroke-width="2"/>
    <path d="M 158,108 Q 162,103 168,108" fill="none" stroke="#3D5A75" stroke-width="2"/>
    <path d="M 146,124 Q 150,128 154,124" fill="none" stroke="#3D5A75" stroke-width="2"/>
    <path d="M 150,70 C 100,65 90,110 95,180 C 105,210 125,170 130,120 C 140,90 160,90 170,120 C 175,170 195,210 205,180 C 210,110 200,65 150,70 Z" fill="#203348" stroke="#162434" stroke-width="2"/>
    <path d="M 110,195 C 110,150 140,142 150,142 C 160,142 190,150 190,195 Z" fill="#A8D0E6" stroke="#3D5A75" stroke-width="2"/>
    <path d="M 190,180 C 210,175 220,160 225,155" fill="none" stroke="#FDDFCE" stroke-width="8" stroke-linecap="round"/>
    <path d="M 190,180 C 210,175 220,160 225,155" fill="none" stroke="#3D5A75" stroke-width="1.5" stroke-linecap="round"/>
    `
  },
  {
    num: 5,
    lines: ['¿Qué tendría', 'que pasar para', 'que esta sesión', 'te resulte útil?'],
    svgContent: `
    <!-- Person pointing at checklist clipboard -->
    <rect x="180" y="80" width="55" height="75" rx="4" fill="#FFFFFF" stroke="#3D5A75" stroke-width="2"/>
    <rect x="195" y="74" width="25" height="10" rx="2" fill="#68A5C7" stroke="#3D5A75" stroke-width="1.5"/>
    <path d="M 207,98 C 204,94 200,96 207,102 C 214,96 210,94 207,98 Z" fill="#4B779A"/>
    <line x1="200" y1="112" x2="225" y2="112" stroke="#3D5A75" stroke-width="1.5"/>
    <line x1="200" y1="124" x2="225" y2="124" stroke="#3D5A75" stroke-width="1.5"/>
    <line x1="200" y1="136" x2="225" y2="136" stroke="#3D5A75" stroke-width="1.5"/>
    <polyline points="188,110 192,114 197,108" fill="none" stroke="#4B779A" stroke-width="2"/>
    <polyline points="188,122 192,126 197,120" fill="none" stroke="#4B779A" stroke-width="2"/>
    
    <path d="M 110,110 C 80,110 80,160 110,160 C 140,160 140,110 110,110 Z" fill="#FDDFCE"/>
    <ellipse cx="98" cy="138" rx="5" ry="3.5" fill="#F4A69D" opacity="0.6"/>
    <ellipse cx="122" cy="138" rx="5" ry="3.5" fill="#F4A69D" opacity="0.6"/>
    <circle cx="100" cy="132" r="2" fill="#3D5A75"/>
    <circle cx="120" cy="132" r="2" fill="#3D5A75"/>
    <path d="M 106,148 Q 110,152 114,148" fill="none" stroke="#3D5A75" stroke-width="2"/>
    <path d="M 110,75 C 75,70 70,110 80,140 C 90,100 130,100 140,140 C 150,110 145,70 110,75 Z" fill="#203348" stroke="#162434" stroke-width="2"/>
    <circle cx="110" cy="70" r="18" fill="#203348" stroke="#162434" stroke-width="2"/>
    <path d="M 75,220 C 75,175 100,170 110,170 C 120,170 145,175 145,220 Z" fill="#9CCFE8" stroke="#3D5A75" stroke-width="2"/>
    `
  },
  {
    num: 6,
    lines: ['¿Por dónde', 'te gustaría', 'comenzar?'],
    svgContent: `
    <!-- Person looking at 3 diverging path arrows on ground -->
    <path d="M 150,210 L 150,120" stroke="#7BA9C6" stroke-width="12" stroke-linecap="round"/>
    <polygon points="150,100 135,125 165,125" fill="#7BA9C6"/>
    
    <path d="M 150,210 Q 110,180 80,140" fill="none" stroke="#A2CCE3" stroke-width="8" stroke-dasharray="6,4"/>
    <polygon points="70,130 70,150 90,140" fill="#A2CCE3"/>

    <path d="M 150,210 Q 190,180 220,140" fill="none" stroke="#E6CE9F" stroke-width="8" stroke-dasharray="6,4"/>
    <polygon points="230,130 210,140 230,150" fill="#E6CE9F"/>

    <path d="M 50,150 C 45,140 55,140 50,150 Z" fill="#68A5C7"/>
    <path d="M 240,150 C 235,140 245,140 240,150 Z" fill="#68A5C7"/>

    <path d="M 100,150 C 80,150 80,190 100,190 C 120,190 120,150 100,150 Z" fill="#FDDFCE"/>
    <path d="M 100,135 C 80,130 75,155 85,180 C 90,155 110,155 115,180 C 125,155 120,130 100,135 Z" fill="#203348" stroke="#162434" stroke-width="2"/>
    <path d="M 75,240 C 75,200 90,195 100,195 C 110,195 125,200 125,240 Z" fill="#68A5C7" stroke="#3D5A75" stroke-width="2"/>
    `
  },
  {
    num: 7,
    lines: ['¿Qué fue lo más', 'importante que', 'te ocurrió esta', 'semana?'],
    svgContent: `
    <!-- Person with calendar pointing at marked date -->
    <rect x="150" y="80" width="95" height="85" rx="6" fill="#FFFFFF" stroke="#3D5A75" stroke-width="2"/>
    <path d="M 150,80 L 245,80" stroke="#3D5A75" stroke-width="6"/>
    <text x="160" y="98" font-family="sans-serif" font-size="9" font-weight="bold" fill="#3D5A75">L M M J V S D</text>
    <line x1="150" y1="105" x2="245" y2="105" stroke="#3D5A75" stroke-width="1"/>
    <rect x="180" y="120" width="20" height="18" fill="#9CCFE8" rx="2"/>
    <path d="M 190,126 C 187,123 183,125 190,131 C 197,125 193,123 190,126 Z" fill="#FFFFFF"/>

    <path d="M 90,110 C 60,110 60,160 90,160 C 120,160 120,110 90,110 Z" fill="#FDDFCE"/>
    <ellipse cx="78" cy="138" rx="5" ry="3.5" fill="#F4A69D" opacity="0.6"/>
    <ellipse cx="102" cy="138" rx="5" ry="3.5" fill="#F4A69D" opacity="0.6"/>
    <circle cx="80" cy="132" r="2" fill="#3D5A75"/>
    <circle cx="100" cy="132" r="2" fill="#3D5A75"/>
    <path d="M 86,148 Q 90,152 94,148" fill="none" stroke="#3D5A75" stroke-width="2"/>
    <path d="M 90,75 C 55,70 50,110 60,140 C 70,100 110,100 120,140 C 130,110 125,70 90,75 Z" fill="#203348" stroke="#162434" stroke-width="2"/>
    <circle cx="90" cy="70" r="18" fill="#203348" stroke="#162434" stroke-width="2"/>
    <path d="M 55,220 C 55,175 80,170 90,170 C 100,170 125,175 125,220 Z" fill="#9CCFE8" stroke="#3D5A75" stroke-width="2"/>
    `
  },
  {
    num: 8,
    lines: ['¿Hay algo que', 'te esté costando', 'decir?'],
    svgContent: `
    <!-- Hesitant expression with "..." speech bubble -->
    <path d="M 190,60 C 190,45 210,35 225,50 C 240,35 260,45 260,60 C 260,75 225,95 225,95 C 225,95 190,75 190,60 Z" fill="#FFFFFF" stroke="#3D5A75" stroke-width="2"/>
    <circle cx="215" cy="62" r="2.5" fill="#3D5A75"/>
    <circle cx="225" cy="62" r="2.5" fill="#3D5A75"/>
    <circle cx="235" cy="62" r="2.5" fill="#3D5A75"/>
    <path d="M 225,74 C 222,72 218,73 225,78 C 232,73 228,72 225,74 Z" fill="#4B779A"/>

    <path d="M 140,110 C 110,110 110,160 140,160 C 170,160 170,110 140,110 Z" fill="#FDDFCE"/>
    <ellipse cx="128" cy="138" rx="5" ry="3.5" fill="#F4A69D" opacity="0.6"/>
    <ellipse cx="152" cy="138" rx="5" ry="3.5" fill="#F4A69D" opacity="0.6"/>
    <path d="M 122,130 Q 128,125 132,130" fill="none" stroke="#3D5A75" stroke-width="2"/>
    <path d="M 148,130 Q 152,125 158,130" fill="none" stroke="#3D5A75" stroke-width="2"/>
    <path d="M 136,148 Q 140,144 144,148" fill="none" stroke="#3D5A75" stroke-width="2"/>
    <path d="M 140,75 C 90,70 80,120 90,190 C 105,210 120,160 125,120 C 135,90 145,90 155,120 C 160,160 175,210 190,190 C 200,120 190,70 140,75 Z" fill="#203348" stroke="#162434" stroke-width="2"/>
    <path d="M 105,220 C 105,175 130,170 140,170 C 150,170 175,175 175,220 Z" fill="#A8D0E6" stroke="#3D5A75" stroke-width="2"/>
    `
  },
  {
    num: 9,
    lines: ['¿Qué necesitás', 'que yo comprenda', 'de vos hoy?'],
    svgContent: `
    <!-- Two people facing each other in conversation -->
    <path d="M 135,70 C 135,55 155,45 170,60 C 185,45 205,55 205,70 C 205,85 170,105 170,105 C 170,105 135,85 135,70 Z" fill="#FFFFFF" stroke="#3D5A75" stroke-width="2"/>
    <path d="M 170,65 C 165,58 155,62 163,72 L 170,80 L 177,72 C 185,62 175,58 170,65 Z" fill="#4B779A"/>

    <!-- Left Person -->
    <path d="M 90,110 C 65,110 65,150 90,150 C 115,150 115,110 90,110 Z" fill="#FDDFCE"/>
    <circle cx="82" cy="130" r="2" fill="#3D5A75"/>
    <circle cx="98" cy="130" r="2" fill="#3D5A75"/>
    <path d="M 86,140 Q 90,144 94,140" fill="none" stroke="#3D5A75" stroke-width="2"/>
    <path d="M 90,80 C 60,75 55,110 65,140 C 75,100 105,100 115,140 C 125,110 120,75 90,80 Z" fill="#203348" stroke="#162434" stroke-width="2"/>
    <circle cx="90" cy="75" r="16" fill="#203348" stroke="#162434" stroke-width="2"/>
    <path d="M 60,210 C 60,170 80,165 90,165 C 100,165 120,170 120,210 Z" fill="#9CCFE8" stroke="#3D5A75" stroke-width="2"/>

    <!-- Right Person -->
    <path d="M 210,115 C 185,115 185,155 210,155 C 235,155 235,115 210,115 Z" fill="#FDDFCE"/>
    <circle cx="202" cy="135" r="2" fill="#3D5A75"/>
    <circle cx="218" cy="135" r="2" fill="#3D5A75"/>
    <path d="M 206,145 Q 210,149 214,145" fill="none" stroke="#3D5A75" stroke-width="2"/>
    <path d="M 210,85 C 170,80 160,120 170,180 C 185,200 200,150 205,120 C 215,90 225,90 235,120 C 240,150 250,200 255,180 C 260,120 250,80 210,85 Z" fill="#9A7B68" stroke="#5D4537" stroke-width="2"/>
    <path d="M 180,210 C 180,170 200,165 210,165 C 220,165 240,170 240,210 Z" fill="#68A5C7" stroke="#3D5A75" stroke-width="2"/>
    `
  },
  {
    num: 10,
    lines: ['¿Con qué emoción', 'llegás a esta', 'conversación?'],
    svgContent: `
    <!-- Person thinking of emotion icons -->
    <path d="M 160,60 C 140,50 140,25 165,20 C 175,5 210,5 225,20 C 245,10 275,20 270,40 C 285,55 270,80 250,85 C 235,100 195,95 185,80 C 160,85 145,75 160,60 Z" fill="#EAF3FA" stroke="#3D5A75" stroke-width="2"/>
    
    <!-- Face icons inside bubble -->
    <circle cx="180" cy="40" r="10" fill="#FAD088"/>
    <circle cx="177" cy="37" r="1" fill="#3D5A75"/>
    <circle cx="183" cy="37" r="1" fill="#3D5A75"/>
    <path d="M 177,43 Q 180,46 183,43" fill="none" stroke="#3D5A75" stroke-width="1"/>

    <circle cx="210" cy="40" r="10" fill="#9CCFE8"/>
    <circle cx="207" cy="37" r="1" fill="#3D5A75"/>
    <circle cx="213" cy="37" r="1" fill="#3D5A75"/>
    <path d="M 207,44 Q 210,41 213,44" fill="none" stroke="#3D5A75" stroke-width="1"/>

    <circle cx="240" cy="40" r="10" fill="#D2B5E2"/>
    <circle cx="237" cy="37" r="1" fill="#3D5A75"/>
    <circle cx="243" cy="37" r="1" fill="#3D5A75"/>
    <line x1="237" y1="44" x2="243" y2="44" stroke="#3D5A75" stroke-width="1"/>

    <circle cx="195" cy="65" r="10" fill="#F4A69D"/>
    <circle cx="192" cy="62" r="1" fill="#3D5A75"/>
    <circle cx="198" cy="62" r="1" fill="#3D5A75"/>
    <path d="M 192,68 Q 195,65 198,68" fill="none" stroke="#3D5A75" stroke-width="1"/>

    <path d="M 225,60 C 222,57 218,59 225,64 C 232,59 228,57 225,60 Z" fill="#4B779A"/>

    <path d="M 120,115 C 90,115 90,165 120,165 C 150,165 150,115 120,115 Z" fill="#FDDFCE"/>
    <path d="M 120,80 C 70,75 60,120 70,190 C 85,210 100,160 105,120 C 115,90 125,90 135,120 C 140,160 155,210 170,190 C 180,120 170,70 120,80 Z" fill="#203348" stroke="#162434" stroke-width="2"/>
    <path d="M 85,225 C 85,180 110,175 120,175 C 130,175 155,180 155,225 Z" fill="#9CCFE8" stroke="#3D5A75" stroke-width="2"/>
    `
  },
  {
    num: 11,
    lines: ['¿Qué situación', 'necesita hoy tu', 'atención?'],
    svgContent: `
    <!-- Exclamation point over geometric shapes and plant -->
    <rect x="175" y="110" width="30" height="30" fill="#FAD088" stroke="#3D5A75" stroke-width="2"/>
    <circle cx="160" cy="125" r="12" fill="#68A5C7" stroke="#3D5A75" stroke-width="2"/>
    <circle cx="205" cy="70" r="22" fill="#FAF4EA" stroke="#F8C068" stroke-width="2"/>
    <text x="205" y="78" text-anchor="middle" font-family="sans-serif" font-size="26" font-weight="bold" fill="#3D5A75">!</text>

    <!-- Person -->
    <path d="M 90,110 C 60,110 60,160 90,160 C 120,160 120,110 90,110 Z" fill="#FDDFCE"/>
    <ellipse cx="78" cy="138" rx="5" ry="3.5" fill="#F4A69D" opacity="0.6"/>
    <ellipse cx="102" cy="138" rx="5" ry="3.5" fill="#F4A69D" opacity="0.6"/>
    <circle cx="80" cy="132" r="2" fill="#3D5A75"/>
    <circle cx="100" cy="132" r="2" fill="#3D5A75"/>
    <path d="M 86,148 Q 90,152 94,148" fill="none" stroke="#3D5A75" stroke-width="2"/>
    <path d="M 90,75 C 55,70 50,110 60,140 C 70,100 110,100 120,140 C 130,110 125,70 90,75 Z" fill="#203348" stroke="#162434" stroke-width="2"/>
    <path d="M 55,220 C 55,175 80,170 90,170 C 100,170 125,175 125,220 Z" fill="#9CCFE8" stroke="#3D5A75" stroke-width="2"/>
    `
  },
  {
    num: 12,
    lines: ['¿Qué te', 'gustaría', 'comprender', 'mejor de vos?'],
    svgContent: `
    <!-- Mirror reflecting a heart -->
    <ellipse cx="200" cy="110" rx="22" ry="30" fill="#EAF3FA" stroke="#3D5A75" stroke-width="2"/>
    <path d="M 200,102 C 196,96 188,99 194,108 L 200,115 L 206,108 C 212,99 204,96 200,102 Z" fill="#4B779A"/>
    <line x1="200" y1="140" x2="190" y2="180" stroke="#3D5A75" stroke-width="4" stroke-linecap="round"/>

    <!-- Person holding mirror -->
    <path d="M 120,110 C 90,110 90,160 120,160 C 150,160 150,110 120,110 Z" fill="#FDDFCE"/>
    <ellipse cx="108" cy="138" rx="5" ry="3.5" fill="#F4A69D" opacity="0.6"/>
    <ellipse cx="132" cy="138" rx="5" ry="3.5" fill="#F4A69D" opacity="0.6"/>
    <path d="M 116,148 Q 120,152 124,148" fill="none" stroke="#3D5A75" stroke-width="2"/>
    <path d="M 120,75 C 70,70 60,120 70,190 C 85,210 100,160 105,120 C 115,90 125,90 135,120 C 140,160 155,210 170,190 C 180,120 170,70 120,75 Z" fill="#203348" stroke="#162434" stroke-width="2"/>
    <path d="M 85,220 C 85,175 110,170 120,170 C 130,170 155,175 155,220 Z" fill="#A8D0E6" stroke="#3D5A75" stroke-width="2"/>
    `
  },
  {
    num: 13,
    lines: ['Si este espacio', 'pudiera ayudarte', 'en algo hoy,', '¿qué elegirías?'],
    svgContent: `
    <!-- Three cards on table with hearts -->
    <ellipse cx="150" cy="220" rx="110" ry="8" fill="#E8DFD3"/>
    <rect x="70" y="185" width="30" height="20" rx="3" fill="#9CCFE8" stroke="#3D5A75" stroke-width="1.5"/>
    <path d="M 85,192 C 82,189 78,191 85,197 C 92,191 88,189 85,192 Z" fill="#4B779A"/>

    <rect x="110" y="185" width="30" height="20" rx="3" fill="#FAD088" stroke="#3D5A75" stroke-width="1.5"/>
    <path d="M 125,192 C 122,189 118,191 125,197 C 132,191 128,189 125,192 Z" fill="#4B779A"/>

    <rect x="150" y="185" width="30" height="20" rx="3" fill="#94C9A9" stroke="#3D5A75" stroke-width="1.5"/>
    <path d="M 165,192 C 162,189 158,191 165,197 C 172,191 168,189 165,192 Z" fill="#4B779A"/>

    <path d="M 190,105 C 190,90 210,80 225,95 C 240,80 260,90 260,105 C 260,120 225,140 225,140 C 225,140 190,120 190,105 Z" fill="#FFFFFF" stroke="#3D5A75" stroke-width="2"/>
    <path d="M 225,100 C 220,93 210,97 218,107 L 225,115 L 232,107 C 240,97 230,93 225,100 Z" fill="#4B779A"/>

    <path d="M 120,100 C 90,100 90,150 120,150 C 150,150 150,100 120,100 Z" fill="#FDDFCE"/>
    <path d="M 120,65 C 70,60 60,110 70,180 C 85,200 100,150 105,110 C 115,80 125,80 135,110 C 140,150 155,200 170,180 C 180,110 170,60 120,65 Z" fill="#3D3028" stroke="#251E19" stroke-width="2"/>
    <path d="M 85,210 C 85,165 110,160 120,160 C 130,160 155,165 155,210 Z" fill="#9CCFE8" stroke="#3D5A75" stroke-width="2"/>
    `
  },
  {
    num: 14,
    lines: ['¿Qué pregunta', 'te gustaría', 'poder responder', 'al finalizar?'],
    svgContent: `
    <!-- Open notebook with ?, checkmark, and star thought -->
    <polygon points="75,205 150,212 225,205 220,175 150,180 80,175" fill="#FFFFFF" stroke="#3D5A75" stroke-width="2"/>
    <line x1="150" y1="180" x2="150" y2="212" stroke="#3D5A75" stroke-width="2"/>
    <text x="110" y="198" font-family="sans-serif" font-size="18" font-weight="bold" fill="#3D5A75">?</text>
    <polyline points="180,192 185,198 193,188" fill="none" stroke="#4B779A" stroke-width="2"/>

    <path d="M 195,95 C 195,80 215,70 230,85 C 245,70 265,80 265,95 C 265,110 230,130 230,130 C 230,130 195,110 195,95 Z" fill="#FFFFFF" stroke="#3D5A75" stroke-width="2"/>
    <polygon points="230,85 233,92 240,92 235,97 237,104 230,100 223,104 225,97 220,92 227,92" fill="#F8C068"/>

    <path d="M 140,90 C 100,90 100,150 140,150 C 180,150 180,90 140,90 Z" fill="#FDDFCE"/>
    <path d="M 140,55 C 90,50 80,100 90,170 C 105,190 120,140 125,100 C 135,70 145,70 155,100 C 160,140 175,190 190,170 C 200,100 190,50 140,55 Z" fill="#203348" stroke="#162434" stroke-width="2"/>
    <circle cx="140" cy="50" r="18" fill="#203348" stroke="#162434" stroke-width="2"/>
    <path d="M 95,200 C 95,155 130,150 140,150 C 150,150 185,155 185,200 Z" fill="#68A5C7" stroke="#3D5A75" stroke-width="2"/>
    `
  },
  {
    num: 15,
    lines: ['¿Qué necesitás', 'dejar afuera', 'para poder estar', 'presente?'],
    svgContent: `
    <!-- Person putting dark clouds into a sack/bag -->
    <path d="M 210,160 C 200,140 250,140 240,160 C 255,170 250,200 230,200 C 210,200 200,170 210,160 Z" fill="#D0D8E0" stroke="#3D5A75" stroke-width="2"/>
    <!-- Dark cloud -->
    <path d="M 218,175 C 210,170 210,160 220,158 C 225,150 235,150 240,158 C 248,160 248,170 240,175 Z" fill="#788896"/>

    <path d="M 110,100 C 80,100 80,150 110,150 C 140,150 140,100 110,100 Z" fill="#FDDFCE"/>
    <path d="M 110,65 C 65,60 60,100 70,170 C 80,130 120,130 130,170 C 140,100 135,60 110,65 Z" fill="#3D3028" stroke="#251E19" stroke-width="2"/>
    <circle cx="110" cy="60" r="18" fill="#3D3028" stroke="#251E19" stroke-width="2"/>
    <path d="M 75,210 C 75,165 100,160 110,160 C 120,160 145,165 145,210 Z" fill="#9CCFE8" stroke="#3D5A75" stroke-width="2"/>
    `
  }
];

function generateSvgCard(card) {
  const padNum = String(card.num).padStart(2, '0');
  
  // Calculate text dy values
  const fontSizes = card.lines.length > 3 ? 26 : 28;
  const lineSpacing = card.lines.length > 3 ? 36 : 40;
  const startY = card.lines.length > 3 ? 180 : 195;

  const tspanElements = card.lines.map((line, idx) => {
    const dy = idx === 0 ? 0 : lineSpacing;
    const yPos = idx === 0 ? startY : undefined;
    return `    <tspan x="200" ${idx === 0 ? `y="${startY}"` : ''} dy="${dy}">${line}</tspan>`;
  }).join('\n');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600" width="100%" height="100%">
  <defs>
    <linearGradient id="cardBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFDF9"/>
      <stop offset="100%" stop-color="#FAF4EA"/>
    </linearGradient>
  </defs>

  <rect x="0" y="0" width="400" height="600" rx="32" ry="32" fill="#9CCFE8"/>
  <rect x="12" y="12" width="376" height="576" rx="22" ry="22" fill="url(#cardBg)"/>
  <rect x="22" y="22" width="356" height="556" rx="16" ry="16" fill="none" stroke="#A2CCE3" stroke-width="2" stroke-dasharray="7,5"/>

  <!-- Top Foliage Left -->
  <path d="M 60,65 C 45,50 65,30 80,45 C 90,55 75,75 60,65 Z" fill="none" stroke="#7BA9C6" stroke-width="2"/>
  <path d="M 60,65 C 50,45 35,50 45,60" fill="none" stroke="#7BA9C6" stroke-width="2"/>
  <path d="M 60,65 C 75,55 80,40 70,45" fill="none" stroke="#7BA9C6" stroke-width="2"/>
  
  <!-- Top Foliage Right -->
  <path d="M 340,65 C 355,50 335,30 320,45 C 310,55 325,75 340,65 Z" fill="none" stroke="#7BA9C6" stroke-width="2"/>
  <path d="M 340,65 C 350,45 365,50 355,60" fill="none" stroke="#7BA9C6" stroke-width="2"/>
  <path d="M 340,65 C 325,55 320,40 330,45" fill="none" stroke="#7BA9C6" stroke-width="2"/>

  <circle cx="190" cy="38" r="2.5" fill="#7BA9C6"/>
  <circle cx="200" cy="38" r="3.5" fill="#7BA9C6"/>
  <circle cx="210" cy="38" r="2.5" fill="#7BA9C6"/>
  <polygon points="65,115 67,120 72,120 68,123 70,128 65,125 60,128 62,123 58,120 63,120" fill="none" stroke="#7BA9C6" stroke-width="1.5"/>
  <polygon points="335,115 337,120 342,120 338,123 340,128 335,125 330,128 332,123 328,120 333,120" fill="none" stroke="#7BA9C6" stroke-width="1.5"/>

  <text x="200" y="100" text-anchor="middle" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="14" font-weight="700" letter-spacing="2.5" fill="#4B779A">ABRIR LA CONVERSACIÓN</text>

  <g transform="translate(150, 108)">
    <path d="M0,8 Q15,0 30,8 T60,8" fill="none" stroke="#7BA9C6" stroke-width="2"/>
    <path d="M100,8 Q85,0 70,8 T40,8" fill="none" stroke="#7BA9C6" stroke-width="2"/>
    <path d="M50,11 C47,7 43,10 50,15 C57,10 53,7 50,11 Z" fill="#7BA9C6"/>
  </g>

  <!-- Question Text -->
  <text text-anchor="middle" font-family="'Outfit', 'Plus Jakarta Sans', system-ui, sans-serif" font-size="${fontSizes}" font-weight="700" fill="#1C3854">
${tspanElements}
  </text>

  <!-- Illustration Area -->
  <g transform="translate(50, 310)">
${card.svgContent}
  </g>

  <!-- Bottom Leaf Ornament -->
  <path d="M 40,560 C 55,545 75,565 60,580 C 50,590 30,575 40,560 Z" fill="none" stroke="#7BA9C6" stroke-width="2"/>
  <path d="M 360,560 C 345,545 325,565 340,580 C 350,590 370,575 360,560 Z" fill="none" stroke="#7BA9C6" stroke-width="2"/>
  <path d="M 200,573 C 197,569 193,572 200,577 C 207,572 203,569 200,573 Z" fill="#7BA9C6"/>
</svg>`;
}

cardsData.forEach(card => {
  const padNum = String(card.num).padStart(2, '0');
  const filePath = path.join(outputDir, `card-${padNum}.svg`);
  const content = generateSvgCard(card);
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Generated ${filePath}`);
});
