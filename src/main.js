
/* =========================================
    VERCEL SPEED INSIGHTS
========================================= */
// import { injectSpeedInsights } from '@vercel/speed-insights';

// injectSpeedInsights();

// PWA

// import { registerSW } from 'virtual:pwa-register'
// registerSW({ immediate: true })

/* =========================================
    DATOS (Hiragana, Katakana, Kanji)
========================================= */

const x_data = {
    hiragana: [
        { char: 'あ', back: 'a' }, { char: 'い', back: 'i' }, { char: 'う', back: 'u' }, { char: 'え', back: 'e' }, { char: 'お', back: 'o' },
        { char: 'か', back: 'ka' }, { char: 'き', back: 'ki' }, { char: 'く', back: 'ku' }, { char: 'け', back: 'ke' }, { char: 'こ', back: 'ko' },
        { char: 'さ', back: 'sa' }, { char: 'し', back: 'shi' }, { char: 'す', back: 'su' }, { char: 'せ', back: 'se' }, { char: 'そ', back: 'so' },
        { char: 'た', back: 'ta' }, { char: 'ち', back: 'chi' }, { char: 'つ', back: 'tsu' }, { char: 'て', back: 'te' }, { char: 'と', back: 'to' },
        { char: 'な', back: 'na' }, { char: 'に', back: 'ni' }, { char: 'ぬ', back: 'nu' }, { char: 'ね', back: 'ne' }, { char: 'の', back: 'no' },
        { char: 'は', back: 'ha' }, { char: 'ひ', back: 'hi' }, { char: 'ふ', back: 'fu' }, { char: 'へ', back: 'he' }, { char: 'ほ', back: 'ho' },
        { char: 'ま', back: 'ma' }, { char: 'み', back: 'mi' }, { char: 'む', back: 'mu' }, { char: 'め', back: 'me' }, { char: 'も', back: 'mo' },
        { char: 'や', back: 'ya' }, { char: 'ゆ', back: 'yu' }, { char: 'よ', back: 'yo' },
        { char: 'ら', back: 'ra' }, { char: 'り', back: 'ri' }, { char: 'る', back: 'ru' }, { char: 'れ', back: 're' }, { char: 'ろ', back: 'ro' },
        { char: 'わ', back: 'wa' }, { char: 'を', back: 'wo' }, { char: 'ん', back: 'n' }
    ],
    katakana: [
        { char: 'ア', back: 'a' }, { char: 'イ', back: 'i' }, { char: 'ウ', back: 'u' }, { char: 'エ', back: 'e' }, { char: 'オ', back: 'o' },
        { char: 'カ', back: 'ka' }, { char: 'キ', back: 'ki' }, { char: 'ク', back: 'ku' }, { char: 'ケ', back: 'ke' }, { char: 'コ', back: 'ko' },
        { char: 'サ', back: 'sa' }, { char: 'シ', back: 'shi' }, { char: 'ス', back: 'su' }, { char: 'セ', back: 'se' }, { char: 'ソ', back: 'so' },
        { char: 'タ', back: 'ta' }, { char: 'チ', back: 'chi' }, { char: 'ツ', back: 'tsu' }, { char: 'テ', back: 'te' }, { char: 'ト', back: 'to' },
        { char: 'ナ', back: 'na' }, { char: 'ニ', back: 'ni' }, { char: 'ヌ', back: 'nu' }, { char: 'ネ', back: 'ne' }, { char: 'ノ', back: 'no' },
        { char: 'ハ', back: 'ha' }, { char: 'ヒ', back: 'hi' }, { char: 'フ', back: 'fu' }, { char: 'ヘ', back: 'he' }, { char: 'ホ', back: 'ho' },
        { char: 'マ', back: 'ma' }, { char: 'ミ', back: 'mi' }, { char: 'ム', back: 'mu' }, { char: 'メ', back: 'me' }, { char: 'モ', back: 'mo' },
        { char: 'ヤ', back: 'ya' }, { char: 'ユ', back: 'yu' }, { char: 'ヨ', back: 'yo' },
        { char: 'ラ', back: 'ra' }, { char: 'リ', back: 'ri' }, { char: 'ル', back: 'ru' }, { char: 'レ', back: 're' }, { char: 'ロ', back: 'ro' },
        { char: 'ワ', back: 'wa' }, { char: 'ヲ', back: 'wo' }, { char: 'ン', back: 'n' }
    ],
    kanjiN5: [
        { char: '日', meaning: 'Día / Sol (day / sun)', onyomi: 'ニチ, ジツ', kunyomi: 'ひ, び' },
        { char: '月', meaning: 'Mes / Luna (month / moon)', onyomi: 'ガツ, ゲツ', kunyomi: 'つき' },
        { char: '木', meaning: 'Árbol (tree)', onyomi: 'モク, ボク', kunyomi: 'き' },
        { char: '山', meaning: 'Montaña (mountain)', onyomi: 'サン', kunyomi: 'やま' },
        { char: '川', meaning: 'Río (river)', onyomi: 'セン', kunyomi: 'かわ' },
        { char: '田', meaning: 'Campo de arroz (rice field)', onyomi: 'デン', kunyomi: 'た' },
        { char: '人', meaning: 'Persona (person)', onyomi: 'ジン, ニン', kunyomi: 'ひと' },
        { char: '口', meaning: 'Boca (mouth)', onyomi: 'コウ', kunyomi: 'くち' },
        { char: '車', meaning: 'Coche (car / vehicle)', onyomi: 'シャ', kunyomi: 'くるま' },
        { char: '門', meaning: 'Puerta (gate)', onyomi: 'モン', kunyomi: 'かど' }
    ],
    kanjiN4: [
        { char: '会', meaning: 'Reunión (meeting)', onyomi: 'カイ', kunyomi: 'あう' },
        { char: '社', meaning: 'Compañía / Santuario (company / shrine)', onyomi: 'シャ', kunyomi: 'やしろ' },
        { char: '店', meaning: 'Tienda (shop)', onyomi: 'テン', kunyomi: 'みせ' },
        { char: '駅', meaning: 'Estación (station)', onyomi: 'エキ', kunyomi: '-' },
        { char: '道', meaning: 'Camino (road / path)', onyomi: 'ドウ', kunyomi: 'みち' },
        { char: '銀', meaning: 'Plata (silver)', onyomi: 'ギン', kunyomi: '-' },
        { char: '買', meaning: 'Comprar (to buy)', onyomi: 'バイ', kunyomi: 'かう' },
        { char: '飲', meaning: 'Beber (to drink)', onyomi: 'イン', kunyomi: 'のむ' },
        { char: '書', meaning: 'Escribir (to write)', onyomi: 'ショ', kunyomi: 'かく' },
        { char: '読', meaning: 'Leer (to read)', onyomi: 'ドク', kunyomi: 'よむ' }
    ]
};

