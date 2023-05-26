import styles from "../styles/navbar.module.css";
const Navbar = ()=>{
    return (
        <div className={styles.nav}>
            <div className={styles.leftDiv}>
                <a href="/">
                <img
                    alt=""
                    src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
                />
                </a>
            </div>

            <div className={styles.rightNav}>
                <div className={styles.user}>
                    <a href="/">
                        <img 
                            width="48" height="48" src="https://img.icons8.com/color/48/circled-user-male-skin-type-1-2--v1.png" 
                            alt="circled-user-male-skin-type-1-2--v1"
                            className={styles.userDp}
                        />"
                    </a>
                    <span>Aakash</span>
                </div>

                <div className={styles.navLinks}>
                    <ul>
                        <li>
                            <a href="/">Log in</a>
                        </li>
                        <li>
                            <a href="/">Log out</a>
                        </li>
                        <li>
                            <a href="/">Register</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;