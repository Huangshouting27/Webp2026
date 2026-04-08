// 輔助函式：產生指定長度的隨機 a-z 字串
function generateRandomString(length) {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

// 2. window.onload 時，初始產生 0~2 個字元
window.onload = function() {
    const container = document.getElementById("container");
    const initialLength = Math.floor(Math.random() * 3); // 產生 0, 1, 2
    container.innerHTML = generateRandomString(initialLength);
    // 自動聚焦，讓使用者不用點擊就能打字
    container.focus(); 
};

// 4. 監聽 keyup 事件
window.addEventListener("keyup", function(e) {
    const container = document.getElementById("container");
    let currentText = container.innerHTML;

    // 3. 如果打入的字元和第一個字相等時，消除該字元
    if (currentText.length > 0 && e.key === currentText[0]) {
        currentText = currentText.substring(1); // 從索引 1 開始取到最後，等於刪掉第 0 個
    }

    // 更新容器內容
    container.innerHTML = currentText;

    // 執行亂數增加 1~3 個字元接在後面
    add_new_chars();
});

function add_new_chars() {
    const container = document.getElementById("container");
    const randomAdd = Math.floor(Math.random() * 3) + 1; // 產生 1, 2, 3
    container.innerHTML += generateRandomString(randomAdd);
}