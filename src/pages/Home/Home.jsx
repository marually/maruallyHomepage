import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import TopNavBar from '../../components/TopNavBar';
import LottieAnimation from '../../components/LottieAnimation';
import slide0 from '/assets/slide0.png';
import slide1 from '/assets/slide1.png';
import slide2 from '/assets/slide2.png';
import slide3 from '/assets/slide3.png';
import './Home.css';

//Section 1 images
import catLogo from '/assets/catLogo.svg';
import greenLogo from '/assets/greenLogo.svg';

// Step card icons
import iconStep1 from '/assets/Pe5A2.png';
import iconStep2 from '/assets/3j7Wa.png';
import iconStep3 from '/assets/TRjMw.png';
import iconStep4 from '/assets/flgpM.png';
import iconStep5 from '/assets/vyO6E.png';
import iconStep6 from '/assets/Q6VqA.png';

// Store badges
import googlePlayIcon from '/assets/1google.png';
import appStoreIcon from '/assets/1apple.png';

// App feature icons
import iconFeature1 from '/assets/H8RWW.png';
import iconFeature2 from '/assets/9vcmF.png';
import iconFeature3 from '/assets/ED2Ui.png';
import iconFeature4 from '/assets/Gadru.png';
import iconFeature5 from '/assets/yrKgZ.png';

// Carousel feature card icons
import iconCarousel1 from '/assets/XchiG.png';
import iconCarousel2 from '/assets/POPSQ.png';

// Carousel navigation buttons
import navBtnLeft from '/assets/AHcLV.png';
import navBtnRight from '/assets/zx7LR.png';

// Carousel slide background
import slideBg from '/assets/aVXcY.png';

// Footer social icons
import socialIcon1 from '/assets/zB0X7.png';
import socialIcon2 from '/assets/ofqtO.png';

// Logo
import purpleLogo from '/assets/purpleLogo.svg';
import introImage from '/assets/intro.png';



