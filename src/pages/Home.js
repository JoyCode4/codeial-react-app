import styles from "../styles/home.module.css";

const Home = ()=>{
    return (
        <div className={styles.postsList}>
            <div className={styles.postWrapper}>
                <div className={styles.postHeader}>
                    <div className={styles.postAvatar}>
                        {/* <img
                        src="https://www.flaticon.com/free-icon/user_1144760?term=profile&page=1&position=3&origin=search&related_id=1144760"
                        alt="user-pic"
                        /> */}
                        <img width="48" height="48" src="https://img.icons8.com/color/48/circled-user-male-skin-type-1-2--v1.png" alt="circled-user-male-skin-type-1-2--v1"/>
                        <div>
                        <span className={styles.postAuthor}>Aakasj</span>
                        <span className={styles.postTime}>a minute ago</span>
                        </div>
                    </div>
                    <div className={styles.postContent}>Post Conetnt</div>

                    <div className={styles.postActions}>
                        <div className={styles.postLike}>
                        <img
                            src="https://img.icons8.com/ios-glyphs/30/hearts.png"
                            alt="comments-icon"
                        />
                        <span>5</span>
                        </div>

                        <div className={styles.postCommentsIcon}>
                        <img 
                            width="24" height="24" src="https://img.icons8.com/material-outlined/24/comments--v1.png"
                            alt="comments--v1"
                        />
                        <span>2</span>
                        </div>
                    </div>
                    <div className={styles.postCommentBox}>
                        <input placeholder="Start typing a comment" />
                    </div>

                    <div className={styles.postCommentsList}>
                        <div className={styles.postCommentsItem}>
                            <div className={styles.postCommentHeader}>
                                <span className={styles.postCommentAuthor}>Bill</span>
                                <span className={styles.postCommentTime}>a minute ago</span>
                                <span className={styles.postCommentLikes}>22</span>
                            </div>

                            <div className={styles.postCommentContent}>Random comment</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;