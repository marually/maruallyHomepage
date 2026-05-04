import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import TopNavBar from '../../components/TopNavBar';
import LottieAnimation from '../../components/LottieAnimation';
import './Driver.css';

// Reusing assets from Home for Footer
import socialIcon1 from '../../assets/zB0X7.png';
import socialIcon2 from '../../assets/ofqtO.png';

// Driver page assets
import driverHeroUrl from '../../assets/driveAssets/driveHero.json?url';
import googleIcon from '../../assets/google.png';
import appleIcon from '../../assets/apple.png';
import manycarmageUrl from '../../assets/driveAssets/manycar.png';
import busAdUrl from '../../assets/driveAssets/busAd.png';
import topcarAdUrl from '../../assets/driveAssets/topcarAD.png';
import phoneDriverUrl from '../../assets/phoneDriver.json?url';
import phoneStop from '../../assets/driveAssets/phoneStop.png';

// Import new SVG assets
import signupIcon from '../../assets/driveAssets/1signup.svg';
import shakeHandIcon from '../../assets/driveAssets/2shakeHand.svg';
import signIcon from '../../assets/driveAssets/3sign.svg';
import deliveryIcon from '../../assets/driveAssets/4delivery.svg';
import stickerIcon from '../../assets/driveAssets/5sticker.svg';
import carIcon from '../../assets/driveAssets/6driver.svg';
import playCircleIcon from '../../assets/driveAssets/play_circle.svg';
import sensorIcon from '../../assets/driveAssets/sensor.svg';
import magnetIcon from '../../assets/driveAssets/magnet.svg';
import formImage from '../../assets/driveAssets/formimage.png';

