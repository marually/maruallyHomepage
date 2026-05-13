import React, { useRef, useEffect } from 'react';
import TopNavBar from '../../components/TopNavBar';
import LottieAnimation from '../../components/LottieAnimation';
import './Billboard.css';
import '../Home/Home.css';

// Social icons (from Home)
import socialIcon1 from '/assets/zB0X7.png';
import socialIcon2 from '/assets/ofqtO.png';

const youtubeVideos = [
  {
    id: 1,
    videoId: 'MOZ1xGdzwjQ',
    title: '시트지가 가로로 길 때 1_습식방법',
    subtitle: '혼자 시공, 초보 적합',
    url: 'https://www.youtube.com/watch?v=MOZ1xGdzwjQ&t=16s',
  },
  {
    id: 2,
    videoId: 'hh8cknruF_A',
    title: '시트지가 가로로 길때 2_건식 방식',
    subtitle: '혼자 시공, 난이도 중',
    url: 'https://www.youtube.com/watch?v=hh8cknruF_A',
  },
  {
    id: 3,
    videoId: 'lRmgmsqo-_g',
    title: '시트지가 가로로 길때 3_건식 방식',
    subtitle: '2인 시공, 난이도 하',
    url: 'https://www.youtube.com/watch?v=lRmgmsqo-_g',
  },
  {
    id: 4,
    videoId: 'g8e4YNg05uo',
    title: '시트지가 세로 길때_건식 방식',
    subtitle: '2인 시공, 난이도 중',
    url: 'https://www.youtube.com/watch?v=g8e4YNg05uo',
  },
];

const carouselPhotos = [
  'b1.png', 'b2.png', 'b3.png', 'b4.png', 'b5.png',
  'b6.png', 'b7.png', 'b8.png', 'b9.png', 'b10.png'
];
const infinitePhotos = Array.from({ length: 20 }).flatMap(() => carouselPhotos);

const magnetChecks = [
  { icon: 'check_circle', text: '자석광고판 부착 대상 : 택시, 승용차, 승합차', color: 'green' },
  { icon: 'check_circle', text: '자석광고판은 탈부착이 용이하여 부착비는 없습니다.', color: 'green' },
  {
    icon: 'check_circle',
    text: '결혼식 등 행사 참석시 자석광고판을 탈착하여 트렁크 등에 보관 하실수 있습니다.',
    color: 'green',
  },
  {
    icon: 'sensors',
    text: '자석광고판 탈착한 상태에서 운행시, 비콘센서 감지로 광고비에서 제외 됩니다.',
    color: 'warning',
  },
];

const cautions = [
  '부착 전에 차량 부착 면과 자석광고판 뒷면(검은색 표면)에 이물질이 없도록 꼭 점검하세요.',
  '이물질이 없더라도, 차량 부착면과 자석광고판 뒷면을 닦아 주세요.',
  '광고운행 출발 전에 자석광고판이 잘 부착되어 있는지 점검하세요.',
];

