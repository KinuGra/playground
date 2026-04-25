'use strict';

// 呼び出し側に起因する処理でもコード全体が停止しないように例外処理

// try catch finally命令
let i = 1;

const co = (arg) => {console.log(arg)}

try {
    i = i * j;
} catch(e) {
    console.log(`${e.name}: ${e.message}`);
} finally {
    console.log("例外は完了しました。");
    // ここで後片付けをする
    // DB接続を閉じる、ファイルを閉じる
}

try {
    i = i * j;
} catch {
    ;
}

try {
    i = i * j;
} catch{} finally {
    co("finally")
}

let x = 1;
let y = 0;
try{
    if(y === 0) {
        throw new Error('0で除算しようとしました');
    }
    let z = x / y;
} catch(e) {
    co(e.message);
}

