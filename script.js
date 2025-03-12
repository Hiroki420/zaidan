// ボタンのパルスアニメーション
document.addEventListener('DOMContentLoaded', function() {
  // パルスアニメーション用のボタン要素を取得
  const button = document.getElementById('pulse-button');
  
  // 3秒おきにパルスアニメーションを実行
  setInterval(function() {
    // ボタンを少し大きくして影を強調
    button.style.transform = 'scale(1.05)';
    button.style.boxShadow = '0 5px 20px rgba(0, 39, 189, 0.4)';
    
    // 0.5秒後に元のサイズと影に戻す
    setTimeout(function() {
      button.style.transform = 'scale(1)';
      button.style.boxShadow = '0 3px 10px rgba(0, 39, 189, 0.2)';
    }, 500);
  }, 3000);
  
  // ボタンクリック時のイベント（採用ページへの誘導）
  button.addEventListener('click', function() {
    alert('沖縄県健康づくり財団の採用ページへ移動します。');
    // 実際にはこの部分を下記のようにリダイレクトに変更
    // window.location.href = "https://www.okinawa-kenko.jp/recruit";
  });
});