const Billboard = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      // Start in the middle of our 20 sets
      carouselRef.current.scrollLeft = (carouselRef.current.scrollWidth / 20) * 10;
    }
  }, []);

  const scrollLeftBtn = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRightBtn = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <div className="billboard-page">
      <TopNavBar />

      {/* ── Hero Section ── */}
      <section className="bb-hero">
        <div className="bb-hero__text">
          <span className="bb-hero__eyebrow">마루알리 광고부착 가이드</span>
          <h1 className="bb-hero__title">광고 시트 부착방법</h1>
        </div>
        <div className="bb-hero__images">
          <LottieAnimation
            animationPath="/assets/billboardAssets/delivery.json"
            className="bb-hero__lottie"
          />
        </div>
      </section>

      {/* ── 준비물 Section ── */}
      <section className="bb-supplies">
        <div className="bb-inner">
          <div className="bb-supplies__grid">
            <div className="bb-supplies__card">
              <span className="material-symbols-outlined bb-supplies__icon">local_shipping</span>
              <h3 className="bb-supplies__label">광고시트 부착 대상</h3>
              <p className="bb-supplies__value">탑차_1톤이상 화물차, 버스</p>
            </div>
            <div className="bb-supplies__divider" />
            <div className="bb-supplies__card">
              <span className="material-symbols-outlined bb-supplies__icon">inventory_2</span>
              <h3 className="bb-supplies__label">준비물</h3>
              <p className="bb-supplies__value">
                세차수건, 마스킹 테잎, 가위, 비눗물(세제+물) 스프레이,
                <br />
                A형사다리 또는 의자, 자석(선택사항)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Step-by-Step 사진 Section ── */}
      <section className="bb-steps">
        <div className="bb-inner">
          <h2 className="bb-section-title">시트지가 가로로 길 때</h2>
          <div className="bb-carousel-wrapper">
            <div className="bb-carousel" ref={carouselRef}>
              {infinitePhotos.map((photo, index) => (
                <div key={index} className="bb-carousel__item">
                  <img
                    src={`/assets/billboardAssets/${photo}`}
                    alt={`시공 단계 ${(index % 10) + 1}`}
                    className="bb-carousel__img"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            {/* Desktop Buttons */}
            <div className="bb-carousel__controls">
              <button className="bb-carousel__btn" onClick={scrollLeftBtn} aria-label="이전 사진">
                <span className="material-symbols-outlined">arrow_back_ios_new</span>
              </button>
              <button className="bb-carousel__btn" onClick={scrollRightBtn} aria-label="다음 사진">
                <span className="material-symbols-outlined">arrow_forward_ios</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 유튜브 가이드 Section ── */}
      <section className="bb-youtube">
        <div className="bb-inner">
          <h2 className="bb-section-title">동영상 가이드</h2>
          <div className="bb-youtube__grid">
            {youtubeVideos.map((video) => (
              <a
                key={video.id}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bb-youtube__card"
              >
                <div className="bb-youtube__thumb-wrap">
                  <img
                    src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                    alt={video.title}
                    className="bb-youtube__thumb"
                    loading="lazy"
                  />
                  <div className="bb-youtube__play-btn">
                    <span className="material-symbols-outlined">play_circle</span>
                  </div>
                </div>
                <div className="bb-youtube__info">
                  <span className="material-symbols-outlined bb-youtube__icon">smart_display</span>
                  <div className="bb-youtube__texts">
                    <p className="bb-youtube__title">{video.title}</p>
                    <p className="bb-youtube__subtitle">{video.subtitle}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* 보상 안내 */}
          <div className="bb-reward-notice">
            <span className="material-symbols-outlined bb-reward-notice__icon">info</span>
            <p className="bb-reward-notice__text">
              ※ 시트지 부착비 : 시트지는 부착과 탈착이 어려워 광고 시트지를 직접 부착후 마루알리 앱으로
              광고차량의 3장의 사진 업로드시 소정의 부착비를 드립니다.
            </p>
          </div>
        </div>
      </section>

      {/* ── 자석광고판 안내 Section ── */}
      <section className="bb-magnet">
        <div className="bb-inner">
          <h2 className="bb-section-title">자석광고판 부착 안내(택시 ㆍ승용ㆍ승합차)</h2>
          <div className="bb-magnet__layout">
            <div className="bb-magnet__image-wrap">
              <img
                src="/assets/billboardAssets/magneticCar.png"
                alt="자석광고판 부착 안내"
                className="bb-magnet__image"
              />
            </div>
            <div className="bb-magnet__content">
              <ul className="bb-magnet__list">
                {magnetChecks.map((item, i) => (
                  <li key={i} className={`bb-magnet__item bb-magnet__item--${item.color}`}>
                    <span className="material-symbols-outlined bb-magnet__item-icon">
                      {item.icon}
                    </span>
                    <span className="bb-magnet__item-text">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 주의사항 */}
          <div className="bb-caution">
            <h3 className="bb-caution__title">
              <span className="material-symbols-outlined bb-caution__title-icon">warning</span>
              자석광고판 부착시 주의사항
            </h3>
            <ul className="bb-caution__list">
              {cautions.map((text, i) => (
                <li key={i} className="bb-caution__item">
                  <span className="bb-caution__bullet">·</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
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
            <a
              href="https://blog.naver.com/uddum/223007823299"
              className="footer__link"
            >
              이용약관
            </a>
            <a
              href="https://blog.naver.com/uddum/223009016896"
              className="footer__link"
            >
              광고계약서 등
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Billboard;