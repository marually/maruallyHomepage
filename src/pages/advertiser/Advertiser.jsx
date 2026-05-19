import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TopNavBar from '../../components/TopNavBar';
import LottieAnimation from '../../components/LottieAnimation';
import './Advertiser.css';
import '../Home/Home.css';

// Assets
import heroBg from '/assets/advertiserAssets/hero_advertiser.png';
import idleTaxi from '/assets/advertiserAssets/idle_taxi.png';
import activeCar from '/assets/advertiserAssets/active_car.png';
import bowMaruallyJson from '/assets/advertiserAssets/bowMarually.json?url';
import advertiserVideo from '/assets/advertiserAssets/advertiser.mp4';

// Parallax Desktop Assets
import parallax1 from '/assets/advertiserAssets/parallax1.png';
import parallax2 from '/assets/advertiserAssets/parallax2.png';
import parallax3 from '/assets/advertiserAssets/parallax3.png';
import parallax4 from '/assets/advertiserAssets/parallax4.png';
import parallax5 from '/assets/advertiserAssets/parallax5.png';
import parallax6 from '/assets/advertiserAssets/parallax6.png';

// Parallax Mobile Assets
import p1 from '/assets/advertiserAssets/p1.png';
import p2 from '/assets/advertiserAssets/p2.png';
import p3 from '/assets/advertiserAssets/p3.png';
import p4 from '/assets/advertiserAssets/p4.png';
import p5 from '/assets/advertiserAssets/p5.png';
import p6 from '/assets/advertiserAssets/p6.png';
import p7 from '/assets/advertiserAssets/p7.png';
import p8 from '/assets/advertiserAssets/p8.png';

// Footer social icons (from Home)
import socialIcon1 from '/assets/zB0X7.png';
import socialIcon2 from '/assets/ofqtO.png';