/* =========================================
    LÓGICA DE LA APLICACIÓN
========================================= */

class App {

    constructor() {
        this.currentMode = 'hiragana';
        this.container = null
    }

    // Inicializar
    async init() {
        this.container = document.getElementById('card-container');
        
        if (!this.container) {
            console.warn('card-container not found');
            return;
        }

        // Cargar datos desde JSON
        await this.loadData();
        
        if (!this.data) {
            console.error('❌ No se pudieron cargar los datos');
            return;
        }

        console.log('✅ Aplicación inicializada correctamente');
        this.setMode('hiragana');
        this.addEventListeners();
    }

    async loadData() {
        try {
            console.log('Cargando datos...');
            const response = await fetch('src/data.json');
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            this.data = await response.json();
            console.log('✅ Datos cargados correctamente');

        } catch (error) {
            
            console.error('❌ Error al cargar datos:', error);
            // Fallback: mostrar mensaje al usuario
            if (this.container) {
                this.container.innerHTML = `
                    <div style="text-align: center; padding: 2rem; color: #e74c3c;">
                        <h3>Error al cargar los datos</h3>
                        <p>Por favor, recarga la página</p>
                    </div>
                `;
            }
        }
    }

    // Manejador de eventos
    addEventListeners() {

        // 1. Botones de Modo (Hiragana / Katakana)

        const btnH = document.getElementById('btn-hiragana');
        if (btnH) btnH.addEventListener('click', () => this.setMode('hiragana'));

        const btnK = document.getElementById('btn-katakana');
        if (btnK) btnK.addEventListener('click', () => this.setMode('katakana'));

        // 2. Dropdown Kanji (Abrir/Cerrar)

        const dropdownEl = document.getElementById('dropdown-kanji');
        if (dropdownEl) dropdownEl.addEventListener('click', () => this.toggleDropdown());
 

        // 3. Opciones del Dropdown (N5 / N4)

        const btnN5 = document.querySelector('.btn-n5');
        const btnN4 = document.querySelector('.btn-n4');

        if (btnN5) btnN5.addEventListener('click', (e) => {
            e.stopPropagation();
            this.setMode('kanji-n5');
        });

        if (btnN4) btnN4.addEventListener('click', (e) => {
            e.stopPropagation();
            this.setMode('kanji-n4');
        });

        // 4. Botón Recargar

        const btnReload = document.getElementById('btn-reload');
        
        if (btnReload) {

            btnReload.addEventListener('click', () => {

                this.reloadCards();

            });

        }

        // 5. Cerrar dropdown si se hace clic fuera (Listener global)
        document.addEventListener('click', (e) => {
            
            const dropdown = document.querySelector('.dropdown');

            if (!dropdown) return;
            // Si el clic NO fue dentro del dropdown, ciérralo
            if (!e.target.closest('.dropdown')) {
                dropdown.classList.remove('show');
            }
        });


    }

