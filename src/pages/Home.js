import PropTypes from "prop-types";
import styles from "../styles/home.module.css";
import {Comment} from "../components/index";

const Home = ({posts})=>{
    return (
        <div className={styles.postsList}>
            {posts.map((post)=>(
                <div className={styles.postWrapper} key={`post-${post._id}`}>
                <div className={styles.postHeader}>
                    <div className={styles.postAvatar}>
                        <img 
                            width="48" height="48" src="https://img.icons8.com/color/48/circled-user-male-skin-type-1-2--v1.png" 
                            alt="circled-user-male-skin-type-1-2--v1"
                        />
                        <div>
                        <span className={styles.postAuthor}>{post.user.name}</span>
                        <span className={styles.postTime}>a minute ago</span>
                        </div>
                    </div>
                    <div className={styles.postContent}>{post.content}</div>

                    <div className={styles.postActions}>
                        <div className={styles.postLike}>
                        <img
                            src="https://img.icons8.com/ios-glyphs/30/hearts.png"
                            alt="comments-icon"
                        />
                        <span>{post.likes.length}</span>
                        </div>

                        <div className={styles.postCommentsIcon}>
                        <img 
                            width="24" height="24" src="https://img.icons8.com/material-outlined/24/comments--v1.png"
                            alt="comments--v1"
                        />
                        <span>{post.comments.length}</span>
                        </div>
                    </div>
                    <div className={styles.postCommentBox}>
                        <input placeholder="Start typing a comment" />
                    </div>

                    <div className={styles.postCommentsList}>
                        {post.comments.map((comment)=>(
                            <Comment comment={comment}/>
                        ))}
                    </div>
                    
                </div>
            </div>
            ))}
            
        </div>
    )
}

Home.propTypes = {
    posts:PropTypes.array.isRequired,
}

export default Home;