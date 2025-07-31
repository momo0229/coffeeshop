import React from 'react';
import './App.css';
import Header from './components/Header'; // Headerコンポーネントが別途あると仮定

// ★追加: react-slickをインポート
import Slider from 'react-slick'; 

function App() {

  // ★追加: スライドショーの設定 (settings)
  const gallerySettings = {
    dots: true, // 下部にドットのナビゲーションを表示
    infinite: true, // 無限ループ
    speed: 500, // スライドの切り替え速度 (ms)
    slidesToShow: 1, // 一度に表示するスライドの枚数
    slidesToScroll: 1, // 一度にスクロールするスライドの枚数
    autoplay: true, // 自動再生
    autoplaySpeed: 3000, // 自動再生の間隔 (ms)
    arrows: true, // 前後ボタンを表示
    fade: true, // ★追加: スライドをフェードで切り替える
    cssEase: "linear" // フェード時のアニメーション
  };

  return (
    <div className="App">
      <Header /> {/* Headerコンポーネントをレンダリング */}

      <main>
        {/* ファーストビュー (メインビジュアル) セクション */}
        <section className="main-visual">
          <video className="main-visual-video" autoPlay loop muted playsInline>
            <source src="/coffeeshop.mp4" type="video/mp4" />
            お使いのブラウザは動画再生に対応していません。
          </video>
          <div className="main-visual-content">
            <h1>COFFEE VALLEY</h1>
            <p>こだわりの一杯が、あなたの一日を豊かにする</p>
          </div>
          <div className="main-visual-overlay"></div>
        </section>

        {/* --- メインコンテンツを中央に寄せるためのラッパー --- */}
        <div className="content-wrapper"> 
          {/* ABOUT US セクション */}
          <section id="about">
            <h2>ABOUT US</h2>
            <p>Coffee Valleyは、一杯一杯に心を込めて丁寧に淹れる、こだわりのコーヒーショップです。</p>
            <p>厳選された豆を使用し、焙煎から抽出まで、最高の状態でお客様にお届けします。</p>
          </section>

          {/* MENU セクション */}
          <section id="menu">
            <h2>MENU</h2>

            {/* おすすめメニューエリア */}
            <div className="recommended-menu">
              <h3>おすすめメニュー</h3>
              <div className="recommended-items">
                {/* おすすめアイテム1: カフェラテ */}
                <div className="recommended-item">
                  <img src="/coffee.jpg" alt="カフェラテ" className="recommended-item-img" />
                  <h4>カフェラテ</h4>
                  <p>深煎り豆とミルクのハーモニー、ラテアートもお楽しみください。</p>
                  <span className="recommended-item-price">600円</span>
                </div>

                {/* おすすめアイテム2: 特製サンドイッチ */}
                <div className="recommended-item">
                  <img src="/sandwich.jpg" alt="特製サンドイッチ" className="recommended-item-img" />
                  <h4>特製サンドイッチ</h4>
                  <p>新鮮野菜とハム、チーズを挟んだ、ランチにおすすめのボリューム満点サンド。</p>
                  <span className="recommended-item-price">850円</span>
                </div>

                {/* おすすめアイテム3: チーズケーキ */}
                <div className="recommended-item">
                  <img src="/cheezecake.jpg" alt="チーズケーキ" className="recommended-item-img" />
                  <h4>チーズケーキ</h4>
                  <p>濃厚なクリームチーズのコクと、レモンの爽やかさが絶妙な一品。</p>
                  <span className="recommended-item-price">580円</span>
                </div>
              </div>
            </div>

            {/* 全メニューリスト */}
            <h3>全メニュー</h3>
            <div className="menu-container"> 
              {/* Coffee カテゴリ */}
              <div className="menu-category">
                <h3>Coffee</h3>
                <ul className="menu-list">
                  <li>
                    <span className="menu-item-name">本日のコーヒー</span>
                    <span className="menu-item-price">500円</span>
                  </li>
                  <li>
                    <span className="menu-item-name">カフェラテ</span>
                    <span className="menu-item-price">600円</span>
                  </li>
                  <li>
                    <span className="menu-item-name">カプチーノ</span>
                    <span className="menu-item-price">600円</span>
                  </li>
                  <li>
                    <span className="menu-item-name">エスプレッソ</span>
                    <span className="menu-item-price">450円</span>
                  </li>
                </ul>
              </div>

              {/* Tea & Other Drinks カテゴリ */}
              <div className="menu-category">
                <h3>Tea & Other Drinks</h3>
                <ul className="menu-list">
                  <li>
                    <span className="menu-item-name">ダージリン</span>
                    <span className="menu-item-price">550円</span>
                  </li>
                  <li>
                    <span className="menu-item-name">抹茶ラテ</span>
                    <span className="menu-item-price">650円</span>
                  </li>
                  <li>
                    <span className="menu-item-name">フレッシュジュース</span>
                    <span className="menu-item-price">700円</span>
                  </li>
                </ul>
              </div>

              {/* Food & Sweets カテゴリ */}
              <div className="menu-category">
                <h3>Food & Sweets</h3>
                <ul className="menu-list">
                  <li>
                    <span className="menu-item-name">特製サンドイッチ</span>
                    <span className="menu-item-price">850円</span>
                  </li>
                  <li>
                    <span className="menu-item-name">チーズケーキ</span>
                    <span className="menu-item-price">580円</span>
                  </li>
                  <li>
                    <span className="menu-item-name">季節のタルト</span>
                    <span className="menu-item-price">620円</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* GALLERY セクション ★スライドショーに変更★ */}
          <section id="gallery">
            <h2>GALLERY</h2>
            <p>店内の雰囲気や、美しいコーヒー、スイーツの写真をご覧ください。</p>
            <div className="slider-container"> {/* スライドショー全体を囲むコンテナを追加 */}
              <Slider {...gallerySettings}> {/* Sliderコンポーネントを使用 */}
                <div className="gallery-slide-item"> {/* 各スライドアイテム */}
                  <img src="./shop.jpg" alt="Coffee Valley 店内の様子" />
                </div>
                <div className="gallery-slide-item">
                  <img src="./barista.jpg" alt="丁寧に淹れるコーヒー" />
                </div>
                <div className="gallery-slide-item">
                  <img src="/cheezecake.jpg" alt="美味しそうなスイーツ" />
                </div>
                
                {/* 必要に応じてさらに画像を追加できます */}
              </Slider>
            </div>
          </section>

          {/* ACCESS セクション (Googleマップ埋め込み) */}
          <section id="access">
            <h2>ACCESS</h2>
            <p>Coffee Valleyへのアクセスはこちら</p>
            <div className="map-container">
              {/* Googleマップの埋め込みURLを正確に置き換えてください */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.747959083321!2d139.767124815258!3d35.68123618019409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfe75f4d1e9%3A0x6d97e2311f93f77c!2z5p2x5Lyd5bqD6aeF!5e0!3m2!1sja!2sjp!4v1678873000000!5m2!1sja!2sjp"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Coffee Valley アクセスマップ"
              ></iframe>
            </div>
            <p>
              住所：東京都渋谷区○○ 1-2-3<br />
              （渋谷駅から徒歩5分）
            </p>
          </section>

          {/* CONTACT セクション */}
          <section id="contact">
            <h2>CONTACT</h2>
            <p>ご予約やお問い合わせはこちらから。</p>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">お名前</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">メールアドレス</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">お問い合わせ内容</label>
                <textarea id="message" name="message" rows={6} required></textarea>
              </div>
              <button type="submit" className="submit-button">送信する</button>
            </form>
          </section>
        </div> {/* --- content-wrapper の閉じタグ --- */}
      </main>

      {/* フッター */}
      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-contact-info">
            <h3>店舗情報</h3>
            <p>Coffee Valley</p>
            <p>東京都渋谷区○○ 1-2-3</p>
            <p>TEL: 03-XXXX-XXXX</p>
            <p>営業時間: 10:00 - 20:00</p>
            <p>定休日: 不定休</p>
          </div>
          <div className="footer-sns">
            <h3>SNS</h3>
            <ul className="sns-icons">
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright">
          <p>© 2025 Coffee Valley. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;