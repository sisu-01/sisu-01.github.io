import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* 이미지 영역 */}
        <div className={styles.imageContent}>
          <div className={styles.imageWrapper}>
            <img 
              src="/path/to/your/image.jpg" 
              alt="지원자 프로필 사진" 
              className={styles.profileImage} 
            />
          </div>
        </div>
        {/* 텍스트 영역 */}
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            개발자 <span className={styles.name}>이종원</span>의 <br className={styles.mobileBr} />포트폴리오
          </h1>
          <p className={styles.description}>
            <h2>
              안녕하십니까, 아이디어를 실체화하는 개발자 이종원입니다.
            </h2>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;