// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae + ' //デバッグ用');      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;
let kaisul = 0;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
let b1 = document.querySelector('button#kaitou');
b1.addEventListener('click',hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    let yoso = document.querySelector('input[name="kazu"]');       // 第5回課題:テキストボックスの数値をここに代入
    kaisu += 1;
    kaisul += 1;
    let p = document.querySelector('p#result');
    let ys = document.querySelector('p#yoso');

    let yoso2 = yoso.value;

    ys.textContent = kaisu + '回目の予想: ' + yoso2;

    if(kotae == yoso2 && (kaisul < 4 || kaisul == 3)){
        p.textContent = '正解です．おめでとう！';
        kaisul += 2;
    }
    else{
        if(kaisul < 3){
            if(kotae > yoso2){
                p.textContent = 'まちがい．答えはもっと大きいですよ';
            }
            else{
                p.textContent = 'まちがい．答えはもっと小さいですよ';
            }
        }
        if(kotae !== yoso2 && kaisul === 3){
            p.textContent = 'まちがい．残念でした答えは' + kotae + 'です．';
        }
        if(kaisul >= 4){
            p.textContent = '答えは' + kotae + 'でした．すでにゲームは終わっています';
        }
    }
}
