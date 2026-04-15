var container = document.getElementById('container');

// 初始設定時呼叫，產生 1~3 個隨機字元
window.onload = function() {
    container.textContent = add_new_chars(3);
}

// 修改後的函式：增加了一個參數 b，預設為 true
function add_new_chars(x, b = true) {
    var n = x;
    // 如果 b 為 true，則 n 會變成 1 ~ x 之間的隨機數
    if (b) {
        n = Math.floor(Math.random() * x) + 1;
    }
    
    var str = '';
    for (let i = 0; i < n; i++) {
        // 產生 a-z 的隨機字元
        str += String.fromCharCode(97 + Math.floor(Math.random() * 26));
    }
    return str;
};

// 宣告計數器
var counter = 0;

window.addEventListener("keyup", function(e) {
    // 取得目前字串的第一個字
    var firstone = container.textContent.substring(0, 1);
    
    if (e.key == firstone) {
        // 打對了：移除第一個字，且不增加計數器
        container.textContent = container.textContent.substring(1, container.textContent.length);
    } else {
        // 打錯了：
        // 1. 將打錯的字加進去
        container.textContent += e.key;
        
        // 2. 檢查連錯次數。注意這裡用了 counter++
        // 邏輯：第 1 次錯(0), 第 2 次錯(1), 第 3 次錯(2) 觸發處罰
        if (counter++ >= 2) {
            // 處罰：固定增加 6 個字元 (因為第二個參數傳 false)
            container.textContent += add_new_chars(6, false);
            // 重置計數器
            counter = 0;
        }
    }

    // 不論對錯，每回合原本就要增加的隨機字元 (1~3個)
    container.textContent += add_new_chars(3);
});