    // Cambiar Modo
    setMode(mode){

        // Validar que el modo sea válido
        const validModes = ['hiragana', 'katakana', 'kanji-n5', 'kanji-n4'];
        if (!validModes.includes(mode)) {
            console.error(`Modo inválido: ${mode}`);
            return;
        }

        this.currentMode = mode;

        // Actualizar estilo de botones (Active state)
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

        const btnHiragana = document.getElementById('btn-hiragana');
        const btnKatakana = document.getElementById('btn-katakana');
        const dropdownKanji = document.getElementById('dropdown-kanji');
        const dropdown = document.querySelector('.dropdown');

        if (mode === 'hiragana' && btnHiragana) btnHiragana.classList.add('active');
        else if (mode === 'katakana' && btnKatakana) btnKatakana.classList.add('active');
        else if (mode.includes('kanji') && dropdownKanji) dropdownKanji.classList.add('active');

        // Ocultar dropdown tras selección
        if (dropdown) dropdown.classList.remove('show');

        this.renderCards();
    } 

    // Mostrar/Ocultar Dropdown en móvil
    toggleDropdown() {
        const dropdown = document.querySelector('.dropdown');
        if (dropdown) dropdown.classList.toggle('show');
    }

    // Obtener elementos aleatorios
    getRandomItems(arr, n) {
        if (n > arr.length) throw new RangeError("getRandom: más elementos requeridos que disponibles");
        
        const result = new Array(n);
        let len = arr.length;
        const taken = new Array(len);
        
        while (n--) {
            const x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    }

    // Recargar tarjetas
    reloadCards() {
        if (!this.container) return;

        // Pequeña animación visual de recarga
        this.container.style.opacity = '0';
        setTimeout(() => {
            this.renderCards();
            this.container.style.opacity = '1';
        }, 200);
    }

    renderCards() {

        if (!this.container || !this.data) return;
        
        this.container.innerHTML = '';
        let items = [];
        let isSingleCard = false;

        // Obtener datos según modo
        try {
            switch (this.currentMode) {
                case 'hiragana':
                    items = this.getRandomItems(this.data.hiragana, 6);
                    break;
                case 'katakana':
                    items = this.getRandomItems(this.data.katakana, 6);
                    break;
                case 'kanji-n5':
                    items = this.getRandomItems(this.data.kanjiN5, 1);
                    isSingleCard = true;
                    break;
                case 'kanji-n4':
                    items = this.getRandomItems(this.data.kanjiN4, 1);
                    isSingleCard = true;
                    break;
            }
        } catch (error) {
            console.error("Error al obtener datos:", error);
            return;
        }

        // Ajustar Grid CSS
        if (isSingleCard) {
            this.container.classList.add('single-card-mode');
        } else {
            this.container.classList.remove('single-card-mode');
        }

        // Crear elementos DOM
        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'flip-card';


            card.addEventListener('click', (e) => {
                e.currentTarget.classList.toggle('flipped');
            });

            // Contenido de la tarjeta (Anverso y Reverso) con Template Literals
            let backContent;

            if (this.currentMode.includes('kanji')) {

                backContent = `
                    <h3>${item.meaning}</h3>
                    <p><strong>On:</strong> ${item.onyomi}</p>
                    <p><strong>Kun:</strong> ${item.kunyomi}</p>
                `;
            } else {

                backContent = `<h3>${item.back}</h3>`;
            }

            card.innerHTML = `
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <h2>${item.char}</h2>
                    </div>
                    <div class="flip-card-back">
                        ${backContent}
                    </div>
                </div>
            `;

            this.container.appendChild(card);
        });

    }

}

// Instanciar y arrancar app
const appInstance = new App();
window.app = appInstance;

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOM cargado, inicializando app...');
        appInstance.init();
    });
} else {
    console.log('DOM ya estaba cargado, inicializando app...');
    appInstance.init();
}