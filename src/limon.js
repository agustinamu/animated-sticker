// <sticker-limon> — mascota limón con gafas de sol, shorts y piernas palillo.
import { StickerBase } from './sticker-base.js';

export class StickerLimon extends StickerBase {
  get svg() {
    return `
    <svg viewBox="0 0 300 430" role="img" aria-label="Mascota limón estilo sticker con gafas de sol, shorts azules y piernas de palillo">
      <defs>
        <!-- troquel sticker: borde blanco dilatado + sombra plana -->
        <filter id="sticker" filterUnits="userSpaceOnUse" x="-40" y="-40" width="380" height="500">
          <feMorphology in="SourceAlpha" operator="dilate" radius="10" result="dil"/>
          <feFlood flood-color="#ffffff" result="white"/>
          <feComposite in="white" in2="dil" operator="in" result="border"/>
          <feMerge result="stickerShape">
            <feMergeNode in="border"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
          <feDropShadow dx="0" dy="10" stdDeviation="0" flood-color="#0a3f3c" flood-opacity="0.35"/>
        </filter>
        <clipPath id="mouthClip">
          <path d="M108 190 C136 202 164 202 192 190 C190 234 110 234 108 190 Z"/>
        </clipPath>
      </defs>

      <g filter="url(#sticker)">
        <g class="sway">

          <!-- ====== PIERNAS PALILLO (detrás de los shorts) ====== -->
          <g class="leg leg-l">
            <path d="M135 250 C131 282 125 314 118 344" fill="none" stroke="#14142b" stroke-width="16" stroke-linecap="round"/>
            <path d="M135 250 C131 282 125 314 118 344" fill="none" stroke="#ffd21f" stroke-width="9" stroke-linecap="round"/>
            <path fill="#ff3b5c" stroke="#14142b" stroke-width="5.5" stroke-linejoin="round"
              d="M106 340 L131 339 L132 352 C132 360 127 364 119 364 L96 364 C88 364 85 357 90 351 C95 346 100 342 106 340 Z"/>
          </g>
          <g class="leg leg-r">
            <path d="M165 250 C169 282 175 314 182 344" fill="none" stroke="#14142b" stroke-width="16" stroke-linecap="round"/>
            <path d="M165 250 C169 282 175 314 182 344" fill="none" stroke="#ffd21f" stroke-width="9" stroke-linecap="round"/>
            <path fill="#ff3b5c" stroke="#14142b" stroke-width="5.5" stroke-linejoin="round"
              d="M194 340 L169 339 L168 352 C168 360 173 364 181 364 L204 364 C212 364 215 357 210 351 C205 346 200 342 194 340 Z"/>
          </g>

          <!-- ====== CUERPO ====== -->
          <path fill="#ffd21f" stroke="#14142b" stroke-width="6.5" stroke-linejoin="round"
            d="M150 66 C157 66 162 71 163 80 C164 87 167 91 174 95 C205 107 223 139 224 175 C225 219 198 260 150 264 C102 260 75 219 76 175 C77 139 95 107 126 95 C133 91 136 87 137 80 C138 71 143 66 150 66 Z"/>

          <!-- brillos -->
          <path d="M100 132 C104 120 112 110 124 104" fill="none" stroke="#ffffff" stroke-width="9" stroke-linecap="round" opacity="0.85"/>
          <circle cx="95" cy="150" r="4.5" fill="#ffffff" opacity="0.85"/>

          <!-- cejas -->
          <path d="M110 118 C118 110 130 108 139 111" fill="none" stroke="#14142b" stroke-width="7" stroke-linecap="round"/>
          <path d="M190 118 C182 110 170 108 161 111" fill="none" stroke="#14142b" stroke-width="7" stroke-linecap="round"/>

          <!-- gafas de sol -->
          <path d="M103 140 L88 134" stroke="#14142b" stroke-width="6" stroke-linecap="round"/>
          <path d="M197 140 L212 134" stroke="#14142b" stroke-width="6" stroke-linecap="round"/>
          <path d="M146 140 L154 140" stroke="#14142b" stroke-width="6" stroke-linecap="round"/>
          <rect x="103" y="127" width="44" height="32" rx="14" fill="#14142b" stroke="#14142b" stroke-width="4"/>
          <rect x="153" y="127" width="44" height="32" rx="14" fill="#14142b" stroke="#14142b" stroke-width="4"/>
          <path d="M113 135 L124 150" stroke="#bff3ff" stroke-width="4" stroke-linecap="round" opacity="0.8"/>
          <path d="M163 135 L174 150" stroke="#bff3ff" stroke-width="4" stroke-linecap="round" opacity="0.8"/>

          <!-- mofletes -->
          <circle cx="100" cy="174" r="9" fill="#ffab2e" opacity="0.55"/>
          <circle cx="200" cy="174" r="9" fill="#ffab2e" opacity="0.55"/>

          <!-- bocaza -->
          <path fill="#3b1220" stroke="#14142b" stroke-width="6" stroke-linejoin="round"
            d="M108 190 C136 202 164 202 192 190 C190 234 110 234 108 190 Z"/>
          <g clip-path="url(#mouthClip)">
            <path fill="#ffffff" d="M112 192 C140 203 160 203 188 192 L186 207 C160 215 140 215 114 207 Z"/>
            <ellipse cx="150" cy="230" rx="25" ry="14" fill="#ff5f7a"/>
          </g>

          <!-- ====== BRAZOS ====== -->
          <g class="arm arm-l">
            <path d="M96 152 C76 140 62 120 57 94" fill="none" stroke="#14142b" stroke-width="16" stroke-linecap="round"/>
            <path d="M96 152 C76 140 62 120 57 94" fill="none" stroke="#ffd21f" stroke-width="9" stroke-linecap="round"/>
            <circle cx="55" cy="86" r="12.5" fill="#ffd21f" stroke="#14142b" stroke-width="5"/>
          </g>
          <g class="arm arm-r">
            <path d="M204 152 C224 140 238 120 243 94" fill="none" stroke="#14142b" stroke-width="16" stroke-linecap="round"/>
            <path d="M204 152 C224 140 238 120 243 94" fill="none" stroke="#ffd21f" stroke-width="9" stroke-linecap="round"/>
            <circle cx="245" cy="86" r="12.5" fill="#ffd21f" stroke="#14142b" stroke-width="5"/>
          </g>

          <!-- ====== SHORTS (encima de cuerpo y piernas) ====== -->
          <path fill="#2b5cf0" stroke="#14142b" stroke-width="6" stroke-linejoin="round"
            d="M90 220 C85 234 84 248 90 260 C104 268 126 271 150 271 C174 271 196 268 210 260 C216 248 215 234 210 220 C172 233 128 233 90 220 Z"/>
          <path fill="#1e2f8f" stroke="#14142b" stroke-width="5" stroke-linejoin="round"
            d="M90 220 C128 233 172 233 210 220 C210.7 222.8 211.2 225.7 211.5 228.6 C172 241.5 128 241.5 88.5 228.6 C88.8 225.7 89.3 222.8 90 220 Z"/>
          <path d="M150 246 L150 269" stroke="#14142b" stroke-width="4.5" stroke-linecap="round"/>

        </g>
      </g>
    </svg>`;
  }
}

if (!customElements.get('sticker-limon')) {
  customElements.define('sticker-limon', StickerLimon);
}
