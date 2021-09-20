const allGame = [
    { 'name': 'Horizontal footbridge', 'color': ["yellow", "green", "blue"] }, { name: 'Duck Steps', color: ["yellow", "green", "blue", "red", "black"] }, { name: 'Net_s tunnel', color: ["yellow", "green", "blue"] }, { name: 'Net_s path', color: ["yellow", "green", "blue", "red", "black"] }, { name: 'Monkey bridge', color: ["yellow", "green", "blue"] }, { name: 'Rolling logs', color: ["blue", "red", "black"] }, { name: 'Swinging Plates', color: ["green", "blue"] }, { name: 'Horizontal ladder', color: ["yellow", "green", "blue"] }, { name: 'Giant’s step', color: ["yellow", "green", "blue"] }, { name: 'Barrels', color: ["yellow", "green"] }, { name: 'Japanese footbridge Large and Small', color: ["yellow", "green", "blue"] }, { name: 'Swinging trunks', color: ["yellow", "green", "blue", "red", "black"] }, { name: 'Flat net', color: ["yellow", "green", "blue", "red", "black"] }, { name: 'Swings', color: ["yellow", "green", "blue", "red", "black"] }, { name: 'Surprise', color: ["blue", "red", "black"] }, { name: 'Lengthwise logs', color: ["yellow", "green", "blue"] }, { name: 'Swingplates and swings', color: ["yellow", "green", "blue", "red", "black"] }, { name: 'Parallell stirrups', color: ["blue", "red", "black"] }, { name: 'Surprise footbridge', color: ["yellow", "green", "blue"] }, { name: 'Disc bridge', color: ["yellow", "green", "blue"] }, { name: 'Mushrooms', color: ["yellow", "green"] }, { name: 'Lengthwise boards', color: ["yellow", "green"] }, { name: 'Alternated swings', color: ["yellow", "green", "blue", "red", "black"] }, { name: 'Dominoes', color: ["blue", "red", "black"] }, { name: 'Moving bridge', color: ["blue", "red", "black"] }, { name: 'Foot obstacle', color: ["yellow", "green"] }, { name: 'DNA bridge', color: ["red", "black"] }, { name: 'Norvejskii park (Alphabet footbridge)', color: ["yellow", "green"] }, { name: 'Gothic footbridge', color: ["yellow", "green", "blue"] }, { name: 'Accordion footbridge', color: ["yellow", "green", "blue"] }, { name: 'Stilts', color: ["blue", "red", "black"] }, { name: 'Tip over trunks', color: ["yellow", "green", "blue"] }, { name: 'Wazzah jump', color: ["yellow", "green", "blue", "red", "black"] }, { name: 'Pirogue bridge', color: ["blue", "red"] }, { name: 'Rolling footbridge', color: ["red", "black"] }, { name: 'Swingplates', color: ["yellow", "green", "blue"] }, { name: 'Wire-fiber horizontal ladder', color: ["yellow", "green", "blue"] }, { name: 'Zigzag footbridge', color: ["yellow", "green", "blue"] }, { name: 'Zigzag swings', color: ["yellow", "green", "blue", "red", "black"] }, { name: 'Balanced ropes', color: ["blue", "red", "black"] }, { name: 'Flea_s jump', color: ["yellow", "green", "blue"] }, { name: 'High net', color: ["yellow", "green", "blue", "red", "black"] }, { name: 'Ropes with trays', color: ["red", "black"] }, { name: 'Hanging trunks', color: ["blue", "red", "black"] }, { name: 'Rope bridge', color: ["blue", "red", "black"] }, { name: 'In-line rope bridge', color: ["blue", "red", "black"] }, { name: 'Zigzag rope bridge', color: ["blue", "red", "black"] }, { name: 'Alternated rope bridge', color: ["blue", "red", "black"] }, { name: 'Pyramids', color: ["red", "black"] }, { name: ' Balanced jumps', color: ["blue", "red", "black"] }, { name: 'Parrot_s trunk 45DEG', color: ["red", "black"] }, { name: 'Simple parrot_s trunk', color: ["blue", "red", "black"] }, { name: 'Hanging Swings', color: ["blue", "red", "black"] }, { name: 'Hanging parallell stirrups', color: ["red", "black"] }, { name: 'Hanging discs ( Beam plates)', color: ["blue", "red", "black"] }, { name: 'Lateral trapeze', color: ["red", "black"] }, { name: 'Floating nets', color: ["red", "black"] }, { name: 'Alternated floating net', color: ["blue", "red", "black"] }, { name: 'Sliding net', color: ["yellow", "green", "blue", "red", "black"] }, { name: 'Ambush', color: ["blue", "red", "black"] }, { name: 'Vertical Net', color: ["yellow", "green", "blue", "red", "black"] }, { name: 'Popeae beam', color: ["red", "black"] }, { name: 'Zig-zag trapeziums', color: ["red", "black"] }, { name: 'Alternated trapeziums', color: ["blue", "red", "black"] }, { name: 'Flying carpet', color: ["blue", "red"] }, { name: 'Tilting ropes', color: ["red", "black"] }, { name: 'Slalom ropes', color: ["yellow", "green", "blue", "red", "black"] }, { name: 'Passage of Fisherman', color: ["blue", "red"] }, { name: 'Hanging Swingplates', color: ["blue", "red", "black"] }, { name: 'Elastic Trapeziums', color: ["red", "black"] }, { name: 'Tibetian bridge', color: ["yellow", "green", "blue", "red", "black"] }, { name: 'Acrobat ropes', color: ["black"] }, { name: 'Hanging stirrups', color: ["red", "black"] }, { name: 'Popeye with swings', color: ["black"] }, { name: 'Popeye', color: ["black"] }, { name: 'Slalom planks', color: ["yellow", "green", "blue", "red", "black"] }, { name: 'Climbing planks', color: ["blue", "red", "black"] }, { name: 'Balanced ropes attached in both ends', color: ["blue", "red", "black"] }, { name: 'Horizontal climbingwall', color: ["yellow", "green"] }, { name: 'Arms logs', color: ["blue", "red", "black"] }, { name: 'Tibetian bridge', color: ["yellow", "green", "blue", "red", "black"] }, { name: 'Spider net', color: ["yellow", "green"] }, { name: 'Wave bridge', color: ["green", "blue"] }, { name: 'Uneven Circles', color: ["blue", "red"] }, { name: 'Floating ropes', color: ["blue", "red", "black"] }, { name: 'Hanging Logs', color: ["blue", "red", "black"] }, { name: 'Jaggy Swings', color: ["black"] }, { name: 'Floating horizontal footbridge', color: ["yellow", "green", "blue", "red", "black"] }, { name: 'Floatting ladder', color: ["red", "black"] }, { name: 'Sliding steps', color: ["yellow", "green"] }, { name: 'Multiple sliding steps', color: ["green", "blue", "red", "black"] }, { name: 'Skittles', color: ["yellow", "green", "blue"] }, { name: 'Laying trunk', color: ["yellow", "green"] }, { name: 'Sledge', color: ["yellow", "green", "blue"] }, { name: 'Cocos nut-the ball', color: ["yellow", "green", "blue", "red", "black"] }, { name: 'Surf', color: ["blue", "red", "black"] }, { name: 'Tightrope rope', color: ["yellow", "green", "blue", "red", "black"] }, { name: 'X-planks rolling', color: ["blue", "red", "black"] }, { name: 'Rolling parrot', color: ["green", "blue"] }, { name: 'Flying stirrups france', color: ["red", "black"] }, { name: 'Rolling basket', color: ["yellow", "green", "blue"] }, { name: 'Rolling trapeze', color: ["green", "blue", "red"] }, { name: 'Flying stirrup', color: ["blue", "red", "black"] }, { name: 'Lift', color: ["blue", "red", "black"] }, { name: 'Mini Tarzan', color: ["blue", "red", "black"] }, { name: 'Flying Trapeze', color: ["blue", "red", "black"] }, { name: 'Tarzan jump', color: ["red", "black"] }, { name: 'Unicycle', color: ["blue", "red", "black"] }, { name: 'Tree bike', color: ["blue", "red"] }, { name: 'Tightrope walk', color: ["yellow", "green", "blue", "red", "black"] }]
