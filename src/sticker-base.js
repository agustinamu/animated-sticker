// Clase base para los stickers animados.
// Encapsula cada personaje en su propio Shadow DOM (estilos aislados, sin
// colisión de IDs de <defs> entre personajes) y gestiona los atributos comunes.
//
// Atributos (todos opcionales):
//   size   -> alto del sticker. Número => px ("240" = 240px). También "50%", "10rem"...
//   speed  -> multiplicador de velocidad (1 = normal, 2 = doble, 0.5 = mitad).
//   feet   -> "off" para dejar las piernas quietas (por defecto bailan).
//   paused -> presente => congela toda la animación.
//
// Las subclases solo tienen que implementar el getter `svg`.

const STYLES = `
  :host {
    display: inline-block;
    block-size: var(--size, 320px);
    line-height: 0;
  }
  :host([hidden]) { display: none; }

  svg {
    block-size: 100%;
    inline-size: auto;
    display: block;
    overflow: visible;
  }

  .sway, .arm-l, .arm-r, .leg-l, .leg-r { transform-box: view-box; }

  /* Puntos de anclaje: cada personaje puede sobreescribirlos (ver get anchors()).
     Los valores por defecto son los del limón. */
  .sway {
    transform-origin: var(--to-sway, 150px 300px);
    animation: sway calc(3.4s / var(--speed, 1)) ease-in-out infinite;
  }
  .arm-l {
    transform-origin: var(--to-arm-l, 96px 152px);
    animation: waveL calc(1.7s / var(--speed, 1)) ease-in-out infinite;
  }
  .arm-r {
    transform-origin: var(--to-arm-r, 204px 152px);
    animation: waveR calc(1.7s / var(--speed, 1)) ease-in-out infinite;
    animation-delay: calc(-0.4s / var(--speed, 1));
  }
  .leg-l {
    transform-origin: var(--to-leg-l, 135px 252px);
    animation: legSwing calc(1.7s / var(--speed, 1)) ease-in-out infinite;
  }
  .leg-r {
    transform-origin: var(--to-leg-r, 165px 252px);
    animation: legSwing calc(1.7s / var(--speed, 1)) ease-in-out infinite;
    animation-delay: calc(-0.85s / var(--speed, 1));
  }

  @keyframes sway     { 0%, 100% { transform: rotate(-2deg); } 50% { transform: rotate(2deg); } }
  @keyframes waveL    { 0%, 100% { transform: rotate(0deg); }  50% { transform: rotate(-13deg); } }
  @keyframes waveR    { 0%, 100% { transform: rotate(0deg); }  50% { transform: rotate(13deg); } }
  @keyframes legSwing { 0%, 100% { transform: rotate(-4deg); } 50% { transform: rotate(4deg); } }

  /* pies quietos bajo demanda */
  :host([feet="off"]) .leg-l,
  :host([feet="off"]) .leg-r { animation: none; }

  /* pausa global */
  :host([paused]) .sway,
  :host([paused]) .arm-l,
  :host([paused]) .arm-r,
  :host([paused]) .leg-l,
  :host([paused]) .leg-r { animation-play-state: paused; }

  /* accesibilidad: respeta la preferencia del sistema */
  @media (prefers-reduced-motion: reduce) {
    .sway, .arm-l, .arm-r, .leg-l, .leg-r { animation: none; }
  }
`;

export class StickerBase extends HTMLElement {
  static get observedAttributes() {
    // feet y paused se resuelven solo con CSS; aquí solo lo que necesita JS.
    return ['size', 'speed'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    if (!this.shadowRoot.firstChild) {
      const extra = this.anchors ? `:host{${this.anchors}}` : '';
      this.shadowRoot.innerHTML = `<style>${STYLES}${extra}</style>${this.svg}`;
    }
    this._sync();
  }

  attributeChangedCallback() {
    this._sync();
  }

  _sync() {
    const size = this.getAttribute('size');
    if (size) {
      this.style.setProperty('--size', /^\d+(\.\d+)?$/.test(size) ? `${size}px` : size);
    } else {
      this.style.removeProperty('--size');
    }

    const speed = Number(this.getAttribute('speed'));
    this.style.setProperty('--speed', speed > 0 ? String(speed) : '1');
  }

  /** Las subclases devuelven aquí el markup del <svg>. */
  get svg() {
    return '';
  }

  /**
   * Las subclases pueden sobreescribir los puntos de anclaje de la animación
   * devolviendo declaraciones CSS de custom properties, p.ej.:
   *   `--to-sway:175px 545px; --to-arm-l:150px 190px; ...`
   * Si devuelve cadena vacía, se usan los anclajes por defecto (los del limón).
   */
  get anchors() {
    return '';
  }
}