const Driver = () => {
  const [imageDataVisible, setImageDataVisible] = useState(false);
  const imageDataRef = useRef();

  useEffect(() => {
    const currentRef = imageDataRef.current;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setImageDataVisible(true);
        } else {
          // 2. 화면에서 완전히 나가면 false (이게 있어야 반복됩니다!)
          setImageDataVisible(false);
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const location = useLocation();

  useEffect(() => {
    if (location && location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        // small delay to ensure element is rendered
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
      }
    }
  }, [location]);

  return (
    <div className="driver-page">
      <TopNavBar />

      {/* 1. Hero Section */}
      <section className="driver-hero">
        <div className="driver-hero__bg">
          <LottieAnimation animationPath={driverHeroUrl} className="lottie-driver-hero" />
          <div className="driver-hero__overlay"></div>
        </div>
        <div className="driver-hero__content">
          <h1 className="driver-hero__title">
            <span className="text-highlight">‘마루알리’</span>어플을 설치하여<br />땀 없이 기쁨을 누리세요.
          </h1>
          <div className="driver-hero__buttons">
            <button className="store-btn">
              <img src={googleIcon} alt="Google Play" className="store-icon" />
            </button>
            <button className="store-btn">
              <img src={appleIcon} alt="App Store" className="store-icon" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Data Measurement Section */}
      <section className="driver-data">
        <div className="driver-data__inner">
          <h2 className="driver-data__title">데이터로 측정하여<br className="mobile-break" /> 모든 차량이 광고 할 수 있습니다.</h2>
          <p className="driver-data__desc">
            마루알리는 데이터로 광고운행을 측정하므로 어떤 차종이든 최적의 광고주와 매칭되어 기사님의 수익을 창출함.<br /> 현재는 옥외광고물법상 허용되는 영업용차, 렌터카가 차량광고 할 수 있습니다.
          </p>
          <div
            className={`driver-data__image-wrapper fade-in ${imageDataVisible ? 'is-visible' : ''}`}
            ref={imageDataRef}
          >
            <img src={manycarmageUrl} alt="Data Measurement" className="driver-data__image" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        </div>
      </section>

      {/* 3. Advertising Process */}
      <section className="driver-process">
        <div className="driver-process__header">
          <h2 className="driver-process__title">어플에서 광고주와 매칭과 광고계약 등이 이루어져 간편</h2>
          <p className="driver-process__subtitle">스마트폰 하나로 모든 과정이 진행됩니다. 마루알리 앱의 광고활동 자동 측정으로 쉽고 편안하게 광고 수익 창출을 시작하세요.</p>
        </div>
        <div className="driver-process__grid">
          {[
            { step: '01', icon: signupIcon, title: '회원 가입', desc: '앱 설치 후 간단한 정보를 입력하여 회원가입을 완료합니다.' },
            { step: '02', icon: shakeHandIcon, title: '광고 매칭', desc: '내 차량과 운행 패턴에 최적화된 광고주와 매칭됩니다.' },
            { step: '03', icon: signIcon, title: '광고 계약', desc: '앱 내 전자서명으로 간편하고 투명하게 계약을 체결합니다.' },
            { step: '04', icon: deliveryIcon, title: '광고물 배송', desc: '지정된 주소로 차량용 광고 스티커가 안전하게 배송됩니다.' },
            { step: '05', icon: stickerIcon, title: '부착/업로드', desc: '광고물을 부착하고 인증 사진을 앱에 업로드하여 시작을 알립니다.' },
            { step: '06', icon: carIcon, title: '광고 운행', desc: '평소처럼 일상 주행을 하세요. 수익은 자동으로 정산됩니다.' }
          ].map((item, idx) => (
            <div key={idx} className="driver-step-card">
              <div className="driver-step-card__left">
                <span className="driver-step-card__number">{item.step}</span>
                <img src={item.icon} alt={item.title} className="driver-step-card__icon" />
              </div>
              <div className="driver-step-card__right">
                <h3 className="driver-step-card__title">{item.title}</h3>
                <p className="driver-step-card__desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Billboard Guide */}
      <section className="driver-billboard">
        <div className="driver-billboard__header">
          <h2 className="driver-billboard__title">버스 및 탑차에게 배송된 스티커 광고를 직접 부착시, <span className="text-primary">별도의 부착비를 드립니다.</span></h2>
        </div>
        <div className="driver-billboard__grid">
          <div className="driver-billboard__item">
            <p className="driver-billboard__item-title">버스 스티커 광고 부착 방법_아래 그림을 클릭하세요.</p>
            <a href="https://www.youtube.com/watch?v=lRmgmsqo-_g" target="_blank" rel="noreferrer" className="driver-billboard__video">
              <img src={busAdUrl} alt="버스 스티커 광고 부착 방법" />
              <div className="driver-billboard__video-overlay">
                <img src={playCircleIcon} alt="Play" className="play-icon" />
              </div>
            </a>
          </div>
          <div className="driver-billboard__item">
            <p className="driver-billboard__item-title">탑차 스티커 광고 부착 방법_아래 그림을 클릭하세요.</p>
            <a href="https://www.youtube.com/watch?v=Fz9g-v7Uth4" target="_blank" rel="noreferrer" className="driver-billboard__video">
              <img src={topcarAdUrl} alt="탑차 스티커 광고 부착 방법" />
              <div className="driver-billboard__video-overlay">
                <img src={playCircleIcon} alt="Play" className="play-icon" />
              </div>
            </a>
          </div>
        </div>
        <div className="driver-billboard__extra">
          <div className="driver-billboard__extra-icon">
            <img src={magnetIcon} alt="Magnet" className="magnet-icon" />
          </div>
          <div className="driver-billboard__extra-text">
            <h3>승용/승합차용 자석 광고판 배송 : <span className="text-primary">부착이 쉬워 부착비는 없습니다.</span></h3>
            <p>차량 도장면 손상 걱정 없이 누구나 1분 만에 탈부착이 가능한 마그네틱 광고판을 기본으로 제공합니다.<br /> 탈착 감지 기능이 있어, 행사 참석 등으로 필요시 탈착하셔도 됩니다.</p>
          </div>
        </div>
      </section>

      {/* 5. APP Boarding Detection */}
      <section className="driver-app">
        <div className="driver-app__bg-glow"></div>
        <div className="driver-app__inner">
          <div className="driver-app__left">
            <LottieAnimation animationPath={phoneDriverUrl} className="driver-phone-lottie" />
          </div>
          <div className="driver-app__center">
            <div className="driver-app__sensor-icon">
              <div className="sensor-ring"></div>
              <img src={sensorIcon} alt="Sensor" className="sensor-icon" />
            </div>
            <h2 className="driver-app__title">어플이 탑승과 하차를 감지하여 <br />자동으로 광고운행 기록하여 편리</h2>
            <p className="driver-app__desc">운전자가 일일이 앱을 켜고 끌 필요가 없습니다. <br />운전자의 스마트폰과 광고판의 비콘과의 연동을 통해 탑승과 하차를 자동으로 감지.</p>
          </div>
          <div className="driver-app__right">
            <img src={phoneStop} alt="Phone Stop" className="driver-phone-stop" />
          </div>
        </div>
      </section>

      {/* Google Form section (left: image, right: embedded form) */}
      <section id="googleform" className="driver-googleform">
        <div className="driver-googleform__inner">
          <div className="driver-googleform__left">
            <img src={formImage} alt="문의/신청 이미지" />
          </div>
          <div className="driver-googleform__right">
            <div className="driver-googleform__iframe-wrapper">
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeBWMp4LSXsl5l-AoHO668t0e7oR1M7m3ahe6UurhdQCwHTsA/viewform?embedded=true" width="640" height="587" frameborder="0" marginheight="0" marginwidth="0" title="Google Form">로드 중…</iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer from Home.jsx */}
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__logo">
            <LottieAnimation animationPath="/src/assets/steering.json" />
          </div>
          <div className="footer__info">
            <span className="footer__brand">Marually</span>
            <span className="footer__copyright">
              © 2024 Marually. Kinetic Intelligence for Mobility.
            </span>
            <div className="footer__socials">
              <a href="#" className="footer__social-link">
                <img src={socialIcon1} alt="Social" />
              </a>
              <a href="#" className="footer__social-link">
                <img src={socialIcon2} alt="Social" />
              </a>
            </div>
          </div>
          <div className="footer__links">
            <a href="#" className="footer__link">Privacy Policy</a>
            <a href="#" className="footer__link">Terms of Service</a>
            <a href="#" className="footer__link">Drivers Portal</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Driver;
