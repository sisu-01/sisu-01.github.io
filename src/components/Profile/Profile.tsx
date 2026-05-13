/* Profile.tsx */
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <section className={styles.hero}>
      <h2 className={styles.title}>
        안녕하세요, <br className={styles.mobileBr} /> 가치를 만드는 개발자입니다.
      </h2>
      <p className={styles.description}>
        실제 서비스 운영 경험과 보안, 실시간 데이터 처리에 강점이 있는 풀스택 개발자입니다.
        기술의 편리함을 넘어 안정적인 사용자 경험을 지향합니다.
      </p>
    </section>
  );
}

export default Profile;