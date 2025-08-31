import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="평촌 롯데캐슬 르씨엘-benerimage"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <div
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </div>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
    if (text === '롯데캐슬 르씨엘' || text === '홍보영상' || text === '체크포인트' || text === '당첨자서류안내' || text === '평촌 롯데캐슬 르씨엘') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    하루의 무게를 내려놓고 본연으로 돌아가는 프리미엄.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    평촌 중심 생활권, 지하철 4호선 더블역세권 입지.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    NO.1 브랜드, 평촌 롯데캐슬 르씨엘과 함께합니다.
                </div>
            </>
        );
    } else if (text === '사업개요' || text === '세대안내' || text === '인테리어' || text === '청약안내' || text === '모집공고안내' || text === '인지세납부안내') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    평촌 동안구 생활권의 새로운 주거 중심지.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    평촌역·범계역 더블역세권, 서울 접근성 강화.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    롯데캐슬 브랜드와 함께 높여가는 일상의 가치.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    평촌 롯데캐슬 르씨엘
                </div>
            </>
        );
    } else if (text === '입지환경') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    교통·교육·생활 모두 가까운 평촌 핵심 입지.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    더블역세권과 풍부한 생활 인프라를 누리세요.
                </div>
            </>
        );
    } else if (text === '단지안내') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    주거의 품격과 가치를 높이는 특화 설계.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    쾌적하고 편리한 생활을 위한 최적의 공간.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    평촌 롯데캐슬 르씨엘, 안양 동안구의 중심에 자리합니다.
                </div>
            </>
        );
    }
};