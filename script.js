const list = [
  {
    src: "https://p4.wallpaperbetter.com/wallpaper/869/847/826/books-old-tomes-wallpaper-preview.jpg",
    name: "book",
  },
  {
    src: "https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29pbnxlbnwwfHwwfHw%3D&w=1000&q=80",
    name: "coin",
  },
];

const words = ["apple", "banana"];

// dom
const win = document.querySelector(".win");
const word = document.querySelector(".word");
const lose = document.querySelector(".lose");
const remain = document.querySelector(".remain");
const wrong = document.querySelector(".wrong");
const img = document.querySelector(".left img");

const game = {
  win: 0,
  lose: 0,
  remain: 13,
  wrong: [],
};

const getRandom = () => {
  const index = Math.floor(Math.random() * list.length);
  return list[index];
};
const display = () => {
  word.innerHTML = symbols.join("");
  win.innerHTML = game.win;
  lose.innerHTML = game.lose;
  remain.innerHTML = game.remain;
  wrong.innerHTML = choosingSymbols;
  img.src = chImg;
};

let symbols = [];
let choosingSymbols = [];
let chWord = "";
let chImg
const choosingWord = () => {
let object = getRandom()

  chWord = object.name;
chImg=object.src
};

const symbolFull = (chWord) => {
  symbols = [];
  for (const i of chWord) {
    if (choosingSymbols.includes(i)) {
      symbols.push(`${i}`);
    } else {
      symbols.push(" - ");
    }
    console.log("aa", symbols.join(""));
    console.log("aa", choosingSymbols);
  }
  display();
};

window.addEventListener("keyup", (e) => {
  if (!choosingSymbols.includes(e.key)) {
    choosingSymbols.push(e.key);
    console.log(choosingSymbols);
    symbolFull(chWord);
    game.remain -= 1;
    display();
  }
  if (symbols.includes(e.key)) {
    display();
  }
  console.log("a", symbols);

  if (chWord == symbols.join("")) {
    game.win += 1;
    game.remain = 13;
    choosingSymbols = [];
    choosingWord();
    symbolFull(chWord);
    display();
  }
  if (game.remain == 0) {
    game.lose += 1;
    game.remain = 13;
    choosingSymbols = [];
    choosingWord();
    symbolFull(chWord);
    display();
  }
});

choosingWord();
symbolFull(chWord);

display();
