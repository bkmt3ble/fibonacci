'use strict';
const memo = new Map();

//決まっているものなんで最初から入れておく
memo.set(0,0);
memo.set(1,1);

function fib(n){
    
    //メモにデータがあればそれを使う
    if (memo.has(n)){
        return memo.get(n);
    }else   {
        //メモにデータがないので計算する
        let value=fib(n-1)+fib(n-2);
        memo.set(n,value)
        return value;
    }
}
for (let i =0;i<=40;i++){
    console.log(i+"のフィボナッチ数は"+fib(i)+"です");
}
