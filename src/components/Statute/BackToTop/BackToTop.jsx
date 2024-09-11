import styles from './BackToTop.module.css';
export const BackToTopButton=()=>{
    const backToTopHandler=()=>{
        window.scrollTo({top:0,behavior:'smooth'});
    }
    return (<button type='button' onClick={backToTopHandler} className={styles.buttonToTop}>↑</button>)
}
