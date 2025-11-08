    const hiragana = {
        あ: 'a',
        い: 'i',
        う: 'u',
        え: 'e',
        お: 'o',
        か: 'ka',
        き: 'ki',
        く: 'ku',
        け: 'ke',
        こ: 'ko',
        さ: 'sa',
        し: 'shi',
        す: 'su',
        せ: 'se',
        そ: 'so',
        た: 'ta',
        ち: 'chi',
        つ: 'tsu',
        て: 'te',
        と: 'to',
        な: 'na',
        に: 'ni',
        ぬ: 'nu',
        ね: 'ne',
        の: 'no',
        は: 'ha',
        ひ: 'hi',
        ふ: 'fu',
        へ: 'he',
        ほ: 'ho',
        ま: 'ma',
        み: 'mi',
        む: 'mu',
        め: 'me',
        も: 'mo',
        や: 'ya',
        ゆ: 'yu',
        よ: 'yo',
        ら: 'ra',
        り: 'ri',
        る: 'ru',
        れ: 're',
        ろ: 'ro',
        わ: 'wa',
        を: 'wo',
        ん: 'n',
    };

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const array = Object.entries(hiragana);
    // const arr = array.sort(() => Math.random() - 0.5).slice(0, 6)
    const arr = shuffle([...array]).slice(0, 6);

    // console.log(arr);

    const $flip_card = document.querySelectorAll(".flip-card");
    const $flip_front = document.querySelectorAll(".flip-front");
    const $flip_back = document.querySelectorAll(".flip-back");

    console.log($flip_card);
    

    $flip_front.forEach((el, index) => {
        el.innerHTML = arr[index][0]
    });

    $flip_back.forEach((el, index) => {
        el.innerHTML = arr[index][1]
    });

    // $flip_card.forEach((el) => {

    //     el.addEventListener("click", () => {
    //         el.style.transform = "rotateY(180deg)"
    //     })

    //     el.addEventListener("mouseleave", () => {
    //         el.style.transform = "rotateY(0deg)"
    //     })
    // })


    $flip_card.forEach((el) => {

        el.addEventListener("click", (e) => {
            console.log(e.target);
            
            el.classList.toggle("flip-180")
        })
    })