import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* 텍스트 영역 */}
        <div className={styles.textContent}>
          <h2 className={styles.title}>
            안녕하세요, <br className={styles.mobileBr} />개발자입니다.
          </h2>
          <p className={styles.description}>
            자기소개자기소개자기소개자기소개자기소개자기소개자기소개
            <br />
            자기소개자기소개자기소개자기소개자기소개자기소개자기소개
          </p>
        </div>
        
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
      </div>
    </section>
  );
};

export default Profile;