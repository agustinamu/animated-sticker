// <sticker-chorizo> — chorizo/chistorra largo y curvo (forma en C), sin gafas.
import { StickerBase } from './sticker-base.js';

export class StickerChorizo extends StickerBase {
  // Puntos de anclaje propios: el chorizo es mucho más alto que el limón.
  get anchors() {
    return [
      '--to-sway:176px 556px',
      '--to-arm-l:150px 178px',
      '--to-arm-r:235px 150px',
      '--to-leg-l:162px 500px',
      '--to-leg-r:192px 500px',
    ].join(';');
  }

  get svg() {
    return `
    <svg viewBox="0 0 300 580" role="img" aria-label="Mascota chorizo estilo sticker, embutido largo y curvo atado con cuerda, ojos pícaros, shorts verdes y piernas de palillo">
      <defs>
        <filter id="sticker" filterUnits="userSpaceOnUse" x="-40" y="-40" width="380" height="680">
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
          <path d="M170 158 C186 172 210 168 222 150 C226 176 178 192 170 158 Z"/>
        </clipPath>
      </defs>

      <g filter="url(#sticker)">
        <g class="sway">

          <!-- ====== PIERNAS PALILLO ====== -->
          <g class="leg leg-l">
            <path d="M162 498 C158 520 152 540 148 558" fill="none" stroke="#14142b" stroke-width="16" stroke-linecap="round"/>
            <path d="M162 498 C158 520 152 540 148 558" fill="none" stroke="#b23a2a" stroke-width="9" stroke-linecap="round"/>
            <path fill="#ff3b5c" stroke="#14142b" stroke-width="5.5" stroke-linejoin="round"
              d="M136 554 L161 553 L162 566 C162 574 157 578 149 578 L126 578 C118 578 115 571 120 565 C125 560 130 556 136 554 Z"/>
          </g>
          <g class="leg leg-r">
            <path d="M192 498 C196 520 202 540 206 558" fill="none" stroke="#14142b" stroke-width="16" stroke-linecap="round"/>
            <path d="M192 498 C196 520 202 540 206 558" fill="none" stroke="#b23a2a" stroke-width="9" stroke-linecap="round"/>
            <path fill="#ff3b5c" stroke="#14142b" stroke-width="5.5" stroke-linejoin="round"
              d="M218 554 L193 553 L192 566 C192 574 197 578 205 578 L228 578 C236 578 239 571 234 565 C229 560 224 556 218 554 Z"/>
          </g>

          <!-- ====== CUERPO: embutido largo en C ====== -->
          <!-- nudo + cuerda de la punta superior -->
          <path fill="#b23a2a" stroke="#14142b" stroke-width="6" stroke-linejoin="round"
            d="M188 96 C184 84 192 74 202 78 C210 82 208 96 200 100 Z"/>
          <path fill="#f0d9a6" stroke="#14142b" stroke-width="4" stroke-linejoin="round"
            d="M183 104 L206 96 C208 99 209 102 208 105 L185 113 C183 110 182 107 183 104 Z"/>
          <path d="M190 106 l-1 8 M199 102 l1 8" stroke="#14142b" stroke-width="2.4" stroke-linecap="round"/>

          <!-- tubo -->
          <path d="M196 132 C96 210 96 380 176 466" fill="none" stroke="#14142b" stroke-width="104" stroke-linecap="round"/>
          <path d="M196 132 C96 210 96 380 176 466" fill="none" stroke="#b23a2a" stroke-width="94" stroke-linecap="round"/>

          <!-- brillo del lomo -->
          <path d="M158 118 C150 132 146 152 149 172" fill="none" stroke="#ffffff" stroke-width="9" stroke-linecap="round" opacity="0.5"/>
          <path d="M132 250 C124 300 124 350 132 396" fill="none" stroke="#ffffff" stroke-width="7" stroke-linecap="round" opacity="0.28"/>

          <!-- manchitas de pimentón / grasa -->
          <circle cx="160" cy="150" r="4" fill="#e0906a"/>
          <circle cx="205" cy="176" r="3.4" fill="#c97b52"/>
          <ellipse cx="150" cy="192" rx="4.4" ry="3.2" fill="#c97b52" transform="rotate(-16 150 192)"/>
          <circle cx="123" cy="245" r="3.6" fill="#7c1f14"/>
          <circle cx="110" cy="305" r="4" fill="#c97b52"/>
          <ellipse cx="122" cy="360" rx="4" ry="3" fill="#e0906a" transform="rotate(20 122 360)"/>
          <circle cx="146" cy="415" r="3.6" fill="#7c1f14"/>
          <circle cx="171" cy="452" r="3.2" fill="#c97b52"/>
          <circle cx="185" cy="205" r="2" fill="#7c1f14"/>
          <circle cx="132" cy="290" r="2" fill="#7c1f14"/>

          <!-- ====== CARA (sin gafas) ====== -->
          <path d="M158 120 C166 112 178 111 187 116" fill="none" stroke="#14142b" stroke-width="7" stroke-linecap="round"/>
          <path d="M200 112 C209 108 220 109 228 115" fill="none" stroke="#14142b" stroke-width="7" stroke-linecap="round"/>

          <ellipse cx="176" cy="142" rx="15" ry="17" fill="#ffffff" stroke="#14142b" stroke-width="5.5"/>
          <ellipse cx="212" cy="138" rx="15" ry="17" fill="#ffffff" stroke="#14142b" stroke-width="5.5"/>
          <circle cx="181" cy="146" r="6.5" fill="#14142b"/>
          <circle cx="217" cy="142" r="6.5" fill="#14142b"/>
          <circle cx="183.2" cy="143.2" r="2.2" fill="#ffffff"/>
          <circle cx="219.2" cy="139.2" r="2.2" fill="#ffffff"/>

          <circle cx="158" cy="166" r="8" fill="#e85f3d" opacity="0.55"/>
          <circle cx="232" cy="152" r="8" fill="#e85f3d" opacity="0.55"/>

          <!-- bocaza pícara -->
          <path fill="#3b1220" stroke="#14142b" stroke-width="6" stroke-linejoin="round"
            d="M170 158 C186 172 210 168 222 150 C226 176 178 192 170 158 Z"/>
          <g clip-path="url(#mouthClip)">
            <path fill="#ffffff" d="M172 160 C188 172 208 167 220 152 L217 166 C205 177 184 179 173 170 Z"/>
            <ellipse cx="196" cy="186" rx="20" ry="11" fill="#ff5f7a"/>
          </g>

          <!-- ====== BRAZOS (los dos en alto) ====== -->
          <g class="arm arm-l">
            <path d="M150 178 C130 150 116 118 108 86" fill="none" stroke="#14142b" stroke-width="16" stroke-linecap="round"/>
            <path d="M150 178 C130 150 116 118 108 86" fill="none" stroke="#b23a2a" stroke-width="9" stroke-linecap="round"/>
            <circle cx="106" cy="78" r="12.5" fill="#b23a2a" stroke="#14142b" stroke-width="5"/>
          </g>
          <g class="arm arm-r">
            <path d="M235 150 C252 122 260 96 264 72" fill="none" stroke="#14142b" stroke-width="16" stroke-linecap="round"/>
            <path d="M235 150 C252 122 260 96 264 72" fill="none" stroke="#b23a2a" stroke-width="9" stroke-linecap="round"/>
            <circle cx="266" cy="66" r="12.5" fill="#b23a2a" stroke="#14142b" stroke-width="5"/>
          </g>

          <!-- ====== SHORTS VERDES (en la cintura, extremo inferior) ====== -->
          <g transform="translate(26 232)">
            <path fill="#1f9d4d" stroke="#14142b" stroke-width="6" stroke-linejoin="round"
              d="M90 220 C85 234 84 248 90 260 C104 268 126 271 150 271 C174 271 196 268 210 260 C216 248 215 234 210 220 C172 233 128 233 90 220 Z"/>
            <path fill="#14622f" stroke="#14142b" stroke-width="5" stroke-linejoin="round"
              d="M90 220 C128 233 172 233 210 220 C210.7 222.8 211.2 225.7 211.5 228.6 C172 241.5 128 241.5 88.5 228.6 C88.8 225.7 89.3 222.8 90 220 Z"/>
            <path d="M150 246 L150 269" stroke="#14142b" stroke-width="4.5" stroke-linecap="round"/>
          </g>

        </g>
      </g>
    </svg>`;
  }
}

if (!customElements.get('sticker-chorizo')) {
  customElements.define('sticker-chorizo', StickerChorizo);
}
