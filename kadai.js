'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const start = document.getElementById('start'); // 開始ボタン
const TaeTae = document.getElementById('taetae');

// スタートボタンをクリックしたら
start.addEventListener('click', () => {
    // 画像を左端から200px右に動かす
    TaeTae.animate(
      // 途中の状態を表す配列
      [
        { transform: 'translateX(0)'}, // 開始時の状態（左端）
        { transform: 'translateX(500px)' } // 終了時の状態（左端から200pxの位置）
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
    // 画像を左端から200px右に動かす
    TaeTae.animate(
      // 途中の状態を表す配列
      [
        { width: '150px'}, // 開始時の状態（左端）
        { width: '320px' } // 終了時の状態（左端から200pxの位置）
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
    // 画像を左端から200px右に動かす
    TaeTae.animate(
      // 途中の状態を表す配列
      [
        { transform: 'rotate(0deg)'}, // 開始時の状態（0度）
        { transform: 'rotate(360deg)' } // 終了時の状態（360度）
      ], 
    //   タイミングに関する設定
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
      // counter.innerHTML = `遊んだ回数 ${n}`;
      if(n >= 10){
        return  counter.innerHTML = `おやつ！`;
        creat
      } else {
        counter.innerHTML = `遊んだ回数 <bold>${n}</bold>`;
  }}

counter = document.getElementById("counter");

// RUNボタン
const btnAdd = document.getElementById('start');
btnAdd.addEventListener("click", addCount);

// COMEボタン
const btnAddCome = document.getElementById('come');
btnAddCome.addEventListener("click", addCount);

// TURNボタン
const btnAddTurn = document.getElementById('turn');
btnAddTurn.addEventListener("click", addCount);

