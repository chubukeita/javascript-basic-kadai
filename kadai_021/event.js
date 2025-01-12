// rewriteBtnというidを持つHTML要素
const rewriteBtn = document.getElementById("btn");
// textというidを持つHTML要素
const Msg = document.getElementById("text");

// HTML要素がクリックされたときにイベント処理を実行する
rewriteBtn.addEventListener("click", () => {
  // 2秒後にh2要素に「ボタンをクリックしました」というテキストに書き換える
  setTimeout(() => {
    Msg.textContent = "ボタンをクリックしました";
  }, 2000);
});
