// 定義資料來源 URL
var openUrl = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";

// 1. 建立 XMLHttpRequest 物件
var xhr = new XMLHttpRequest();

// 2. 初始化請求：使用 GET 方法，非同步執行 (true)
xhr.open('GET', openUrl, true);

// 3. 發送請求
xhr.send();

// 4. 監聽狀態改變事件
xhr.onreadystatechange = function() {
    // 當 readyState 為 4 (完成) 且 status 為 200 (OK) 時執行
    if (this.readyState == 4 && this.status == 200) {
        // 將接收到的 JSON 字串解析為 JavaScript 物件
        var dataset = JSON.parse(this.responseText);
        // 呼叫函式將資料加入表格
        addNewData(dataset);
    }
};

// 定義處理資料並更新 DOM 的函式
function addNewData(dataset) {
    // 取得 HTML 中的表格物件
    var myTable = document.getElementById("csie");
    
    // 遍歷資料集中的每一筆資料
    dataset.forEach(function(data, index) {
        // 在表格最後方新增一行 (-1 代表最後)
        var row = myTable.insertRow(-1);
        
        // 新增第一個儲存格 (索引 0)：放入標題
        row.insertCell(0).innerHTML = data['title'];
        
        // 新增第二個儲存格 (索引 1)：放入地點
        // 注意：地點資料層級較深，位於 showInfo 陣列的第一個元素中
        row.insertCell(1).innerHTML = data['showInfo'][0]['location'];
        
        // 新增第三個儲存格 (索引 2)：放入票價
        row.insertCell(2).innerHTML = data['showInfo'][0]['price'];
    });
};
function delOldData() {
    var myTable = document.getElementById("csie"); // 取得表格
    var rowCount = myTable.rows.length;           // 取得目前總行數
    
    // 如果行數大於 1 (保留第 0 行的標題)
    if (rowCount > 1) {
        // 刪除最後一行 (索引值為 總行數 - 1)
        myTable.deleteRow(rowCount - 1);          //
    }
}