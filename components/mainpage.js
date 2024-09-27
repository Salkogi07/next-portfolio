import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import Lottie from "react-lottie-player";
import lottiejson from '/public/mainpage.json';
import styles from "./mainpage.module.css";
import { useRouter } from "next/router";
import { useSpring, animated } from 'react-spring';
import { FaGamepad, FaRocket } from 'react-icons/fa';

export default function MainPage() {
    const router = useRouter();

    const handleClick = () => {
        router.push('/projects');
    };

    // 배경 애니메이션
    const props = useSpring({
        to: { opacity: 1, transform: 'translateY(0)' },
        from: { opacity: 0, transform: 'translateY(-20px)' },
        config: { tension: 200, friction: 15 },
    });

    return (
        <animated.div style={props} className={styles.container}>
            <Grid container spacing={10}>
                <Grid size={4}>
                    <div className={styles.introduce}>
                        <h2 style={{ fontSize: '39px' }}>안녕하세요! <FaGamepad className={styles.icon} /></h2>
                        <p>저는 김동우입니다. 나이는 고등학교 2학년이고, 충주상업고등학교 스마트 IT과에 재학중입니다. 제가 할 수 있는 프로그래밍 언어에는 C#, 파이썬, 자바스크립트가 있습니다.</p>
                        <Button
                            className={styles.button}
                            variant="contained"
                            onClick={handleClick}
                        >
                            <FaRocket className={styles.buttonIcon} /> 프로젝트 보러가기
                        </Button>
                    </div>
                </Grid>
                <Grid size={7}>
                    <div className={styles['lottie-animation']}>
                        <Lottie
                            loop
                            animationData={lottiejson}
                            play
                        />
                    </div>
                </Grid>
            </Grid>
        </animated.div>
    );
}
