'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const start = document.getElementById('start'); // 開始ボタン
const TaeTae = document.getElementById('taetae');

// スタートボタンをクリックしたら
start.addEventListener('click', () => {
    // 画像を左端から右に動かす
    TaeTae.animate(
      // 途中の状態を表す配列
      [
        { transform: 'translateX(0)'}, // 開始時の状態（左端）
        { transform: 'translateX(500px)' } // 終了時の状態
      ], 
    //   タイミングに関する設定
      {
        fill: 'backwards', // 再生前後の状態（再生前、開始時の状態を適用）
        duration: 1000, // 再生時間（1000ミリ秒）
      },
    );
  });

  const Come = document.getElementById('come'); // 開始ボタン
  Come.addEventListener('click', () => {
    // 画像を動かす
    TaeTae.animate(
      // 途中の状態を表す配列
      [
        { height: "250px" }, // 開始時の状態（左端）
        { height: "550px" } // 終了時の状態
      ], 
    //   タイミングに関する設定
      {
        fill: 'backwards', // 再生前後の状態（再生前、開始時の状態を適用）
        duration: 1000, // 再生時間（1000ミリ秒）
      },
    );
  });

  const Turn = document.getElementById('turn'); // 開始ボタン
  Turn.addEventListener('click', () => {
    // 画像を動かす
    TaeTae.animate(
      // 途中の状態を表す
      [
        { transform: 'rotate(0deg)'}, // 開始時の状態（0度）
        { transform: 'rotate(360deg)' } // 終了時の状態（360度）
      ], 
      // タイミングに関する設定
      {
        fill: 'backwards', // 再生前後の状態（再生前、開始時の状態を適用）
        duration: 1000, // 再生時間（1000ミリ秒）
      },
    );
  });

  let counter;
  let n = 0;
  function addCount(){
      n++;
      if (n < 10) {
        return  counter.innerHTML = `遊んだ回数 <bold>${n}</bold><br>10回遊んでね🐕`;
      } else {
        counter.innerHTML = `ご褒美をあげる`;
        // ボタンを出現させる
        oyatsubotan.appendChild(tbtn);
        ohanamibotan.appendChild(flower_btn);
  }
}

// 10回おしたあとの動き
// ボタン要素を作成
let tbtn = document.createElement("button");
let flower_btn = document.createElement("button");
let reset_btn = document.createElement("button");

// ボタンのテキストを設定
tbtn.innerHTML = "おやつをあげる🍪";
flower_btn.innerHTML = "お花見にいく🌸";
reset_btn.innerHTML = "もう一度あそぶ🦴";
// ボタンを追加する場所を選択
let oyatsubotan = document.getElementById("oyatsu");
let ohanamibotan = document.getElementById("ohanami");
let resetbotan = document.getElementById("reset");


// おやつをあげると、画像がかわる
oyatsubotan.addEventListener("click", inu);
function inu(){
   //"'taetae'"というIDを取得して、そのsrcをsrc="tae.png"に変更する
  document.getElementById("taetae").src="oyatsu.png"
}

// お花見にいく
ohanamibotan.addEventListener("click", ohanami);
function ohanami(){
   //"'taetae'"というIDを取得して、そのsrcをsrc="tae.png"に変更する
  document.getElementById("taetae").src="tae.png"
}

// resetする
resetbotan.addEventListener("click", reset);
function reset(){
  window.location.reload();
}

//おやつボタンを押すとresetボタンが表示される
oyatsubotan.addEventListener("click", resetAppear);
function resetAppear(){
  resetbotan.appendChild(reset_btn);
}
//おやつボタンを押したときにコメントが消える

//おはなみボタンを押すとresetボタンが表示される
ohanamibotan.addEventListener("click", resetAppear);
function resetAppear(){
  resetbotan.appendChild(reset_btn);
}

counter = document.getElementById("counter");

// RUNボタン → カウント+1
const btnAdd = document.getElementById('start');
btnAdd.addEventListener("click", addCount);

// COMEボタン → カウント+1
const btnAddCome = document.getElementById('come');
btnAddCome.addEventListener("click", addCount);

// TURNボタン → カウント+1
const btnAddTurn = document.getElementById('turn');
btnAddTurn.addEventListener("click", addCount);

