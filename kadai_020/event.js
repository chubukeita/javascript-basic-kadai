// btnというidを持つHTML要素
const rewriteBtn = document.getElementById("btn");

// HTML要素がクリックされたときにイベント処理を実行する
rewriteBtn.addEventListener("click", () => {
  // textというidを持つHTML要素
  const Msg = document.getElementById("text");
  // h2要素に「ボタンをクリックしました」というテキストに書き換える
  Msg.textContent = "ボタンをクリックしました";
});
