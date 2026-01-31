
/* =========================================
    VERCEL SPEED INSIGHTS
========================================= */
import { injectSpeedInsights } from '@vercel/speed-insights';
injectSpeedInsights();

// PWA
import { registerSW } from 'virtual:pwa-register'
registerSW({ immediate: true })

/* =========================================
    DATOS (Hiragana, Katakana, Kanji)
========================================= */

const data = {
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

const app = {

    currentMode: 'hiragana', // Por defecto
    container: document.getElementById('card-container'),

    // Inicializar
    init: function () {
        this.setMode('hiragana');

        // Cerrar dropdown si se hace clic fuera OK
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.dropdown')) {
                document.querySelector('.dropdown').classList.remove('show');
            }
        });
    },

    // Cambiar Modo
    setMode: function (mode) {
        this.currentMode = mode;

        // Actualizar estilo de botones (Active state)
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

        if (mode === 'hiragana') document.getElementById('btn-hiragana').classList.add('active');
        else if (mode === 'katakana') document.getElementById('btn-katakana').classList.add('active');
        else if (mode.includes('kanji')) document.getElementById('dropdown-kanji').classList.add('active');

        // Ocultar dropdown tras selección
        document.querySelector('.dropdown').classList.remove('show');

        this.renderCards();
    },

    // Mostrar/Ocultar Dropdown en móvil
    toggleDropdown: function () {
        const dropdown = document.querySelector('.dropdown');
        dropdown.classList.toggle('show');
    },

    // Obtener elementos aleatorios
    getRandomItems: function (arr, n) {
        const result = new Array(n);
        let len = arr.length;
        const taken = new Array(len);
        if (n > len) throw new RangeError("getRandom: más elementos requeridos que disponibles");
        while (n--) {
            const x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    },

    // Recargar tarjetas
    reloadCards: function () {
        // Pequeña animación visual de recarga (opcional)
        this.container.style.opacity = '0';
        setTimeout(() => {
            this.renderCards();
            this.container.style.opacity = '1';
        }, 200);
    },

    // Renderizar HTML
    renderCards: function () {
        this.container.innerHTML = ''; // Limpiar
        let items = [];
        let isSingleCard = false;

        // Seleccionar datos según modo
        switch (this.currentMode) {
            case 'hiragana':
                items = this.getRandomItems(data.hiragana, 6);
                break;
            case 'katakana':
                items = this.getRandomItems(data.katakana, 6);
                break;
            case 'kanji-n5':
                items = this.getRandomItems(data.kanjiN5, 1);
                isSingleCard = true;
                break;
            case 'kanji-n4':
                items = this.getRandomItems(data.kanjiN4, 1);
                isSingleCard = true;
                break;
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

            // Manejar rotación al hacer clic
            card.onclick = function () {
                this.classList.toggle('flipped');
            };

            // Contenido de la tarjeta (Anverso y Reverso)
            let backContent = '';

            if (this.currentMode.includes('kanji')) {
                // Estructura para Kanji
                backContent = `
                            <h3>${item.meaning}</h3>
                            <p><strong>On:</strong> ${item.onyomi}</p>
                            <p><strong>Kun:</strong> ${item.kunyomi}</p>
                        `;
            } else {
                // Estructura para Kana
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


};

// Arrancar app
window.app = app;

// Asegurar que el DOM esté listo antes de iniciar
document.addEventListener("DOMContentLoaded", () => {
    app.init();
});