console.log(allGame)
//случайная генерация трассы
function allTrackRandomizer() {
    let select = this.parentElement.querySelectorAll('.slt')
    select.forEach(select => {
        //console.log(select);
        select.selectedIndex = Math.floor(Math.random() * 10);
        select.dispatchEvent(new Event("change"))
    });
};

// загатовка этапа
const zagotovka = " <form id='form'>\
<img  class='img' src='img/page_0000.jpg' height=240 width=350 >\
<select class=slt>\
</select>\
</form>";
// типичный этап

let segment = {     // объект
name: "Zig zag trapeziums",  // под ключом "name" хранится значение "John"
min_maxLanght: [10, 100],        // под ключом "age" хранится значение 30
complexity: 5, // сложность от 1 до 5
attractiveness: 5, // привлекательность от 1 до 5
price: 5,// цена за 1 метр
acceptableСolors: ['blue', 'grean']
};

// Список этапов
let allTrack = ['Zig zag trapeziums', 'Rope bridge', 'Spaghetti bridge', 'Trapeziums', 'High ropes swing plates', 'Horizontal ladder', 'Net path', 'Barrels', 'Climbing planks', 'Horizontal net']

//Генерация списка этапов в селект
function addSelect() {
    const select = document.querySelectorAll('.slt');
    select.forEach(select => {
        select.addEventListener('change', chngImg);
        for (var i = 0; i < allGame.length; i++) {
            var opt = document.createElement('option');
            opt.value = allGame[i].name;
            opt.innerHTML = allGame[i].name;
            select.appendChild(opt);
        }
    })
}

// создаем трасу
function addTrack(color) { //принимает цвет трасы 
    let genBtn = document.createElement("button");
    let main = document.getElementById('main')
    //document.getElementById("trac").remove()
    genBtn.innerHTML = '🎲'
    genBtn.addEventListener('click', allTrackRandomizer)
    trac = addSegment(document.getElementById("input_id").value);
    trac.classList.add("trac");
    trac.prepend(genBtn);
    main.append(trac);
}
addTrack('blue') //test

// добавляем этапы
function addSegment(segmenAmount) {
    let main = document.createElement("div");
    for (let i = 0; i < segmenAmount; i++) {
        let segment = document.createElement("div");
        segment.innerHTML = zagotovka;
        segment.classList.add("segment");
        main.appendChild(segment);
    }
    return main;
}
addSelect()

//смена рисунка этапа в зависимости от выбора в селект
function chngImg(eve) {
    let img = this.parentElement.querySelector('.img');
    let chois = this.parentElement.querySelector('.slt').value;
    img.src = "img/" + chois + ".jpg";
};
