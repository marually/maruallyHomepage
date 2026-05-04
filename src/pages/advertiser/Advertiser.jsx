import React from 'react';
import TopNavBar from '../../components/TopNavBar';

const Advertiser = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#F8F9FA' }}>
      <TopNavBar />
      <div style={{ 
        maxWidth: '1280px', 
        margin: '0 auto', 
        padding: '80px 32px',
        textAlign: 'center'
      }}>
        <h1 style={{ 
          fontFamily: "'Noto Sans KR', sans-serif",
          fontSize: '36px',
          fontWeight: 900,
          color: '#191C1D',
          marginBottom: '16px'
        }}>
          광고주 페이지
        </h1>
        <p style={{ 
          fontFamily: "'Noto Sans KR', sans-serif",
          fontSize: '18px',
          color: '#3F4A39',
          lineHeight: 1.6
        }}>
          가장 효율적인 차량 광고 타겟팅 시스템을 경험해 보세요.
        </p>
        <div style={{
          marginTop: '40px',
          padding: '24px',
          background: '#fff',
          borderRadius: '16px',
          border: '1px solid rgba(191, 202, 180, 0.3)',
          maxWidth: '600px',
          margin: '40px auto 0'
        }}>
          <p style={{ color: '#71717A', fontSize: '14px' }}>
            이 페이지는 현재 준비 중입니다. 더 나은 서비스로 찾아뵙겠습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advertiser;
