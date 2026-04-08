var count = 1; // 設定計數器，追蹤目前是第幾個按鈕

function addfunction() {
  // 1. 建立一個全新的 <button> 元素
  var btn = document.createElement("BUTTON");
  
  // 2. 設定顯示文字 (使用樣板字串放入數字)
  btn.innerHTML = `CLICK ME (${count})`;
  
  // 3. 設定屬性：給它一個唯一的 ID (例如 btn_1) 並加上 Bootstrap 樣式
  btn.setAttribute("id", "btn_" + count++);
  btn.setAttribute("class", "btn btn-outline-danger");
  console.log(btn);
  // 4. 將這個按鈕放到 body 的最後面
  document.body.appendChild(btn);
}

function delfunction() {
  if (count > 1) {
    // 1. 找到最後一個按鈕的 ID (當前 count 減 1)
    var btn = document.getElementById("btn_" + --count);
    console.log(btn)
    // 2. 從 body 中移除這個子元素
    if (btn) {
      document.body.removeChild(btn);
    }
  }
}