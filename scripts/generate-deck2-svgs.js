import fs from 'fs';
import path from 'path';

const pubDir = path.join(process.cwd(), 'public', 'cards', '02-lo-que-sentis');
const distDir = path.join(process.cwd(), 'dist', 'cards', '02-lo-que-sentis');

[pubDir, distDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const cardsData = [
  {
    num: 1,
    lines: ['¿Cómo estás', 'sintiéndote hoy?'],
    svgContent: `
    <!-- Girl sitting with hands on heart -->
    <ellipse cx="150" cy="220" rx="90" ry="8" fill="#E8DFD3"/>
    <path d="M 150,140 C 120,140 120,195 150,195 C 180,195 180,140 150,140 Z" fill="#FAD4CD"/>
    <path d="M 150,75 C 115,75 115,135 150,135 C 185,135 185,75 150,75 Z" fill="#FDE3D8"/>
    <ellipse cx="135" cy="110" rx="5" ry="3.5" fill="#F4A69D" opacity="0.7"/>
    <ellipse cx="165" cy="110" rx="5" ry="3.5" fill="#F4A69D" opacity="0.7"/>
    <path d="M 130,102 Q 135,97 140,102" fill="none" stroke="#2C3E50" stroke-width="2" stroke-linecap="round"/>
    <path d="M 160,102 Q 165,97 170,102" fill="none" stroke="#2C3E50" stroke-width="2" stroke-linecap="round"/>
    <path d="M 146,118 Q 150,122 154,118" fill="none" stroke="#2C3E50" stroke-width="2" stroke-linecap="round"/>
    <path d="M 150,55 C 105,50 100,105 110,135 C 120,105 140,105 150,135 C 160,105 180,105 190,135 C 200,105 195,50 150,55 Z" fill="#3D2B1F" stroke="#2A1D14" stroke-width="2"/>
    <circle cx="150" cy="50" r="22" fill="#3D2B1F" stroke="#2A1D14" stroke-width="2"/>
    <path d="M 115,195 C 115,155 140,150 150,150 C 160,150 185,155 185,195 Z" fill="#F4A298" stroke="#D8786E" stroke-width="2"/>
    <path d="M 150,165 C 146,160 138,163 144,172 L 150,180 L 156,172 C 162,163 154,160 150,165 Z" fill="#E85D50"/>
    `
  },
  {
    num: 2,
    lines: ['¿Dónde sentís', 'esa emoción en', 'tu cuerpo?'],
    svgContent: `
    <!-- Body outline with glowing heart -->
    <ellipse cx="150" cy="225" rx="80" ry="8" fill="#E8DFD3"/>
    <path d="M 150,60 C 130,60 130,90 150,90 C 170,90 170,60 150,60 Z" fill="#FDE3D8" stroke="#E87A70" stroke-width="2"/>
    <path d="M 120,170 C 120,100 135,95 150,95 C 165,95 180,100 180,170 Z" fill="#FFF2EE" stroke="#E87A70" stroke-width="2"/>
    <path d="M 130,220 L 140,170 L 160,170 L 170,220" fill="none" stroke="#E87A70" stroke-width="2"/>
    <circle cx="150" cy="130" r="25" fill="#FFE5E2" opacity="0.6"/>
    <path d="M 150,122 C 144,115 134,119 142,130 L 150,140 L 158,130 C 166,119 156,115 150,122 Z" fill="#E85D50"/>
    <path d="M 120,115 L 105,125" stroke="#E87A70" stroke-width="2" stroke-linecap="round"/>
    <path d="M 180,115 L 195,125" stroke="#E87A70" stroke-width="2" stroke-linecap="round"/>
    `
  },
  {
    num: 3,
    lines: ['¿Qué emoción está', 'más presente en', 'vos ahora?'],
    svgContent: `
    <!-- Girl looking at emotion bubbles -->
    <circle cx="100" cy="70" r="18" fill="#FAD088" opacity="0.9"/>
    <path d="M 100,64 C 96,59 88,62 94,70 L 100,77 L 106,70 C 112,62 104,59 100,64 Z" fill="#E85D50"/>
    <circle cx="150" cy="50" r="22" fill="#9CCFE8" opacity="0.9"/>
    <path d="M 142,50 C 137,45 137,35 147,33 C 152,25 162,25 167,33 C 175,35 175,45 167,50 Z" fill="#788896"/>
    <circle cx="200" cy="75" r="16" fill="#F4A298" opacity="0.9"/>
    <polygon points="200,67 203,74 210,74 205,78 207,85 200,81 193,85 195,78 190,74 197,74" fill="#FFFFFF"/>
    
    <path d="M 150,135 C 115,135 115,190 150,190 C 185,190 185,135 150,135 Z" fill="#FDE3D8"/>
    <ellipse cx="135" cy="160" rx="5" ry="3.5" fill="#F4A69D" opacity="0.7"/>
    <ellipse cx="165" cy="160" rx="5" ry="3.5" fill="#F4A69D" opacity="0.7"/>
    <circle cx="138" cy="154" r="2.5" fill="#2C3E50"/>
    <circle cx="162" cy="154" r="2.5" fill="#2C3E50"/>
    <path d="M 146,170 Q 150,174 154,170" fill="none" stroke="#2C3E50" stroke-width="2" stroke-linecap="round"/>
    <path d="M 150,115 C 105,110 100,160 110,190 C 120,160 140,160 150,190 C 160,160 180,160 190,190 C 200,160 195,110 150,115 Z" fill="#3D2B1F" stroke="#2A1D14" stroke-width="2"/>
    <circle cx="150" cy="110" r="22" fill="#3D2B1F" stroke="#2A1D14" stroke-width="2"/>
    `
  },
  {
    num: 4,
    lines: ['¿Qué intensidad tiene', 'esta emoción del', '0 al 10?'],
    svgContent: `
    <!-- Intensity scale bar with heart marker -->
    <rect x="30" y="110" width="240" height="24" rx="12" fill="#FFF2EE" stroke="#E87A70" stroke-width="2"/>
    <rect x="30" y="110" width="170" height="24" rx="12" fill="#F4A298"/>
    <text x="40" y="100" font-family="sans-serif" font-size="14" font-weight="bold" fill="#E87A70">0</text>
    <text x="250" y="100" font-family="sans-serif" font-size="14" font-weight="bold" fill="#E87A70">10</text>
    <circle cx="200" cy="122" r="18" fill="#FFFFFF" stroke="#E87A70" stroke-width="2"/>
    <path d="M 200,116 C 196,111 188,114 194,123 L 200,130 L 206,123 C 212,114 204,111 200,116 Z" fill="#E85D50"/>

    <path d="M 150,150 C 120,150 120,195 150,195 C 180,195 180,150 150,150 Z" fill="#FDE3D8"/>
    <path d="M 150,135 C 115,130 110,170 120,195 C 130,175 170,175 180,195 C 190,170 185,130 150,135 Z" fill="#3D2B1F" stroke="#2A1D14" stroke-width="2"/>
    `
  },
  {
    num: 5,
    lines: ['¿Qué situación', 'despertó esta', 'emoción?'],
    svgContent: `
    <!-- Thought bubble with spark -->
    <path d="M 110,60 C 90,50 90,25 115,20 C 125,5 160,5 175,20 C 195,10 225,20 220,40 C 235,55 220,80 200,85 C 185,100 145,95 135,80 C 110,85 95,75 110,60 Z" fill="#FFF2EE" stroke="#E87A70" stroke-width="2"/>
    <polygon points="170,30 174,42 186,46 174,50 170,62 166,50 154,46 166,42" fill="#F8C068"/>
    <circle cx="120" cy="105" r="5" fill="#FFF2EE" stroke="#E87A70" stroke-width="2"/>

    <path d="M 150,135 C 115,135 115,190 150,190 C 185,190 185,135 150,135 Z" fill="#FDE3D8"/>
    <ellipse cx="135" cy="160" rx="5" ry="3.5" fill="#F4A69D" opacity="0.7"/>
    <ellipse cx="165" cy="160" rx="5" ry="3.5" fill="#F4A69D" opacity="0.7"/>
    <circle cx="138" cy="154" r="2.5" fill="#2C3E50"/>
    <circle cx="162" cy="154" r="2.5" fill="#2C3E50"/>
    <path d="M 146,170 Q 150,174 154,170" fill="none" stroke="#2C3E50" stroke-width="2" stroke-linecap="round"/>
    <path d="M 150,115 C 105,110 100,160 110,190 C 120,160 140,160 150,190 C 160,160 180,160 190,190 C 200,160 195,110 150,115 Z" fill="#3D2B1F" stroke="#2A1D14" stroke-width="2"/>
    `
  },
  {
    num: 6,
    lines: ['¿Qué nombre le', 'pondrías a lo', 'que sentís?'],
    svgContent: `
    <!-- Girl holding tag/label with heart -->
    <rect x="110" y="80" width="80" height="45" rx="6" fill="#FFFFFF" stroke="#E87A70" stroke-width="2"/>
    <circle cx="122" cy="102.5" r="4" fill="none" stroke="#E87A70" stroke-width="1.5"/>
    <path d="M 155,95 C 151,90 143,93 149,102 L 155,110 L 161,102 C 167,93 159,90 155,95 Z" fill="#E85D50"/>

    <path d="M 150,145 C 120,145 120,195 150,195 C 180,195 180,145 150,145 Z" fill="#FDE3D8"/>
    <ellipse cx="135" cy="168" rx="5" ry="3.5" fill="#F4A69D" opacity="0.7"/>
    <ellipse cx="165" cy="168" rx="5" ry="3.5" fill="#F4A69D" opacity="0.7"/>
    <path d="M 130,160 Q 135,155 140,160" fill="none" stroke="#2C3E50" stroke-width="2"/>
    <path d="M 160,160 Q 165,155 170,160" fill="none" stroke="#2C3E50" stroke-width="2"/>
    <path d="M 146,178 Q 150,182 154,178" fill="none" stroke="#2C3E50" stroke-width="2"/>
    <path d="M 150,130 C 105,125 100,170 110,200 C 120,170 140,170 150,200 C 160,170 180,170 190,200 C 200,170 195,125 150,130 Z" fill="#3D2B1F" stroke="#2A1D14" stroke-width="2"/>
    `
  },
  {
    num: 7,
    lines: ['¿Qué necesitás', 'cuando te sentís', 'así?'],
    svgContent: `
    <!-- Girl kneeling, touching blanket with heart pillow, candle, mug -->
    <ellipse cx="150" cy="225" rx="100" ry="8" fill="#E8DFD3"/>
    
    <!-- Blanket & Pillow -->
    <path d="M 175,190 Q 210,160 235,190 Q 240,220 185,215 Z" fill="#F4A298" stroke="#D8786E" stroke-width="1.5"/>
    <path d="M 195,178 C 190,172 180,175 187,184 L 195,192 L 203,184 C 210,175 200,172 195,178 Z" fill="#E85D50"/>

    <!-- Candle & Mug -->
    <rect x="145" y="195" width="20" height="22" rx="3" fill="#FFFFFF" stroke="#E87A70" stroke-width="1.5"/>
    <path d="M 155,195 L 155,190" stroke="#2C3E50" stroke-width="1.5"/>
    <path d="M 155,190 C 151,183 159,183 155,190 Z" fill="#F8C068"/>
    
    <path d="M 170,202 C 165,202 165,220 170,220 Z" fill="none" stroke="#E87A70" stroke-width="1.5"/>
    <rect x="157" y="200" width="18" height="20" rx="4" fill="#F4A298" stroke="#D8786E" stroke-width="1.5"/>
    <path d="M 166,206 C 164,203 160,204 163,209 L 166,213 L 169,209 C 172,204 168,203 166,206 Z" fill="#FFFFFF"/>

    <!-- Kneeling Girl -->
    <path d="M 80,185 C 70,185 65,220 100,220 L 125,220 C 125,200 110,195 80,185 Z" fill="#FAF0DC" stroke="#D8C6A8" stroke-width="1.5"/>
    <path d="M 85,160 C 85,130 110,125 125,125 C 145,125 180,150 185,185 C 150,185 130,170 85,160 Z" fill="#F4A298" stroke="#D8786E" stroke-width="1.5"/>
    <path d="M 125,100 C 100,100 100,135 125,135 C 150,135 150,100 125,100 Z" fill="#FDE3D8"/>
    <ellipse cx="115" cy="118" rx="4" ry="3" fill="#F4A69D" opacity="0.7"/>
    <ellipse cx="138" cy="118" rx="4" ry="3" fill="#F4A69D" opacity="0.7"/>
    <path d="M 112,112 Q 116,108 120,112" fill="none" stroke="#2C3E50" stroke-width="2"/>
    <path d="M 132,112 Q 136,108 140,112" fill="none" stroke="#2C3E50" stroke-width="2"/>
    <path d="M 124,124 Q 128,127 132,124" fill="none" stroke="#2C3E50" stroke-width="1.5"/>
    <path d="M 125,80 C 95,75 90,110 100,140 C 110,115 125,115 135,140 C 145,115 155,115 160,140 C 165,110 155,75 125,80 Z" fill="#3D2B1F" stroke="#2A1D14" stroke-width="2"/>
    <circle cx="125" cy="75" r="18" fill="#3D2B1F" stroke="#2A1D14" stroke-width="2"/>
    `
  },
  {
    num: 8,
    lines: ['¿Qué podría', 'estar queriendo', 'mostrarte esta', 'emoción?'],
    svgContent: `
    <!-- Girl sitting by plant looking at glowing heart speech bubble -->
    <ellipse cx="150" cy="225" rx="90" ry="8" fill="#E8DFD3"/>

    <!-- Potted Plant -->
    <rect x="55" y="195" width="22" height="25" rx="3" fill="#FFFFFF" stroke="#E87A70" stroke-width="1.5"/>
    <path d="M 66,204 C 64,201 60,202 63,207 L 66,211 L 69,207 C 72,202 68,201 66,204 Z" fill="#E85D50"/>
    <path d="M 66,195 L 66,160" stroke="#7BA9C6" stroke-width="1.5"/>
    <path d="M 66,180 C 50,175 55,160 66,168" fill="#F4A298" stroke="#D8786E" stroke-width="1.5"/>
    <path d="M 66,170 C 82,165 77,150 66,158" fill="#F4A298" stroke="#D8786E" stroke-width="1.5"/>

    <!-- Sun Speech Bubble with Heart -->
    <circle cx="205" cy="115" r="28" fill="#FFF2EE" stroke="#E87A70" stroke-width="2"/>
    <path d="M 185,130 L 175,138 L 192,136" fill="#FFF2EE" stroke="#E87A70" stroke-width="1.5"/>
    <path d="M 205,103 C 197,94 184,98 194,112 L 205,124 L 216,112 C 226,98 213,94 205,103 Z" fill="#E85D50"/>
    
    <!-- Rays -->
    <line x1="205" y1="80" x2="205" y2="74" stroke="#E87A70" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="238" y1="115" x2="244" y2="115" stroke="#E87A70" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="228" y1="92" x2="233" y2="87" stroke="#E87A70" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="182" y1="92" x2="177" y2="87" stroke="#E87A70" stroke-width="1.5" stroke-linecap="round"/>

    <!-- Girl -->
    <path d="M 110,180 C 110,150 135,145 150,145 C 165,145 185,150 185,180 Z" fill="#F4A298" stroke="#D8786E" stroke-width="1.5"/>
    <path d="M 135,110 C 110,110 110,145 135,145 C 160,145 160,110 135,110 Z" fill="#FDE3D8"/>
    <ellipse cx="122" cy="128" rx="4" ry="3" fill="#F4A69D" opacity="0.7"/>
    <ellipse cx="148" cy="128" rx="4" ry="3" fill="#F4A69D" opacity="0.7"/>
    <circle cx="125" cy="122" r="2.5" fill="#2C3E50"/>
    <circle cx="145" cy="122" r="2.5" fill="#2C3E50"/>
    <path d="M 132,134 Q 136,138 140,134" fill="none" stroke="#2C3E50" stroke-width="1.5"/>
    <path d="M 135,90 C 105,85 100,120 110,150 C 120,125 135,125 145,150 C 155,125 165,125 170,150 C 175,120 165,85 135,90 Z" fill="#3D2B1F" stroke="#2A1D14" stroke-width="2"/>
    <circle cx="135" cy="85" r="18" fill="#3D2B1F" stroke="#2A1D14" stroke-width="2"/>
    `
  },
  {
    num: 9,
    lines: ['¿Qué emoción', 'intentás evitar?'],
    svgContent: `
    <!-- Girl pushing away gloomy raincloud -->
    <ellipse cx="150" cy="225" rx="90" ry="8" fill="#E8DFD3"/>

    <!-- Gloomy Raincloud -->
    <path d="M 65,150 C 50,140 50,120 65,115 C 75,95 105,95 115,110 C 130,100 145,110 140,125 C 150,135 140,155 125,155 C 110,165 80,165 65,150 Z" fill="#C2C9D1" stroke="#788896" stroke-width="1.5"/>
    <!-- Sad face on cloud -->
    <circle cx="85" cy="130" r="2" fill="#2C3E50"/>
    <circle cx="105" cy="130" r="2" fill="#2C3E50"/>
    <path d="M 90,142 Q 95,138 100,142" fill="none" stroke="#2C3E50" stroke-width="1.5"/>
    <!-- Raindrops & Lightning -->
    <path d="M 80,165 L 77,173" stroke="#788896" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M 95,168 L 92,176" stroke="#788896" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M 110,165 L 107,173" stroke="#788896" stroke-width="1.5" stroke-linecap="round"/>
    <polygon points="120,130 115,140 122,140 117,150" fill="#F8C068"/>

    <!-- Girl Pushing Away -->
    <path d="M 160,180 C 160,150 185,145 200,145 C 215,145 235,150 235,180 Z" fill="#F4A298" stroke="#D8786E" stroke-width="1.5"/>
    <!-- Arms raised in push gesture -->
    <path d="M 160,160 L 142,145 L 142,160" fill="none" stroke="#FDE3D8" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M 160,160 L 142,145 L 142,160" fill="none" stroke="#D8786E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

    <path d="M 190,110 C 165,110 165,145 190,145 C 215,145 215,110 190,110 Z" fill="#FDE3D8"/>
    <ellipse cx="178" cy="128" rx="4" ry="3" fill="#F4A69D" opacity="0.7"/>
    <path d="M 172,122 Q 176,118 180,122" fill="none" stroke="#2C3E50" stroke-width="2"/>
    <path d="M 192,122 Q 196,118 200,122" fill="none" stroke="#2C3E50" stroke-width="2"/>
    <path d="M 180,134 Q 185,130 190,134" fill="none" stroke="#2C3E50" stroke-width="1.5"/>
    <path d="M 190,90 C 160,85 155,120 165,150 C 175,125 190,125 200,150 C 210,125 220,125 225,150 C 230,120 220,85 190,90 Z" fill="#3D2B1F" stroke="#2A1D14" stroke-width="2"/>
    <circle cx="190" cy="85" r="18" fill="#3D2B1F" stroke="#2A1D14" stroke-width="2"/>
    `
  },
  {
    num: 10,
    lines: ['¿Qué hacés', 'habitualmente con', 'esta emoción?'],
    svgContent: `
    <!-- Girl holding glass jar with hearts -->
    <ellipse cx="150" cy="225" rx="90" ry="8" fill="#E8DFD3"/>

    <!-- Glass Jar -->
    <rect x="180" y="150" width="40" height="50" rx="8" fill="#FFFFFF" opacity="0.8" stroke="#E87A70" stroke-width="2"/>
    <rect x="185" y="144" width="30" height="8" rx="2" fill="#E87A70"/>
    <path d="M 195,165 C 191,160 183,163 189,172 L 195,180 L 201,172 C 207,163 199,160 195,165 Z" fill="#E85D50"/>
    <path d="M 205,180 C 202,177 197,179 201,185 L 205,190 L 209,185 C 213,179 208,177 205,180 Z" fill="#F4A298"/>

    <!-- Girl -->
    <path d="M 110,180 C 110,150 135,145 150,145 C 165,145 185,150 185,180 Z" fill="#F4A298" stroke="#D8786E" stroke-width="1.5"/>
    <path d="M 135,110 C 110,110 110,145 135,145 C 160,145 160,110 135,110 Z" fill="#FDE3D8"/>
    <ellipse cx="122" cy="128" rx="4" ry="3" fill="#F4A69D" opacity="0.7"/>
    <ellipse cx="148" cy="128" rx="4" ry="3" fill="#F4A69D" opacity="0.7"/>
    <circle cx="125" cy="122" r="2.5" fill="#2C3E50"/>
    <circle cx="145" cy="122" r="2.5" fill="#2C3E50"/>
    <path d="M 132,134 Q 136,138 140,134" fill="none" stroke="#2C3E50" stroke-width="1.5"/>
    <path d="M 135,90 C 105,85 100,120 110,150 C 120,125 135,125 145,150 C 155,125 165,125 170,150 C 175,120 165,85 135,90 Z" fill="#3D2B1F" stroke="#2A1D14" stroke-width="2"/>
    <circle cx="135" cy="85" r="18" fill="#3D2B1F" stroke="#2A1D14" stroke-width="2"/>
    `
  },
  {
    num: 11,
    lines: ['¿Qué cambiaría si', 'escucharas esta', 'emoción sin juzgarla?'],
    svgContent: `
    <!-- Girl sitting peacefully with eyes closed -->
    <ellipse cx="150" cy="225" rx="90" ry="8" fill="#E8DFD3"/>

    <!-- Gentle breeze / music waves -->
    <path d="M 70,100 Q 90,90 110,100 T 150,100" fill="none" stroke="#F4A298" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M 170,85 Q 190,75 210,85 T 240,85" fill="none" stroke="#9CCFE8" stroke-width="1.5" stroke-linecap="round"/>

    <!-- Girl -->
    <path d="M 110,180 C 110,150 135,145 150,145 C 165,145 185,150 185,180 Z" fill="#F4A298" stroke="#D8786E" stroke-width="1.5"/>
    <path d="M 150,110 C 125,110 125,145 150,145 C 175,145 175,110 150,110 Z" fill="#FDE3D8"/>
    <ellipse cx="137" cy="128" rx="4" ry="3" fill="#F4A69D" opacity="0.7"/>
    <ellipse cx="163" cy="128" rx="4" ry="3" fill="#F4A69D" opacity="0.7"/>
    <path d="M 132,122 Q 137,118 142,122" fill="none" stroke="#2C3E50" stroke-width="2"/>
    <path d="M 158,122 Q 163,118 168,122" fill="none" stroke="#2C3E50" stroke-width="2"/>
    <path d="M 147,134 Q 150,137 153,134" fill="none" stroke="#2C3E50" stroke-width="1.5"/>
    <path d="M 150,90 C 120,85 115,120 125,150 C 135,125 150,125 160,150 C 170,125 180,125 185,150 C 190,120 180,85 150,90 Z" fill="#3D2B1F" stroke="#2A1D14" stroke-width="2"/>
    <circle cx="150" cy="85" r="18" fill="#3D2B1F" stroke="#2A1D14" stroke-width="2"/>
    `
  },
  {
    num: 12,
    lines: ['¿Qué podés hacer hoy', 'para cuidar lo', 'que sentís?'],
    svgContent: `
    <!-- Girl wrapped in blanket holding warm tea -->
    <ellipse cx="150" cy="225" rx="90" ry="8" fill="#E8DFD3"/>

    <!-- Girl in Blanket -->
    <path d="M 115,140 C 95,140 90,220 150,220 C 210,220 205,140 185,140 Z" fill="#F4A298" stroke="#D8786E" stroke-width="2"/>
    <path d="M 150,110 C 125,110 125,145 150,145 C 175,145 175,110 150,110 Z" fill="#FDE3D8"/>
    <ellipse cx="137" cy="128" rx="4" ry="3" fill="#F4A69D" opacity="0.7"/>
    <ellipse cx="163" cy="128" rx="4" ry="3" fill="#F4A69D" opacity="0.7"/>
    <path d="M 132,122 Q 137,118 142,122" fill="none" stroke="#2C3E50" stroke-width="2"/>
    <path d="M 158,122 Q 163,118 168,122" fill="none" stroke="#2C3E50" stroke-width="2"/>
    <path d="M 147,134 Q 150,137 153,134" fill="none" stroke="#2C3E50" stroke-width="1.5"/>
    <path d="M 150,90 C 120,85 115,120 125,150 C 135,125 150,125 160,150 C 170,125 180,125 185,150 C 190,120 180,85 150,90 Z" fill="#3D2B1F" stroke="#2A1D14" stroke-width="2"/>
    <circle cx="150" cy="85" r="18" fill="#3D2B1F" stroke="#2A1D14" stroke-width="2"/>

    <!-- Tea Cup -->
    <rect x="142" y="170" width="16" height="18" rx="3" fill="#FFFFFF" stroke="#E87A70" stroke-width="1.5"/>
    <path d="M 150,175 C 148,172 144,173 147,178 L 150,182 L 153,178 C 156,173 152,172 150,175 Z" fill="#E85D50"/>
    `
  },
  {
    num: 13,
    lines: ['¿Qué emoción te', 'gustaría comprender', 'mejor?'],
    svgContent: `
    <!-- Girl inspecting glowing heart with magnifying glass -->
    <ellipse cx="150" cy="225" rx="90" ry="8" fill="#E8DFD3"/>

    <!-- Magnifying glass & Heart -->
    <circle cx="195" cy="125" r="22" fill="#FFF2EE" stroke="#E87A70" stroke-width="2"/>
    <line x1="211" y1="141" x2="225" y2="155" stroke="#E87A70" stroke-width="3" stroke-linecap="round"/>
    <path d="M 195,116 C 189,110 179,113 187,123 L 195,132 L 203,123 C 211,113 201,110 195,116 Z" fill="#E85D50"/>

    <!-- Girl -->
    <path d="M 100,180 C 100,150 125,145 140,145 C 155,145 175,150 175,180 Z" fill="#F4A298" stroke="#D8786E" stroke-width="1.5"/>
    <path d="M 125,110 C 100,110 100,145 125,145 C 150,145 150,110 125,110 Z" fill="#FDE3D8"/>
    <ellipse cx="112" cy="128" rx="4" ry="3" fill="#F4A69D" opacity="0.7"/>
    <ellipse cx="138" cy="128" rx="4" ry="3" fill="#F4A69D" opacity="0.7"/>
    <circle cx="115" cy="122" r="2.5" fill="#2C3E50"/>
    <circle cx="135" cy="122" r="2.5" fill="#2C3E50"/>
    <path d="M 122,134 Q 126,138 130,134" fill="none" stroke="#2C3E50" stroke-width="1.5"/>
    <path d="M 125,90 C 95,85 90,120 100,150 C 110,125 125,125 135,150 C 145,125 155,125 160,150 C 165,120 155,85 125,90 Z" fill="#3D2B1F" stroke="#2A1D14" stroke-width="2"/>
    <circle cx="125" cy="85" r="18" fill="#3D2B1F" stroke="#2A1D14" stroke-width="2"/>
    `
  },
  {
    num: 14,
    lines: ['¿Qué te ayuda a', 'sentirte más', 'tranquilo?'],
    svgContent: `
    <!-- Girl hugging soft pillow / sleeping cat -->
    <ellipse cx="150" cy="225" rx="90" ry="8" fill="#E8DFD3"/>

    <!-- Soft pillow with heart -->
    <rect x="135" y="160" width="55" height="40" rx="12" fill="#FFF2EE" stroke="#E87A70" stroke-width="2"/>
    <path d="M 162,172 C 158,167 150,170 156,178 L 162,185 L 168,178 C 174,170 166,167 162,172 Z" fill="#E85D50"/>

    <!-- Girl -->
    <path d="M 100,180 C 100,150 125,145 140,145 C 155,145 175,150 175,180 Z" fill="#F4A298" stroke="#D8786E" stroke-width="1.5"/>
    <path d="M 140,110 C 115,110 115,145 140,145 C 165,145 165,110 140,110 Z" fill="#FDE3D8"/>
    <ellipse cx="127" cy="128" rx="4" ry="3" fill="#F4A69D" opacity="0.7"/>
    <ellipse cx="153" cy="128" rx="4" ry="3" fill="#F4A69D" opacity="0.7"/>
    <path d="M 122,122 Q 127,118 132,122" fill="none" stroke="#2C3E50" stroke-width="2"/>
    <path d="M 148,122 Q 153,118 158,122" fill="none" stroke="#2C3E50" stroke-width="2"/>
    <path d="M 137,134 Q 140,137 143,134" fill="none" stroke="#2C3E50" stroke-width="1.5"/>
    <path d="M 140,90 C 110,85 105,120 115,150 C 125,125 140,125 150,150 C 160,125 170,125 175,150 C 180,120 170,85 140,90 Z" fill="#3D2B1F" stroke="#2A1D14" stroke-width="2"/>
    <circle cx="140" cy="85" r="18" fill="#3D2B1F" stroke="#2A1D14" stroke-width="2"/>
    `
  },
  {
    num: 15,
    lines: ['¿Cuándo te sentiste', 'así por última vez?'],
    svgContent: `
    <!-- Girl resting chin on hand with thought bubble showing past sad memory of broken heart -->
    <ellipse cx="150" cy="225" rx="90" ry="8" fill="#E8DFD3"/>

    <!-- Thought Bubble -->
    <path d="M 150,55 C 135,45 135,25 155,20 C 165,5 195,5 210,20 C 225,10 250,20 245,38 C 255,50 245,70 230,75 C 215,85 180,80 170,70 C 150,75 140,65 150,55 Z" fill="#FFF2EE" stroke="#E87A70" stroke-width="1.5"/>
    <!-- Broken Heart inside bubble -->
    <path d="M 195,30 C 189,24 181,27 187,36 L 195,45 L 203,36 C 209,27 201,24 195,30 Z" fill="#E85D50"/>
    <path d="M 195,30 L 192,36 L 197,40 L 195,45" stroke="#FFFFFF" stroke-width="1.5" fill="none"/>
    <circle cx="140" cy="85" r="4" fill="#FFF2EE" stroke="#E87A70" stroke-width="1.5"/>

    <!-- Girl resting chin on hand -->
    <path d="M 80,180 C 80,150 105,145 120,145 C 135,145 155,150 155,180 Z" fill="#F4A298" stroke="#D8786E" stroke-width="1.5"/>
    <path d="M 120,110 C 95,110 95,145 120,145 C 145,145 145,110 120,110 Z" fill="#FDE3D8"/>
    <ellipse cx="107" cy="128" rx="4" ry="3" fill="#F4A69D" opacity="0.7"/>
    <ellipse cx="133" cy="128" rx="4" ry="3" fill="#F4A69D" opacity="0.7"/>
    <circle cx="110" cy="122" r="2.5" fill="#2C3E50"/>
    <circle cx="130" cy="122" r="2.5" fill="#2C3E50"/>
    <path d="M 117,134 Q 120,138 123,134" fill="none" stroke="#2C3E50" stroke-width="1.5"/>
    <path d="M 120,90 C 90,85 85,120 95,150 C 105,125 120,125 130,150 C 140,125 150,125 155,150 C 160,120 150,85 120,90 Z" fill="#3D2B1F" stroke="#2A1D14" stroke-width="2"/>
    <circle cx="120" cy="85" r="18" fill="#3D2B1F" stroke="#2A1D14" stroke-width="2"/>
    `
  }
];

function generateSvgCard(card) {
  const padNum = String(card.num).padStart(2, '0');
  
  const fontSizes = card.lines.length > 3 ? 24 : 27;
  const lineSpacing = card.lines.length > 3 ? 34 : 38;
  const startY = card.lines.length > 3 ? 180 : 195;

  const tspanElements = card.lines.map((line, idx) => {
    return `    <tspan x="200" ${idx === 0 ? `y="${startY}"` : ''} dy="${idx === 0 ? 0 : lineSpacing}">${line}</tspan>`;
  }).join('\n');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600" width="100%" height="100%">
  <defs>
    <linearGradient id="cardBgDeck2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFDF9"/>
      <stop offset="100%" stop-color="#FAF4EA"/>
    </linearGradient>
  </defs>

  <!-- Outer Coral Pink Border -->
  <rect x="0" y="0" width="400" height="600" rx="32" ry="32" fill="#F2A6A0"/>
  <!-- Inner Card Canvas -->
  <rect x="12" y="12" width="376" height="576" rx="22" ry="22" fill="url(#cardBgDeck2)"/>
  <!-- Dashed Inner Line -->
  <rect x="22" y="22" width="356" height="556" rx="16" ry="16" fill="none" stroke="#F7B8B2" stroke-width="2" stroke-dasharray="7,5"/>

  <!-- Top Foliage Left -->
  <path d="M 60,65 C 45,50 65,30 80,45 C 90,55 75,75 60,65 Z" fill="none" stroke="#E87A70" stroke-width="2"/>
  <path d="M 60,65 C 50,45 35,50 45,60" fill="none" stroke="#E87A70" stroke-width="2"/>
  <path d="M 60,65 C 75,55 80,40 70,45" fill="none" stroke="#E87A70" stroke-width="2"/>
  
  <!-- Top Foliage Right -->
  <path d="M 340,65 C 355,50 335,30 320,45 C 310,55 325,75 340,65 Z" fill="none" stroke="#E87A70" stroke-width="2"/>
  <path d="M 340,65 C 350,45 365,50 355,60" fill="none" stroke="#E87A70" stroke-width="2"/>
  <path d="M 340,65 C 325,55 320,40 330,45" fill="none" stroke="#E87A70" stroke-width="2"/>

  <!-- Stars & Dots -->
  <circle cx="190" cy="38" r="2.5" fill="#E87A70"/>
  <circle cx="200" cy="38" r="3.5" fill="#E87A70"/>
  <circle cx="210" cy="38" r="2.5" fill="#E87A70"/>
  <polygon points="65,115 67,120 72,120 68,123 70,128 65,125 60,128 62,123 58,120 63,120" fill="#E87A70" opacity="0.6"/>
  <polygon points="335,115 337,120 342,120 338,123 340,128 335,125 330,128 332,123 328,120 333,120" fill="#E87A70" opacity="0.6"/>

  <!-- Deck Name Header -->
  <text x="200" y="100" text-anchor="middle" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="14" font-weight="700" letter-spacing="2.5" fill="#E87A70">LO QUE SENTÍS</text>

  <!-- Header Sprig Doodle -->
  <g transform="translate(150, 108)">
    <path d="M0,8 Q15,0 30,8 T60,8" fill="none" stroke="#E87A70" stroke-width="2"/>
    <path d="M100,8 Q85,0 70,8 T40,8" fill="none" stroke="#E87A70" stroke-width="2"/>
    <path d="M50,11 C47,7 43,10 50,15 C57,10 53,7 50,11 Z" fill="#E87A70"/>
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
  <path d="M 40,560 C 55,545 75,565 60,580 C 50,590 30,575 40,560 Z" fill="none" stroke="#E87A70" stroke-width="2"/>
  <path d="M 360,560 C 345,545 325,565 340,580 C 350,590 370,575 360,560 Z" fill="none" stroke="#E87A70" stroke-width="2"/>
  <path d="M 200,573 C 197,569 193,572 200,577 C 207,572 203,569 200,573 Z" fill="#E87A70"/>
</svg>`;
}

cardsData.forEach(card => {
  const svgName = `Lo_que_sentis_${card.num}.svg`;
  const pngName = `Lo_que_sentis_${card.num}.png`;
  const svgContent = generateSvgCard(card);

  fs.writeFileSync(path.join(pubDir, svgName), svgContent, 'utf-8');
  fs.writeFileSync(path.join(distDir, svgName), svgContent, 'utf-8');

  // Also write SVG content as PNG fallback just in case
  fs.writeFileSync(path.join(pubDir, pngName), svgContent, 'utf-8');
  fs.writeFileSync(path.join(distDir, pngName), svgContent, 'utf-8');

  console.log(`Generated Deck 2 Card ${card.num} (${svgName})`);
});