const Advertiser = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // If navigated with a hash (e.g. /advertiser#request), scroll to that element
  useEffect(() => {
    if (location && location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        // small timeout to allow page layout to settle
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50);
      }
    }
  }, [location]);

  const desktopLayers = [
    { id: 1, src: parallax1, speed: 0.5 },
    { id: 2, src: parallax2, speed: 0.4 },
    { id: 3, src: parallax3, speed: 0.3 },
    { id: 4, src: parallax4, speed: 0.2 },
    { id: 5, src: parallax5, speed: 0.1 },
    { id: 6, src: parallax6, speed: 0 },
  ];

  const mobileLayers = [
    { id: 1, src: p1, speed: 0.56 },
    { id: 2, src: p2, speed: 0.48 },
    { id: 3, src: p3, speed: 0.4 },
    { id: 4, src: p4, speed: 0.32 },
    { id: 5, src: p5, speed: 0.24 },
    { id: 6, src: p6, speed: 0.16 },
    { id: 7, src: p7, speed: 0.08 },
    { id: 8, src: p8, speed: 0 },
  ];

  const layers = isMobile ? mobileLayers : desktopLayers;

  return (
    <div className="advertiser-page">
      <TopNavBar />

      {/* Hero Section */}
      <section className="advertiser-hero">
        <div className="advertiser-hero__bg">
          {layers.map((layer) => (
            <img
              key={layer.id}
              className={`parallax-layer parallax-layer-${layer.id}`}
              src={layer.src}
              alt={`Parallax layer ${layer.id}`}
              style={{
                transform: `translateY(${scrollY * layer.speed}px)`,
              }}
            />
          ))}
          <div className="advertiser-hero__overlay"></div>
        </div>
        {/* hero content removed per request */}
      </section>

      {/* VS Section */}
      <section className="advertiser-vs">
        <div className="advertiser-vs__inner">
          <div className="advertiser-vs__grid">
            {/* Left: Idle */}
            <div className="vs-card vs-card--idle">
              <div className="vs-card__image">
                <img src={idleTaxi} alt="차고지 멈춘차" />
              </div>
              <h3 className="vs-card__title">광고를 부착만 하면,<br />차고지 운휴차에도 광고비 지불?</h3>
            </div>

            {/* Center: VS */}
            <div className="vs-divider">
              <span className="vs-divider__text">VS</span>
            </div>

            {/* Right: Active */}
            <div className="vs-card vs-card--active">
              <div className="vs-card__image">
                <img src={activeCar} alt="운행데이터 기반 측정" />
              </div>
              <h3 className="vs-card__title">데이터 기반으로<br />광고운행한 만큼만 광고비 지불!</h3>
            </div>
          </div>

          <div className="vs-explanation">
            <h4 className="vs-explanation__title">
              아직도 운휴차에도 광고비를 지급하십니까?
            </h4>
            <p className="vs-explanation__text">
              <span className="text-primary font-bold">법인 택시의 70%, 버스의 20%는</span> 기사 구인난으로 광고를 부착하고도 차고지에 쉬고 있습니다. <br />
              데이터가 없어, 운행과 상관없이 광고판만 부착 하면 광고비를 지급해야 하는 현행 방식에서는<br />
              <span className="text-error font-bold">광고계약한 순간 70%~20% 손실</span>이 발생합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Fee System Section */}
      <section className="advertiser-fee">
        <div className="advertiser-fee__inner">
          <h2 className="advertiser-fee__title">마루알리 광고비 산정</h2>
          <p className="advertiser-fee__desc">
            유동인구가 많은 지역에 오래 광고운행 할수록 광고비가 높아지는 합리적 구조입니다. <br />
            광고판 면적과 유동인구에 따른 지역별 단가, 해당 지역 광고시간을 곱하여 광고비가 산정됩니다.<br />

          </p>
          <div className="fee-formula">
            <p className="fee-formula__text">
              광고비 = 광고판 면적 X 유동인구에 따른 지역별 단가 X 해당 지역 광고시간
            </p>
          </div>

          <div className="fee-grid">
            {/* Card 1 */}
            <div className="fee-card">
              <div className="fee-card__header">
                <h3>광고판 면적</h3>
              </div>
              <div className="fee-card__body">
                <p>승용·택시 : 1.6㎡,  승합차 : 2㎡,<br /> 중형버스 : 4㎡,  택배탑차(1톤) : 6㎡, <br />노선버스 : 8.2㎡</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="fee-card">
              <div className="fee-card__header">
                <h3>유동인구에 따른 지역별 단가</h3>
              </div>
              <div className="fee-card__body">
                <p>광고 면적 1㎡ 당 1시간 단가 (예시)</p>
                <ul className="fee-list">
                  <li><span className="font-bold">[서울 최고]</span> 중구 1,035원</li>
                  <li><span className="font-bold">[서울 최저]</span> 강동구 423원</li>
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className="fee-card">
              <div className="fee-card__header">
                <h3>해당 지역 광고 시간</h3>
              </div>
              <div className="fee-card__body">
                <p>택배차가 서울중구에서 9시간 운행시 광고비:</p>
                <p className="fee-highlight">택배차 6㎡ x 중구 1,035원 x 9시간 = 55,845원</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="advertiser-dashboard">
        <div className="advertiser-dashboard__inner">
          <h2 className="advertiser-dashboard__title">
            광고 캠페인 별로 광고주님에게 실시간 Dashboard 제공
          </h2>
          <div className="dashboard-preview">
            <div className="dashboard-preview__wrapper">
              <video
                src={advertiserVideo}
                alt="Dashboard Preview"
                controls
                autoPlay
                muted
                loop
                className="dashboard-preview__video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Request Section */}
      <section id="request" className="advertiser-request">
        <div className="advertiser-request__inner">
          <div className="advertiser-request__info">
            <LottieAnimation animationPath={bowMaruallyJson} className="request-lottie" />
            <h2 className="advertiser-request__title">광고문의 감사합니다.</h2>
            <p className="advertiser-request__desc">
              데이터로 광고비 산정하는 마루알리로 광고예산 절감 하세요.
            </p>
          </div>
          <div className="advertiser-request__form">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSd5ZhKXKKSeetUf_WHAvsOPzLnDLtUh01FAiB1ABmjEUKKVqg/viewform?embedded=true"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Google Form"
            >
              로드 중…
            </iframe>
          </div>
        </div>
      </section>

      {/* Footer (from Home) */}
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__logo">
            <LottieAnimation animationPath="/assets/steering.json" />
          </div>
          <div className="footer__info">
            <span className="footer__brand">주식회사 마루디지털</span>
            <span className="footer__copyright">
              marudigital@naver.com | 사업자등록번호: 714-86-01553
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
            <a href="https://blog.naver.com/uddum/223007820913" className="footer__link">개인정보처리방침</a>
            <a href="https://blog.naver.com/uddum/223007823299" className="footer__link">이용약관</a>
            <a href="https://blog.naver.com/uddum/223009016896" className="footer__link">광고계약서 등</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Advertiser;
