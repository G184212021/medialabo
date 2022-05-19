// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae + ' //デバッグ用');      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;
let kaisul = 0;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    let yoso = 4;       // 第5回課題:テキストボックスの数値をここに代入
    kaisu += 1;
    kaisul += 1;
    let p = document.querySelector('p#result');
    let ys = document.querySelector('p#yoso');

    ys.textContent = kaisu + '回目の予想: ' + yoso;

    if(kotae === yoso && kaisul < 4){
        p.textContent = '正解です．おめでとう！';
        kaisul += 2;
    }
    else{
        if(kaisul !== 3 && kaisul < 4){
            if(kotae > yoso){
                p.textContent = 'まちがい．答えはもっと大きいですよ';
            }
            else{
                p.textContent = 'まちがい．答えはもっと小さいですよ';
            }
        }
        if(kaisul === 3 && kaisul < 4){
            p.textContent = 'まちがい．残念でした答えは' + kotae + 'です．';
        }
    }

    if(kaisul >= 4){
        p.textContent = '答えは' + kotae + 'でした．すでにゲームは終わっています';
    }
}
