import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";

const LocationSection = [
  {
    img: section2Image1,
    titleText: "정비사업 및 개발호재 중심지<br />탄탄한 미래가치 입지",
    contentText:
      "평촌 생활권 리모델링·정비사업 활발<br />도시 인프라 업그레이드로 미래가치 기대",
  },
  {
    img: section2Image2,
    titleText: "교육 인프라 프리미엄<br />학군·학원가 중심 입지",
    contentText:
      "명문 초·중·고 밀집, 학부모 선호 1순위<br />평촌 학원가 인접으로 우수한 교육 환경",
  },
  {
    img: section2Image3,
    titleText: "더블역세권 + 광역교통망 호재<br />서울 접근성 우위 단지",
    contentText:
      "지하철 4호선 평촌역·범계역 더블역세권<br />GTX-C(예정) 등 수도권 광역 교통망 수혜",
  },
  {
    img: section2Image4,
    titleText: "생활 인프라 접근성<br />원스톱 도심생활 기반",
    contentText:
      "롯데백화점, 뉴코아아울렛, 대형마트, 영화관 등 밀집<br />은행·카페거리·관공서 등 생활 편의성 우수",
  },
  {
    img: section2Image5,
    titleText: "대단지 브랜드 스케일<br />5,290세대 롯데캐슬",
    contentText:
      "총 5,290세대 규모의 브랜드 타운<br />프리미엄 커뮤니티와 대규모 주거 타운 형성",
  },
  {
    img: section2Image6,
    titleText: "쾌적한 자연·휴식 인프라<br />여유로운 생활환경",
    contentText:
      "중앙공원·범계공원 등 녹지 인접<br />쾌적한 주거환경과 특화 조경 설계로 힐링 라이프",
  },
];

const LocationEnvironment1 = () => {
  const menuContents = [
    // { title: "입지 안내영상", url: "/FloorPlan/videos" },
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
        <Helmet>
          {/* 페이지별 메타: title/description/og/canonical 만 관리 */}
          <title>평촌 롯데캐슬 르씨엘 - 입지환경</title>
          <meta
            name="description"
            content="평촌 롯데캐슬 르씨엘의 입지환경을 확인하세요. 평촌역·범계역 더블역세권, 명문 학군·학원가, 풍부한 생활 인프라와 공원 녹지까지 갖춘 안양 평촌 핵심 입지 정보를 제공합니다."
          />
          <meta name="robots" content="index,follow" />
          <link rel="canonical" href="https://locamobility.co.kr/LocationEnvironment/intro" />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="평촌 롯데캐슬 르씨엘" />
          <meta property="og:title" content="평촌 롯데캐슬 르씨엘 - 입지환경" />
          <meta
            property="og:description"
            content="평촌 롯데캐슬 르씨엘의 입지환경을 확인하세요. 평촌역·범계역 더블역세권, 명문 학군·학원가, 풍부한 생활 인프라와 공원 녹지까지 갖춘 안양 평촌 핵심 입지 정보를 제공합니다."
          />
          <meta property="og:url" content="https://locamobility.co.kr/LocationEnvironment/intro" />
          <meta property="og:image" content="https://locamobility.co.kr/img/og/location.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="평촌 롯데캐슬 르씨엘 - 입지환경" />
          <meta
            name="twitter:description"
            content="평촌 롯데캐슬 르씨엘의 입지환경을 확인하세요. 평촌역·범계역 더블역세권, 명문 학군·학원가, 풍부한 생활 인프라와 공원 녹지까지 갖춘 안양 평촌 핵심 입지 정보를 제공합니다."
          />
          <meta name="twitter:image" content="https://locamobility.co.kr/img/og/location.jpg" />
          <meta name="twitter:url" content="https://locamobility.co.kr/LocationEnvironment/intro" />

          {/* JSON-LD (대표 이미지/브레드크럼 포함) */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "평촌 롯데캐슬 르씨엘 - 입지환경",
              "url": "https://locamobility.co.kr/LocationEnvironment/intro",
              "description":
                "평촌 롯데캐슬 르씨엘의 입지환경을 확인하세요. 평촌역·범계역 더블역세권, 명문 학군·학원가, 풍부한 생활 인프라와 공원 녹지까지 갖춘 안양 평촌 핵심 입지 정보를 제공합니다.",
              "primaryImageOfPage": {
                "@type": "ImageObject",
                "contentUrl": "https://locamobility.co.kr/img/og/location.jpg",
                "width": 1200,
                "height": 630
              },
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://locamobility.co.kr/" },
                  { "@type": "ListItem", "position": 2, "name": "입지환경", "item": "https://locamobility.co.kr/LocationEnvironment/intro" }
                ]
              }
            })}
          </script>
        </Helmet>


      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="입지환경" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        평촌 롯데캐슬 르씨엘 - 입지안내
      </h1>
      <p className={styles.screenReaderOnly}>
        평촌 롯데캐슬 르씨엘의 입지 정보를 확인하세요. 뛰어난 교통망, 생활
        인프라, 교육 및 쇼핑 시설 등 편리한 주변 환경을 소개하며, 대전의
        중심에서 누릴 수 있는 생활의 편리함과 가치를 제공합니다
      </p>

      <div className={styles.textBox}>
        <div>갈수록 완벽해질 송도</div>
        <div>살수록 높아질 한신더휴</div>
        <div>도시를 압도할 자부심 한신더휴</div>
      </div>

      <img
        src={page1}
        className={styles.image2}
        alt="평촌 롯데캐슬 르씨엘입지환경-image1"
      />

      <div className={styles.section2}>
        {LocationSection.map((value, idx) => (
          <LocationSectionBox
            image={value.img}
            title={value.titleText}
            text={value.contentText}
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※본 홍보물의 내용과 지역도는 소비자의 이해를 돕기 위한 것으로, 개발 예정•계획 및 교통, 학교 계획 등에 관한 사항은 해당 기관의 아래 자료를 토대로 제작되었습니다. 사업계획 및 일정은 개발계획별 사업주체에 의해 변경될 수 있으며, 평촌 롯데캐슬 르씨엘 사업주체 및 시공사와 무관합니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