const CAROUSEL_SLIDES = [
  {
    id: 0,
    image: slide0,
    cards: [],
  },
  { id: 1, image: slide1, cards: [] },
  { id: 2, image: slide2, cards: [] },
  { id: 3, image: slide3, cards: [] },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = CAROUSEL_SLIDES.length;

  const goToSlide = useCallback((idx) => {
    setCurrentSlide((idx + totalSlides) % totalSlides);
  }, [totalSlides]);

  const nextSlide = useCallback(() => goToSlide(currentSlide + 1), [currentSlide, goToSlide]);
  const prevSlide = useCallback(() => goToSlide(currentSlide - 1), [currentSlide, goToSlide]);

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const activeCards = CAROUSEL_SLIDES[currentSlide]?.cards || [];

  return (
    <div className="home-page">
      <TopNavBar />

      {/* ===== Hero Section ===== */}
      <section className="hero-section">
        <LottieAnimation
          animationPath="/assets/DrivingCar.json"
          direction={-1}
          className="hero-section__bg-car"
        />
        <div className="hero-section__header">
          <h1 className="hero-section__title">
            폰에 <span class="highlight">광고운행 데이터</span>를  담다.
          </h1>
          <div className="hero-section__brand">마루알리</div>
        </div>
        <div className="hero-section__store-links">
          <img src={appStoreIcon} alt="App Store" className="hero-section__store-badge" />
          <img src={googlePlayIcon} alt="Google Play" className="hero-section__store-badge" />
        </div>
        <div className="hero-section__lottie">
          <LottieAnimation animationPath="/assets/2WebHeroSction.json" />
        </div>
      </section>

      {/* ===== Section 1: Platform Introduction ===== */}
      <section className="section-intro">
        <h2 className="section-intro__main-title">마루알리 앱의 특징</h2>
        <div className="section-intro__item">
          <div className="section-intro__header">
            <img src={catLogo} alt="Cat Logo" className="section-intro__small-logo" />
            <h2 className="section-intro__title2">광고차량 탑승 하차 감지하여 앱이 자동 OnㆍOff</h2>
          </div>
          <img src="/assets/auto_onoff.gif" alt="Auto On/Off" className="section-intro__img" />
        </div>
        <div className="section-intro__item">
          <div className="section-intro__header">
            <img src={greenLogo} alt="Green Logo" className="section-intro__small-logo" />
            <h2 className="section-intro__title2">앱이 센서로 광고판 탈착 및 Abusing 등을 감지</h2>
          </div>
          <img src="/assets/sensor.gif" alt="Sensor" className="section-intro__img" />
        </div>
      </section>

      {/* ===== Section 2: Platform Process (6 Steps) ===== */}
      <section className="section-process">
        <div className="section-process__header">
          <h2 className="section-process__title">운전자의 플랫폼 프로세스</h2>
          <p className="section-process__subtitle">
            광고계약부터 데이터 측정까지, 마루알리의 6단계 프로세스
          </p>
        </div>
        <div className="section-process__grid">
          {/* Step 1 */}
          <div className="step-card">
            <div className="step-card__icon">
              <img src={iconStep1} alt="" />
            </div>
            <h3 className="step-card__title">1. 광고 매칭 및 광고 계약</h3>
            <p className="step-card__desc">
              광고 매칭 되면, 운전자는 앱에서 광고 전자 계약을 체결합니다.
            </p>
          </div>
          {/* Step 2 */}
          <div className="step-card">
            <div className="step-card__icon">
              <img src={iconStep2} alt="" />
            </div>
            <h3 className="step-card__title">2. 광고판 배송</h3>
            <p className="step-card__desc">
              차량 맞춤 광고판에 비콘 설치 및 배송이 진행됩니다.
            </p>
          </div>
          {/* Step 3 */}
          <div className="step-card">
            <div className="step-card__icon">
              <img src={iconStep3} alt="" />
            </div>
            <h3 className="step-card__title">3. 광고판 부착</h3>
            <p className="step-card__desc">
              운전자가 배송된 광고판을 차에 직접 부착합니다.
            </p>
          </div>
          {/* Step 4 */}
          <div className="step-card">
            <div className="step-card__icon">
              <img src={iconStep4} alt="" />
            </div>
            <h3 className="step-card__title">4. 자동 연결</h3>
            <p className="step-card__desc">
              운전자 탑승 시 비콘과 근거리 페어링되어 앱이 자동 실행됩니다.
            </p>
          </div>
          {/* Step 5 */}
          <div className="step-card">
            <div className="step-card__icon">
              <img src={iconStep5} alt="" />
            </div>
            <h3 className="step-card__title">5. 데이터 전송</h3>
            <p className="step-card__desc">
              광고 운행 중에만 앱에서 비콘 센서 및 GPS 데이터를 실시간 전송합니다.
            </p>
          </div>
          {/* Step 6 */}
          <div className="step-card">
            <div className="step-card__icon">
              <img src={iconStep6} alt="" />
            </div>
            <h3 className="step-card__title">6. 자동 종료</h3>
            <p className="step-card__desc">
              하차 시 비콘과 연결이 끊기며 앱과 광고 측정이 자동 종료됩니다.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Section 3: Platform Features (Carousel) ===== */}
      <section className="section-carousel">
        <div className="section-carousel__inner">
          <h2 className="section-carousel__heading">마루알리의 특별한 경쟁력</h2>
          <h3 className="section-carousel__subheading">
            * 국내 특허등록(2건) 1019864190000, 1029590700000 * 미국특허등록 16477856<br /> * 국내 상표권 4020021508037 * 미국상표권 5,964,888
          </h3>
          <div className="section-carousel__viewport">
            {/* Slide background image */}
            <div className="section-carousel__slides">
              {CAROUSEL_SLIDES.map((slide, idx) => (
                <div
                  key={slide.id}
                  className={`section-carousel__slide ${idx === currentSlide ? 'section-carousel__slide--active' : ''}`}
                  style={{ display: idx === currentSlide ? 'block' : 'none' }}
                >
                  <img src={slide.image} alt={`슬라이드 ${slide.id}`} className="section-carousel__slide-img" />
                </div>
              ))}
            </div>

            {/* Feature cards overlaid on right side */}
            {activeCards.length > 0 && (
              <div className="section-carousel__cards">
                {activeCards.map((card, i) => (
                  <div className="feature-card" key={i}>
                    <div className="feature-card__body">
                      <div className={`feature-card__icon ${card.iconClass}`}>
                        <img src={card.icon} alt="" />
                      </div>
                      <h3 className="feature-card__title">{card.title}</h3>
                      <p className="feature-card__desc">{card.desc}</p>
                    </div>
                    <div className="feature-card__link">
                      <span className="feature-card__link-text">자세히 보기</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke="#256D00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Left Nav Button */}
            <button
              className="carousel-btn carousel-btn--left"
              onClick={prevSlide}
              aria-label="이전 슬라이드"
              style={{ position: 'absolute', top: '50%', left: 16, zIndex: 3, transform: 'translateY(-50%)', display: 'flex' }}
            >
              <svg width="32" height="32" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8L10 4" stroke="#191c1d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Right Nav Button */}
            <button
              className="carousel-btn carousel-btn--right"
              onClick={nextSlide}
              aria-label="다음 슬라이드"
              style={{ position: 'absolute', top: '50%', right: 16, zIndex: 3, transform: 'translateY(-50%)', display: 'flex' }}
            >
              <svg width="32" height="32" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="#191c1d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="section-carousel__dots">
            {CAROUSEL_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                className={`dot ${idx === currentSlide ? 'dot--active' : 'dot--inactive'}`}
                onClick={() => goToSlide(idx)}
                aria-label={`슬라이드 ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Section 4: App Features + Image (Dark) ===== */}
      <section className="section-app">
        <div className="section-app__inner">
          <div className="section-app__phone">
            <LottieAnimation animationPath="/assets/phoneDriver.json" />
          </div>
          <div className="section-app__content">
            <h2 className="section-app__title">마루알리 앱의 스마트한 경험</h2>
            <div className="section-app__features">
              <div className="app-feature">
                <div className="app-feature__icon">
                  <img src={iconFeature1} alt="" />
                </div>
                <div className="app-feature__text">
                  <h4 className="app-feature__name">앱에서 광고 매칭 및 계약</h4>
                  <p className="app-feature__desc">
                    앱 내에서 실시간으로 광고를 매칭하고 간편하게 전자 계약을 체결합니다.
                  </p>
                </div>
              </div>
              <div className="app-feature">
                <div className="app-feature__icon">
                  <img src={iconFeature2} alt="" />
                </div>
                <div className="app-feature__text">
                  <h4 className="app-feature__name">앱의 자동 실행</h4>
                  <p className="app-feature__desc">
                    잠금 화면 상태에서도 운전자의 탑승과 하차를 감지하여 앱이 자동으로 실행되고 종료되어 편리.
                  </p>
                </div>
              </div>
              <div className="app-feature">
                <div className="app-feature__icon">
                  <img src={iconFeature3} alt="" />
                </div>
                <div className="app-feature__text">
                  <h4 className="app-feature__name">실시간 광고수익 조회</h4>
                  <p className="app-feature__desc">
                    운전자는 앱을 통해 현재까지의 예상 광고수익를 실시간으로 확인할 수 있습니다.
                  </p>
                </div>
              </div>
              <div className="app-feature">
                <div className="app-feature__icon">
                  <img src={iconFeature4} alt="" />
                </div>
                <div className="app-feature__text">
                  <h4 className="app-feature__name">네비 등 다른 앱과 동시 사용</h4>
                  <p className="app-feature__desc">
                    네비게이션 등 다른 앱을 사용하는 중에도 광고 측정은 끊김 없이 지속됩니다.
                  </p>
                </div>
              </div>
              <div className="app-feature">
                <div className="app-feature__icon">
                  <img src={iconFeature5} alt="" />
                </div>
                <div className="app-feature__text">
                  <h4 className="app-feature__name">광고 운행중에만 광고 측정</h4>
                  <p className="app-feature__desc">
                    하차시 광고데이터 측정도 종료되어 개인 정보 수집 최소화
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Section 5: Comparison UI ===== */}
      <section className="section-compare">
        <div className="section-compare__inner">
          <div className="section-compare__header">
            <h2 className="section-compare__title">왜 마루알리인가요?</h2>
            <p className="section-compare__subtitle">
              기존 차량광고와 비교하여 높은 투명성과 효율을 경험해보세요!
            </p>
          </div>
          <div className="section-compare__table">
            {/* Old Method */}
            <div className="compare-col compare-col--old">
              <h3 className="compare-col__title">기존 차량 광고</h3>
              <div className="compare-list">
                <div className="compare-item">
                  <span className="compare-item__icon compare-item__icon--x">✕</span>
                  <span className="compare-item__text">
                    법인 택시 광고계약 즉시, 70% 손실(택시 운행율 30%수준)
                  </span>
                </div>
                <div className="compare-item">
                  <span className="compare-item__icon compare-item__icon--x">✕</span>
                  <span className="compare-item__text">
                    광고효과 보고서 없음 (데이터 측정 불가능)
                  </span>
                </div>
                <div className="compare-item">
                  <span className="compare-item__icon compare-item__icon--x">✕</span>
                  <span className="compare-item__text">
                    데이터가 없어 매일 운행 시내 버스에 차량 광고 집중화
                  </span>
                </div>
                <div className="compare-item">
                  <span className="compare-item__icon compare-item__icon--x">✕</span>
                  <span className="compare-item__text">
                    광고기간중 광고판 탈착해도 광고주는 모름
                  </span>
                </div>
              </div>
            </div>
            {/* New Method */}
            <div className="compare-col compare-col--new">
              <h3 className="compare-col__title">마루알리 플랫폼</h3>
              <div className="compare-list">
                <div className="compare-item">
                  <span className="compare-item__icon compare-item__icon--check">✓</span>
                  <span className="compare-item__text">
                    데이터로 측정하여 운행한 만큼만 비용 발생
                  </span>
                </div>
                <div className="compare-item">
                  <span className="compare-item__icon compare-item__icon--check">✓</span>
                  <span className="compare-item__text">
                    실시간 광고효과 대시보드 제공
                  </span>
                </div>
                <div className="compare-item">
                  <span className="compare-item__icon compare-item__icon--check">✓</span>
                  <span className="compare-item__text">
                    모든 차의 운행 데이터 수집 → 모든 차량이 광고 가능
                  </span>
                </div>
                <div className="compare-item">
                  <span className="compare-item__icon compare-item__icon--check">✓</span>
                  <span className="compare-item__text">
                    비콘 센서로 광고판 부착 유무 실시간 감지
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <section className="section-cta">
        <div className="section-cta__inner">
          <h2 className="section-cta__title">무엇이든 물어보세요.</h2>
          <div className="section-cta__buttons">
            <Link to="/advertiser#request" className="cta-btn cta-btn--green">광고주 문의하기</Link>
            <Link to="/driver#googleform" className="cta-btn cta-btn--purple">운전자 문의하기</Link>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
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

export default Home;
