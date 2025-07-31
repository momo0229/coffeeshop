// src/components/Header.tsx

import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="site-logo">
          <a href="/">
            {/* publicフォルダ内の画像へのパス */}
            <img src="./coffee-logo.jpg" alt="モダンなコーヒーショップロゴ" />
          </a>
        </div>

        {/* --- ここからナビゲーションを追加 --- */}
        <nav className="main-nav">
          <ul>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#menu">MENU</a></li>
            <li><a href="#gallery">GALLERY</a></li>
            <li><a href="#access">ACCESS</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>
        {/* --- ここまでナビゲーションを追加 --- */}

      </div>
    </header>
  );
};

export default Header;